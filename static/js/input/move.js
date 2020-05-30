class ElementMover {

    constructor( camera, input, select ) {

        this.camera = camera;
        this.inputControls = input;
        this.elementSelector = select;

        this.planes = [];
        this.planeBoundingBoxes = [];

        this.selectedObject = false;
        this.movementEnabled = false;
    }

    /**
     * Adds planes that will be selected via Select.raycast when mouse move.
     * 
     * @param {THREE.Mesh} plane Mesh that will be selectable via Select.raycast.
     */
    addMovePlane( plane ) {

        this.planes.push( plane );
        this.planeBoundingBoxes.push( plane.geometry.boundingBox );
    }

    /**
     * Update method that is called when mouse is moved.
     */
    update() {

        if( this.elementSelector.getSelectedObject() == null ) {
            return;
        }

        const intersection = Select.raycast( this.camera, this.inputControls.mousePosition, true, this.planes, 10 );
        const element = this.elementSelector.getSelectedObject();

        // Moves element when user holds LMB & element is selected & mouse is hovering above wall.
        if( intersection && this.inputControls.latestButtons == 1 && this.movementEnabled ) {
            
            /*for( let i = 0; i < elementsEditor.userData.elements.length; i++ ) {

                const e = elementsEditor.userData.elements[ i ];
                if( element == e ) {
                    continue;
                }

                console.log( element.boundingBox.box.intersectsBox( e.boundingBox.box ) );
            }*/

            // Check for AABB collision
            this.planes.forEach( ( plane ) => {

                let matrixPos = new THREE.Vector3();
                matrixPos.setFromMatrixPosition( plane.matrixWorld );
                const newPosX = intersection.point.x - matrixPos.x;

                element.setPosition( THREE.MathUtils.clamp( newPosX, 5, 435 ), 0, element.userData.settings.baseDepth + 5 );
            });            
        }
        
    }
}