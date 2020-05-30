class ViewerFloorplanner {

    constructor(blueprint3d) {

        const
            move = '#move',
            remove = '#delete',
            draw = '#draw',
            activeStlye = 'btn-primary disabled',
            scope = this;

        this.floorPlanner = blueprint3d.floorplanner;     
        $(window).resize(() =>  {
            scope.handleWindowResize();
        });

        this.floorPlanner.addEventListener(BP3DJS.EVENT_MODE_RESET, function (mode) {

            $(draw).removeClass(activeStlye);
            $(remove).removeClass(activeStlye);
            $(move).removeClass(activeStlye);

            if (mode == BP3DJS.floorplannerModes.MOVE) {
                $(move).addClass(activeStlye);
            } else if (mode == BP3DJS.floorplannerModes.DRAW) {
                $(draw).addClass(activeStlye);
            } else if (mode == BP3DJS.floorplannerModes.DELETE) {
                $(remove).addClass(activeStlye);
            }
            if (mode == BP3DJS.floorplannerModes.DRAW) {
                scope.handleWindowResize();
            }
        });
        $(move).click(function () {
            scope.floorPlanner.setMode(BP3DJS.floorplannerModes.MOVE);
        });
        $(draw).click(function () {
            scope.floorPlanner.setMode(BP3DJS.floorplannerModes.DRAW);
        });
        $(remove).click(function () {
            scope.floorPlanner.setMode(BP3DJS.floorplannerModes.DELETE);
        });
    }

    updateFloorplanView() {
        this.floorPlanner.reset();
    }

    handleWindowResize() {
        const canvasWrapper = '#floorplanner';
        $(canvasWrapper).height(window.innerHeight - $(canvasWrapper).offset().top);
        this.floorPlanner.resizeView();
    }
}