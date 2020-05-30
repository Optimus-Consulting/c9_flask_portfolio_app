class Element extends THREE.Group {

    constructor(scene, editor, settings, rotationDeg) {

        super();

        this.userData.scene = scene;
        this.userData.wireGroup = new THREE.Group();
        this.userData.elementSizeTexts = new THREE.Group();

        this.userData.elementEditor = editor;
        this.userData.settings = {};
        this.userData.rotationDeg = {};

        this.boundingBox = {};
        this.boundingBox["box"] = null;
        this.boundingBox["size"] = new THREE.Vector3();

        Object.assign(this.userData.settings, settings);
        Object.assign(this.userData.rotationDeg, rotationDeg);

        this.userData.scene.add(this);
    }

    /**
     * Generates base element based on settings.
     */
    generate() {

        if (this.children[0] !== undefined) {
            this.children = [];

            this.userData.scene.remove(this.userData.wireGroup);
            this.userData.wireGroup = new THREE.Group();
        }

        const elType = this.userData.settings.elType;
        const scope = this;

        this._requestData(elType).then((data) => {

            data.some((v) => {

                const panel = scope._createPanel(v.tag, new THREE.Vector3(v.gXwidth, v.gYdepth, v.gZheight));
                panel.position.set(v.centre.x, v.centre.y, v.centre.z);
            });

            this._redrawWireframe();

            this.boundingBox.box = new THREE.Box3().setFromObject(this);
            this.boundingBox.box.getSize(this.boundingBox.size);

            this.setRotation(THREE.MathUtils.degToRad(this.userData.rotationDeg.X), THREE.MathUtils.degToRad(this.userData.rotationDeg.Y), THREE.MathUtils.degToRad(this.userData.rotationDeg.Z));
            this.userData.elementEditor.userInterface.showBaseElementProperties(this);
        });
    }

    /**
     * Removes element from the scene and cleans up memory.
     */
    remove() {
        this.userData.scene.remove(this.userData.wireGroup);
        this.userData.scene.remove(this.userData.elementSizeTexts);

        this.children.forEach((panel) => {

            panel.dispose();
        });

        elementsEditor.removeElement(this);
        this.userData.scene.remove(this);
    }

    /**
     * Sets base element's position.
     * 
     * @param {float} x position
     * @param {float} y position
     * @param {float} z position
     */
    setPosition(x, y, z) {

        this.position.set(x, y, z);
        this.moveWireframe();
    }

    /**
     * Sets base element's rotation.
     * 
     * @param {float} x rotation
     * @param {float} y rotation
     * @param {float} z rotation
     */
    setRotation(x, y, z) {

        this.rotation.set(x, y, z);
        this.moveWireframe();
    }

    /**
     * Toggles front panels (drawers/doors).
     */
    toggleFront() {

        const settings = this.userData.settings;
        const scope = this;

        this.children.forEach((panel, index) => {

            const offset = (settings.isFrontOpened ? -(settings.baseDepth - 10) : (settings.baseDepth - 10));

            if (panel.type == PanelType.Door || panel.type == PanelType.Drawer) {

                var pos = new THREE.Vector3(
                    panel.position.x,
                    panel.position.y - offset,
                    panel.position.z
                );

                panel.position.copy(pos);
                scope.userData.wireGroup.children[index].position.copy(panel.position);
            }
        });
        settings.isFrontOpened = !settings.isFrontOpened;
    }

    /**
     * Moves wireframe group in the position and rotation as BaseElement's group.
     */
    moveWireframe() {

        this.userData.wireGroup.position.copy(this.position);
        this.userData.wireGroup.rotation.copy(this.rotation);
    }

    /**
     *  Creates elements panel based on width, height and depth.
     * 
     * @param {PanelType} type Panels type
     * @param {THREE.Vector3} size Panels size
     */
    _createPanel(type, size) {

        const panel = new Panel(this.userData.scene, type, size);
        panel.generateMesh();
        this.add(panel);
        return panel;
    }

    /**
     * Redraws wireframe of all panels in base element.
     */
    _redrawWireframe() {

        var mat = new THREE.LineBasicMaterial({
            color: 0x000000,
            linewidth: 2
        });

        var oldRotation = this.userData.wireGroup.rotation;
        this.userData.scene.remove(this.userData.wireGroup);
        this.userData.wireGroup = new THREE.Group();

        var scope = this;
        this.children.forEach(function (panel, index) {

            scope.userData.wireGroup.add(new THREE.LineSegments(new THREE.EdgesGeometry(panel.geometry), mat));
            scope.userData.wireGroup.children[index].position.copy(panel.position);
        });

        this.userData.scene.add(this.userData.wireGroup);
        this.userData.wireGroup.position.copy(this.position);
        this.userData.wireGroup.rotation.set(oldRotation.x, oldRotation.y, oldRotation.z);
    }

    /**
     * Sends API request for the elements data based on settings.
     * 
     * @param {String} elType Elements type 
     */
    async _requestData(elType) {

        const settings = this.userData.settings;
        let equipmentStr = "";

        settings.equipment.forEach((value) => {
            equipmentStr += `&equipment=${value}`
        });

        const url = `./api/v1/addElement?&width=${settings.baseWidth}&depth=${settings.baseDepth}&height=${settings.baseHeight}&elType=${elType}&drawers=${settings.drawersCount}&cjRoom=${settings.cjRoom}${equipmentStr}&hDivider=${settings.hDivider}&vDivider=${settings.vDivider}`;
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }
}