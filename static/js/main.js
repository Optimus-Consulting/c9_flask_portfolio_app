// Global Variables
let blueprint3d = null,
    input = null,
    elementSelect = null,
    elementUi = null,
    elementMover = null,
    lastElementType = 0;

const simpleHouse = '{ "floorplan":{ "corners":{ "71d4f128-ae80-3d58-9bd2-711c6ce6cdf2":{ "x":0, "y":0, "elevation":4 }, "f90da5e3-9e0e-eba7-173d-eb0b071e838e":{ "x":0, "y":5, "elevation":4 }, "da026c08-d76a-a944-8e7b-096b752da9ed":{ "x":5, "y":5, "elevation":4 }, "4e3d65cb-54c0-0681-28bf-bddcc7bdb571":{ "x":5, "y":0, "elevation":4 } }, "walls":[ { "corner1":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2", "corner2":"f90da5e3-9e0e-eba7-173d-eb0b071e838e", "frontTexture":{ "url":"/static/rooms/textures/wallmap.png", "stretch":true, "scale":0 }, "backTexture":{ "url":"/static/rooms/textures/wallmap.png", "stretch":true, "scale":0 } }, { "corner1":"f90da5e3-9e0e-eba7-173d-eb0b071e838e", "corner2":"da026c08-d76a-a944-8e7b-096b752da9ed", "frontTexture":{ "url":"/static/rooms/textures/wallmap.png", "stretch":true, "scale":0 }, "backTexture":{ "url":"/static/rooms/textures/wallmap.png", "stretch":true, "scale":0 } }, { "corner1":"da026c08-d76a-a944-8e7b-096b752da9ed", "corner2":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571", "frontTexture":{ "url":"/static/rooms/textures/wallmap.png", "stretch":true, "scale":0 }, "backTexture":{ "url":"/static/rooms/textures/wallmap.png", "stretch":true, "scale":0 } }, { "corner1":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571", "corner2":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2", "frontTexture":{ "url":"/static/rooms/textures/wallmap.png", "stretch":true, "scale":0 }, "backTexture":{ "url":"/static/rooms/textures/wallmap.png", "stretch":true, "scale":0 } } ], "rooms":{ "f90da5e3-9e0e-eba7-173d-eb0b071e838e,71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,da026c08-d76a-a944-8e7b-096b752da9ed":{ "name":"A New Room" } }, "wallTextures":[ ], "floorTextures":{ }, "newFloorTextures":{ }, "carbonSheet":{ "url":"", "transparency":1, "x":0, "y":0, "anchorX":0, "anchorY":0, "width":0.01, "height":0.01 } }, "items":[ ] }';

// Init Function
$(document).ready(() => {

    const opts = {
        floorplannerElement: 'floorplanner-canvas',
        threeElement: '#three-planner',
        threeCanvasElement: 'three-canvas',
        textureDir: "static/models/textures/",
        widget: false
    }

    blueprint3d = new BP3DJS.BlueprintJS(opts);
    blueprint3d.model.loadSerialized(simpleHouse);
    new ViewerFloorplanner(blueprint3d);
    const domElement = document.getElementById("three-planner").querySelector('canvas');

    // Custom Classes
    input = new Input(domElement);
    elementSelect = new Select(domElement);
    elementUi = new UI();
    elementsEditor = new ElementsEditor(elementSelect, elementUi);
    elementMover = new ElementMover(blueprint3d.three.camera, input, elementSelect);
    
    blueprint3d.model.floorplan.wallEdgePlanes().forEach((plane) => {
        elementMover.addMovePlane(plane);
    });

    // Add Listeners
    blueprint3d.three.stopSpin();
    addListeners(domElement);
});

/**
 * Adds listeners to the dom.
 */
function addListeners(dom) {

    blueprint3d.three.addEventListener(BP3DJS.EVENT_FRAME_UPDATE, function () {
        input.update();
    });

    dom.addEventListener('pointerDown', function () {

        if (elementMover == null) {
            return;
        }

        var intersection = Select.raycast(blueprint3d.three.camera, input.mousePosition, true, elementSelect.selectables);
        if (intersection && elementSelect.getSelectedObject() != null) {

            blueprint3d.three.setCursorStyle("move");
            elementMover.movementEnabled = true;
            blueprint3d.three.controls.enableRotate = false;
        }

    }, false);

    dom.addEventListener('pointerMove', function () {

        if (elementMover == null) {
            return;
        }
        elementMover.update();

        // Hover Intersections
        var intersection = Select.raycast(blueprint3d.three.camera, input.getMouseCoords(), true, elementSelect.selectables);
        if (intersection) {

            elementSelect.hover(intersection.object.parent, 0xffff00);

        } else {

            elementSelect.hover(null, null);
        }

    }, false);

    dom.addEventListener('pointerUp', function () {

        if (elementMover == null) {
            return;
        }

        var intersection = Select.raycast(blueprint3d.three.camera, input.getMouseCoords(), true, elementSelect.selectables);
        if (intersection) {

            elementSelect.select(intersection.object.parent);
            elementUi.showBaseElementProperties(intersection.object.parent);

        } else if (!intersection && !elementMover.movementEnabled) {

            elementUi.back();
            elementSelect.deselect();
        }

        blueprint3d.three.setCursorStyle("auto");
        elementMover.movementEnabled = false;
        blueprint3d.three.controls.enableRotate = true;

    }, false);
}