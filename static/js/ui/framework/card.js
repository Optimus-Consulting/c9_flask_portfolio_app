class UserInterface {

    /**
     * Adds new folder into UI.
     * @param {*} context DIV element in which will be folder appended.
     * @param {String} title What title should be used for this folder.
     */
    addFolder(context, title, isMainFolder = false) {
        let folderId = title.replace(/\s/g, '').toLowerCase();

        const panelRoot = $("<div>", {
            "id": folderId,
            "class": "card" + (isMainFolder ? " main-card" : "")
        });
        const panelHeading = $("<div>", {
            "class": "card-header",
            "type": "button",
            "data-toggle": "collapse",
            "aria-expanded": "false",
            "data-target": "#panel-" + folderId
        }).html(title);

        const panelBody = $("<div>", {
            "id": "panel-" + folderId,
            "class": "collapse card-body"
        });

        $(context).append(panelRoot);
        $(panelRoot).append(panelHeading).append(panelBody);
        return new Folder(panelHeading, panelBody);
    }

    /**
     * Creates folder without cards.
     * @param {*} context DIV element in which will be folder appended.
     * @param {String} title What title should be used for this folder.
     */
    addCleanFolder(context, title) {
        let folderId = title.replace(/\s/g, '').toLowerCase();

        const panelRoot = $("<div>", {
            "id": folderId
        });

        $(context).append(panelRoot);
        return new Folder(null, panelRoot);
    }

    /**
     * Creates folder as a form without cards.
     * @param {*} context DIV element in which will be folder appended.
     * @param {String} title What title should be used for this folder.
     */
    addFormFolder(context, title) {

        let folderId = title.replace(/\s/g, '').toLowerCase();

        const panelHeading = $("<span>", {
            "class": "font-weight-bold text-left"
        }).html(title);

        const panelBody = $("<div>", {
            "id": folderId,
            "class": "row mt-3"
        });

        $(context).append(panelHeading).append(panelBody);
        return new FormFolder(panelHeading, panelBody);
    }

    /**
     * Removes folder from the UI.
     * @param {String} title What is title of wanted folder
     */
    removeFolder(title) {
        let folderId = title.replace(" ", "").toLowerCase();
        if (folderId == "") {
            return;
        }
        $("#" + folderId).remove();
        return this;
    }
}

class Folder {

    constructor(panelHeading, panelBody) {
        this.panelHeading = panelHeading;
        this.panelBody = panelBody;
    }

    /**
     * Adds new item into folder.
     * @param {*} object What object should be used.
     * @param {*} property What property of object should be used.
     * @param {*} params Optional parameters for different input types.
     */
    add(object, property, ...params) {
        const root = $("<div>", {
            "id": this.panelTitle,
            "class": "form"
        });

        const inputRoot = $("<div>", {
            "class": "form-group"
        });

        const label = $("<label>", {
            "class": "control-label"
        }).html(this._toTitleCase(property));

        $(this.panelBody).append(root);
        $(root).append(inputRoot);

        let input = null;
        let index = -1;

        if (object[property].constructor == Array && params[0].constructor == Number) {

            input = this._generateInput(object[property][params[0]]);
            const removeBtn = this._generateButton("btn-danger").html('<i class="far fa-trash-alt"></i>');

            $(inputRoot).append(label).append(input).append(removeBtn);
            return new RemovableItem(label, input, object, property, params[0], removeBtn);

        } else if (params[0] !== undefined && params.length == 1 && params[0].constructor == Object) { // params = {key:value, key:value}

            input = this._generateSelectList(params[0], object[property]);
            $(inputRoot).append(label).append(input);

        } else if (params[0] !== undefined && params.length == 3) { // params = [min, max, step]

            input = this._generateInput(object[property], params[0], params[1], params[2]);
            $(inputRoot).append(label).append(input);

        } else if (this._isFunction(object[property])) {

            input = this._generateButton("btn-primary");
            $(inputRoot).append(input);
        } else {

            input = this._generateInput(object[property]);        
            $(inputRoot).append(label).append(input);
        }
        return new Item(label, input, object, property, index);
    }

    /**
     * Shows panel body.
     */
    open() {
        this.panelHeading.attr("aria-expanded", "true");
        this.panelBody.addClass("collapse").addClass("show");
        return this;
    }

    /**
     * Hides panel body.
     */
    close() {
        this.panelHeading.attr("aria-expanded", "false");
        this.panelBody.removeClass("collapse").removeClass("show");
        return this;
    }

    /**
     * Generates button element for the UI.
     * @param {String} type CSS class for button design (eg. btn-primary). 
     */
    _generateButton(type) {
        return $('<button>').attr({
            type: "button",
            class: "btn " + type
        });
    }

    /**
     * Generates input field for the UI.
     * @param {*} object
     */
    _generateInput(object, min = "", max  = "", step  = "") {
        const input = $('<input>').attr({
            type: (object.constructor == String ? "text" : "number"),
            class: "form-control",
            value: (object.constructor == String ? this._toTitleCase(object) : object)
        });

        if( min !== "" ) {
            input.attr("min", min);
        }

        if( max !== "" ) {
            input.attr("max", max);
        }

        if( step !== "" ) {
            input.attr("step", step);
        }
        return input;
    }

    /**
     * Generates selection list for the UI.
     * @param {Dictionary} object Dictionary from which data is shown on the selection list. 
     */
    _generateSelectList(object, selectVal) {

        const input = $('<select>').attr({
            class: "form-control"
        });

        for (const [key, value] of Object.entries(object)) {
            $('<option>').val(value).text(key).appendTo(input);
        }       

        $(input).val(selectVal);
        return input;
    }

    /**
     * Changes string cases into title case (eg. HELLO WORLD => Hello World).
     * @param {String} str 
     */
    _toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }

    /**
     * Check if given object is function.
     * @param {*} functionToCheck Object to check.
     */
    _isFunction(functionToCheck) {
        return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
    }
}

class Item {

    constructor(label, input, object, property, index) {
        this.itemLabel = label;
        this.itemInput = input;
        this.object = object;
        this.property = property;
        this.index = index;

        if ($(this.itemInput).attr("type") == "button") {

            $(this.itemInput).click(() => {
                this.object[this.property]();
            });
        }

        if ($(this.itemInput).attr("min") !== undefined && $(this.itemInput).attr("max") !== undefined) {
            this._onMinMaxCheck();
        }
    }

    /**
     * Changes label text of a UI item.
     * @param {String} name Label text
     */
    name(name) {

        if ($(this.itemInput).attr("type") == "button") {
            this.itemInput.html(name);
        } else {
            this.itemLabel.html(name);
        }
        return this;
    }

    /**
     * Makes input element readonly.
     */
    disable() {
        $(this.itemInput).attr("disabled", "disabled");
    }

    /**
     * Listener for onChange() event.
     * @param {*} callback Callback that is called when onChange event is occured.
     */
    onChange(callback) {
        $(this.itemInput).change(() => {

            if (this.index != -1) {
                this.object[this.property][this.index] = $(this.itemInput).val();
            } else {
                this.object[this.property] = $(this.itemInput).val();
            }

            if (!this._isFunction(callback)) {
                return;
            }
            callback($(this.itemInput).val(), $(this.itemInput).prop('selectedIndex'));
        });
        return this;
    }

    /**
     * Listener for onClick() event.
     * @param {*} callback Callback that is called when onChange event is occured.
     */
    onClick(callback) {
        $(this.itemInput).click(() => { 
            callback();
        });
        return this;
    }

    /**
     * Prevents new value to go out of bounds: [min, max]
     */
    _onMinMaxCheck() {
        $(this.itemInput).change((event) => {
            const currentValue = $(this.itemInput).val();
            if (currentValue > $(this.itemInput).attr("max")) {
                $(this.itemInput).val($(this.itemInput).attr("max"));
            } else if (currentValue < $(this.itemInput).attr("min")) {
                $(this.itemInput).val($(this.itemInput).attr("min"));
            }
        });
    }

    /**
     * Check if given object is function.
     * @param {*} functionToCheck Object to check.
     */
    _isFunction(functionToCheck) {
        return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
    }
}

class RemovableItem extends Item {

    constructor(label, input, object, property, index, removeBtn) {

        super(label, input, object, property, index);
        this.removeButton = removeBtn;
    }

    /**
     * Listener for the remove event.
     * @param {Function} callback Get's called when onRemove event is called.
     */
    onRemove(callback) {
        $(this.removeButton).click(() => {
            callback();
        });
        return this;
    }
}