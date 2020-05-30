class UI {

    constructor() {
        this.gui = new UserInterface();
        this.activeFolderName = "";
    }

    remove() {

        this.gui.removeFolder(this.activeFolderName);
        this.activeFolderName = "";
    }

    back() {

        this.remove();
    }

    // Shows Default Properties
    showSceneProperties(editor, index) {

        this.remove();
        this.activeFolderName = "Scene Properties";
        this.editor = editor;
        const scope = this;

        const mainFolder = this.gui.addCleanFolder($("#add-elements-context"), this.activeFolderName);

        const settingsFolder = this.gui.addFormFolder(mainFolder.panelBody, "Elements Default Settings");
        settingsFolder.add(editor.userData.generationData[index], "elType", {
            Base: "base",
            Tall: "tall",
            Top: "top" //,
            //Corner: "corner"
        }).name("Element Type").onChange((value, i) => {

            lastElementType = i;
            scope.showSceneProperties(editor, i);
        });
        settingsFolder.add(editor.userData.generationData[index], "baseWidth").name("Base Width").onChange(() => {});
        settingsFolder.add(editor.userData.generationData[index], "baseDepth").name("Base Depth").onChange(() => {});
        settingsFolder.add(editor.userData.generationData[index], "baseHeight").name("Base Height").onChange(() => {});

        settingsFolder.add(editor.userData.generationData[index], "carcasThick").name("Carcas").onChange(() => {});
        settingsFolder.add(editor.userData.generationData[index], "frontThick").name("Front Thickness").onChange(() => {});
        settingsFolder.add(editor.userData.generationData[index], "backThick").name("Back Thickness").onChange(() => {});
        settingsFolder.add(editor.userData.generationData[index], "frontOverhang").name("Front Overhang").onChange(() => {});
        settingsFolder.add(editor.userData.generationData[index], "cjRoom").name("CJ Room").onChange(() => {});
        settingsFolder.add(editor.userData.generationData[index], "toekick").name("Toekick").onChange(() => {});
        settingsFolder.add(editor.userData.generationData[index], "vertOff").name("Vertical offset").onChange(() => {});
        settingsFolder.add(editor.userData.generationData[index], "workTopThick").name("Worktop Thickness").onChange(() => {});
        settingsFolder.add(editor.userData.generationData[index], "baseFront", {
            Doors: "Doors",
            Drawers: "Drawers"
        }).name("Base Front").onChange(() => {});
        settingsFolder.add(editor.userData.generationData[index], "drawersCount", 1, 4, 1).name("Drawers Count").onChange(() => {});

        const dividersFolder = this.gui.addFormFolder(mainFolder.panelBody, "Dividers");
        dividersFolder.add(editor.userData.generationData[index], "autoDivEvery").name("Auto dividers every").onChange(() => {});
        dividersFolder.add(editor.userData.generationData[index], "hDivider").name("Horizontal Dividers").onChange(() => {});
        dividersFolder.add(editor.userData.generationData[index], "vDivider").name("Vertical Dividers").onChange(() => {});

        const rotationFolder = this.gui.addFormFolder(mainFolder.panelBody, "Rotation Default Settings");
        rotationFolder.add(editor.userData.rotationDeg, "X", 0, 360, .1).name("X").onChange(() => {});
        rotationFolder.add(editor.userData.rotationDeg, "Y", 0, 360, .1).name("Y").onChange(() => {});
        rotationFolder.add(editor.userData.rotationDeg, "Z", 0, 360, .1).name("Z").onChange(() => {});

        const equipmentFolder = this.gui.addFormFolder(mainFolder.panelBody, "Equipment");
        editor.userData.generationData[index]["equipment"].forEach((value, i) => {
            equipmentFolder.add(editor.userData.generationData[index], "equipment", i).name("Equipment " + i).onChange(() => {}).onRemove(() => {
                editor.removeEquipment(index, i);
            });
        });

        mainFolder.add(editor, "addEquipment").name("Add equipment");
        mainFolder.add(editor, "generate").name("Generate new element").onClick(() => {
            $('#add-elements-modal').modal('toggle');
        });
    }

    // Shows Per Element Properties
    showBaseElementProperties(element) {

        this.remove();
        this.activeFolderName = "Base Element";

        const mainFolder = this.gui.addFolder($("#element-sidebar"), this.activeFolderName, true);
        mainFolder.open();

        const transformFolder = this.gui.addFolder(mainFolder.panelBody, "Transform");

        // Position Folder
        const posFolder = this.gui.addFolder(transformFolder.panelBody, "Position");
        posFolder.add(element.position, "x").name("X").onChange(() => {
            element.moveWireframe();
        });
        posFolder.add(element.position, "y").name("Y").onChange(() => {
            element.moveWireframe();
        });
        posFolder.add(element.position, "z").name("Z").onChange(() => {
            element.moveWireframe();
        });

        // Rotation Folder
        const rotFolder = this.gui.addFolder(transformFolder.panelBody, "Rotation");
        rotFolder.add(element.userData.rotationDeg, "X", 0, 360, .1).name("X").onChange((value) => {

            element.rotation.x = THREE.MathUtils.degToRad(value);
            element.setRotation(element.rotation.x, element.rotation.y, element.rotation.z);

        });
        rotFolder.add(element.userData.rotationDeg, "Y", 0, 360, .1).name("Y").onChange((value) => {

            element.rotation.y = THREE.MathUtils.degToRad(value);
            element.setRotation(element.rotation.x, element.rotation.y, element.rotation.z);

        });
        rotFolder.add(element.userData.rotationDeg, "Z", 0, 360, .1).name("Z").onChange((value) => {

            element.rotation.z = THREE.MathUtils.degToRad(value);
            element.setRotation(element.rotation.x, element.rotation.y, element.rotation.z);

        });

        // Size Folder
        const sizeFolder = this.gui.addFolder(transformFolder.panelBody, "Size");
        let folder = sizeFolder.add(element.boundingBox.size, "x").name("Width").disable();
        folder = sizeFolder.add(element.boundingBox.size, "y").name("Height").disable();
        folder = sizeFolder.add(element.boundingBox.size, "z").name("Depth").disable();

        // Settings Folder
        const settingsFolder = this.gui.addFolder(mainFolder.panelBody, "Settings");
        settingsFolder.add(element.userData.settings, "elType").name("Element Type").disable();
        settingsFolder.add(element.userData.settings, "carcasThick").name("Carcas").onChange(() => {});
        settingsFolder.add(element.userData.settings, "frontThick").name("Front Thickness").onChange(() => {});
        settingsFolder.add(element.userData.settings, "backThick").name("Back Thickness").onChange(() => {});
        settingsFolder.add(element.userData.settings, "frontOverhang").name("Front Overhang").onChange(() => {});
        settingsFolder.add(element.userData.settings, "cjRoom").name("CJ Room").onChange(() => {});
        settingsFolder.add(element.userData.settings, "baseWidth").name("Base Width").onChange(() => {});
        settingsFolder.add(element.userData.settings, "baseHeight").name("Base Height").onChange(() => {});
        settingsFolder.add(element.userData.settings, "baseDepth").name("Base Depth").onChange(() => {});
        settingsFolder.add(element.userData.settings, "toekick").name("Toekick").onChange(() => {});
        settingsFolder.add(element.userData.settings, "workTopThick").name("Worktop Thickness").onChange(() => {});
        settingsFolder.add(element.userData.settings, "baseFront", {
            Doors: "Doors",
            Drawers: "Drawers"
        }).name("Base Front").onChange(() => {});
        settingsFolder.add(element.userData.settings, "drawersCount", 1, 4, 1).name("Drawers Count").onChange(() => {});
        settingsFolder.add(element, 'generate').name("Regenerate element");

        // Buttons
        mainFolder.add(element, "toggleFront").name("Toggle front");
        mainFolder.add(element, "remove").name("Delete Element");
        mainFolder.add(this, "back").name("Back");
    }
}