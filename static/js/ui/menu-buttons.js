// Init Function
$(document).ready(() => {

    let menuElement = $("#design_tab");

    $("#design_tab").click(() => {
        // Update User Interface
        $("#design_tab").removeClass("btn-light").addClass("btn-primary");
        $(menuElement).removeClass("btn-primary").addClass("btn-light");
        menuElement = $("#floorplan_tab");

        $("#floorplanner-canvas").hide();
        $("#floorplanner-controls").hide();

        $("#three-planner canvas").show();
        $("#main-controls").show();

        // Re-Setup Blueprint3d
        blueprint3d.model.floorplan.update();
        blueprint3d.three.pauseTheRendering(false);
        blueprint3d.three.switchFPSMode(false);
    });

    $("#floorplan_tab").click(() => {
        // Update User Interface
        $("#floorplan_tab").removeClass("btn-light").addClass("btn-primary");
        $(menuElement).removeClass("btn-primary").addClass("btn-light");        
        menuElement = $("#floorplan_tab");

        $("#floorplanner-canvas").show();
        $("#floorplanner-controls").show();

        $("#three-planner canvas").hide();
        $("#main-controls").hide();

        // Re-Setup Blueprint3d
        blueprint3d.three.pauseTheRendering(true);
        blueprint3d.three.getController().setSelectedObject(null);
    });

    $("a.thumbnail.add-item").click((event) => {

        event.stopPropagation();
        event.stopImmediatePropagation();

        const element = event.currentTarget;
        const modelUrl = $(element).attr("model-url"),
            itemType = parseInt($(element).attr("model-type")),
            itemFormat = $(element).attr('model-format'),
            metadata = {
                itemName: $(element).attr("model-name"),
                resizable: true,
                modelUrl: modelUrl,
                itemType: itemType,
                format: itemFormat
            };
        blueprint3d.model.scene.addItem(itemType, modelUrl, metadata, null, null, null, false, {
            position: new THREE.Vector3(0, 0, 0)
        });
    });

    // Adds Elements
    $("#element_settings").click(() => {

        elementUi.showSceneProperties(elementsEditor, lastElementType);
    });

    $("#add-base-element").click(() => {

        elementsEditor.generate(0);
    });

    $("#add-tall-element").click(() => {

        elementsEditor.generate(1);
    });

    $("#add-top-element").click(() => {

        elementsEditor.generate(2);
    });
});