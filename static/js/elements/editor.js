class ElementsEditor extends THREE.Object3D {

    constructor(select, ui) {

        super();
        this.userData.selector = select;

        const scope = this;
        this.userData.generationData = [];

        this._requestData().then((data) => {

            data.forEach((json) => {

                // Global Default Settings
                const tmpData = {};
                tmpData["elType"] = json["elType"];
                tmpData["carcasThick"] = json["carcasThick"];
                tmpData["frontThick"] = json["frontThick"];
                tmpData["backThick"] = json["backThick"];
                tmpData["frontOverhang"] = json["frontOverhang"];
                tmpData["cjRoom"] = json["cjRoom"];
                tmpData["vertOff"] = json["vertOff"];
                tmpData["baseWidth"] = json["baseWidth"];
                tmpData["baseDepth"] = json["baseDepth"];
                tmpData["baseHeight"] = json["baseHeight"];
                tmpData["topDepth"] = json["topDepth"];
                tmpData["topHeight"] = json["topHeight"];
                tmpData["tallboyDepth"] = json["tallboyDepth"];
                tmpData["tallboyHeight"] = json["tallboyHeight"];
                tmpData["toekick"] = json["toekick"];
                tmpData["workTopThick"] = json["workTopThick"];
                tmpData["baseFront"] = json["baseFront"];
                tmpData["drawersCount"] = json["drawersCount"];
                tmpData["isFrontOpened"] = json["isFrontOpened"];
                tmpData["equipment"] = json["equipment"];
                tmpData["autoDivEvery"] = json["autoDivEvery"];
                tmpData["hDivider"] = json["hDivider"];
                tmpData["vDivider"] = json["vDivider"];
                scope.userData.generationData.push(tmpData);
            });
        });

        this.userData.rotationDeg = {};
        this.userData.rotationDeg["X"] = 270;
        this.userData.rotationDeg["Y"] = 0;
        this.userData.rotationDeg["Z"] = 0;

        this.userData.lastElementPos = undefined;
        this.userData.font = undefined;
        this.userInterface = ui;

        this.userData.elements = [];
    }

    /**
     * Generates new kitchen element.
     * @param {Integer} index Index of element in generationData.
     */
    generate(index) {

        //this._setupElementProperties(index);

        var element = new Element(
            blueprint3d.model.scene,
            this,
            this.userData.generationData[index],
            this.userData.rotationDeg
        );

        element.generate();
        this.userData.elements.push(element);
        this.userData.selector.selectables.push(element);

        // Set elements position
        this.setElementsPosition(element);
    }

    /**
     * 
     * @param {THREE.Group} element What element should be deleted.
     */
    removeElement(element) {

        this._removeFromArray(this.userData.elements, element);
        this._removeFromArray(this.userData.selector.selectables, element);
        this.userInterface.back();
    }

    /**
     * Sets position based on the last element.
     */
    setElementsPosition(element) {

        var posX = 0;
        if (this.userData.lastElement === undefined) {

            posX = 5;
            this.userData.lastElement = element;

        } else {

            var lastElement = this.userData.lastElement;
            posX = 0.05 + lastElement.position.x + lastElement.userData.settings.baseWidth;
            this.userData.lastElement = element;
        }

        element.setPosition(posX, 0, element.userData.settings.baseDepth + 5); // 5 is half of a wall
    }

    /**
     * Adds new equipment to the array.
     */
    addEquipment() {

        this.userData.generationData[dataIndex]["equipment"].push(0);
        this.userInterface.showSceneProperties(this);
    }

    /**
     * Removes equipment from the array.
     * @param {Integer} dataIndex Index of element in generationData.
     * @param {Integer} index Index of equipment.
     */
    removeEquipment(dataIndex, index) {

        const array = this.userData.generationData[dataIndex]["equipment"];
        if (index >= 0 && index < array.length) {
            array.splice(index, 1);
        }
        this.userData.generationData[dataIndex]["equipment"] = array;
        this.userInterface.showSceneProperties(this, dataIndex);
    }

    /**
     * Removes element from array.
     * @param {*} array 
     * @param {*} element 
     */
    _removeFromArray(array, element) {
        const index = array.indexOf(element);
        if(index > -1) {
            array.splice(index, 1);
        }
    }

    /**
     * Sends API request for the elements data based on settings.
     */
    async _requestData() {

        const url = './static/js/elements/element_info.json';
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }
}