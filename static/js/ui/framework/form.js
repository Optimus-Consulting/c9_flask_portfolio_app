class FormFolder {

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
        const inputRoot = $("<div>", {
            "id": this.panelTitle,
            "class": "form-group col-md-4"
        });

        const label = $("<label>", {
            "class": "control-label col"
        }).html(this._toTitleCase(property));

        const inlineRoot = $("<div>", {
            "class": "m-0 row"
        });

        $(this.panelBody).append(inputRoot);

        let input = null;
        let index = -1;

        if (object[property].constructor == Array && params[0].constructor == Number) {

            input = this._generateInput(object[property][params[0]]);
            input.addClass("col");

            const removeBtn = this._generateButton("btn-danger").html('<i class="far fa-trash-alt"></i>');
            removeBtn.addClass("col-md-2 ml-2");
            $(inlineRoot).append(input).append(removeBtn);


            $(inputRoot).append(label).append(inlineRoot);
            return new RemovableItem(label, input, object, property, params[0], removeBtn);

        } else if (params[0] !== undefined && params.length == 1 && params[0].constructor == Object) { // params = {key:value, key:value}
            
            input = this._generateSelectList(params[0], object[property]);
            input.addClass("col");
            
            $(inlineRoot).append(label).append(input);
            $(inputRoot).append(inlineRoot);

        } else if (params[0] !== undefined && params.length == 3) { // params = [min, max, step]

            input = this._generateInput(object[property], params[0], params[1], params[2]);
            input.addClass("col");
            
            $(inlineRoot).append(label).append(input);
            $(inputRoot).append(inlineRoot);

        } else if (this._isFunction(object[property])) {

            input = this._generateButton("btn-primary");
            $(inputRoot).append(input);
        } else {

            input = this._generateInput(object[property]);
            input.addClass("col");
            
            $(inlineRoot).append(label).append(input);
            $(inputRoot).append(inlineRoot);
        }
        return new Item(label, input, object, property, index);
    }

    /**
     * Shows panel body.
     */
    open() {
        this.panelHeading.attr("aria-expanded", "true");
        this.panelBody.addClass("open").addClass("in");
        return this;
    }

    /**
     * Hides panel body.
     */
    close() {
        this.panelHeading.attr("aria-expanded", "false");
        this.panelBody.removeClass("open").removeClass("in");
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