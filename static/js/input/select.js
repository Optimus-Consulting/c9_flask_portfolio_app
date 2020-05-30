class Select {

    constructor( domElement ) {

        this.domElement = domElement;    
        this.selectables = [];
        this.linePrecision = 15;
        this.hoveredObject = null;
        this.oldColor = [];
        this.selectedObject = null;
    }

    /**
     * Selects object.
     * 
     * @param object Object that user selected.
     */
    select ( object ) {

        this.deselect();
    
        this.selectedObject = object;
    }

    /**
     * Deselects object.
     */
    deselect() {
    
        this.selectedObject = null;
        this.intersection = null;
    }

    /**
     * Changes objects color when mouse is hovering over it.
     * 
     * @param {THREE.Object3D} object Object under mouse pointer
     * @param {THREE.Color} hoverColor Hover color
     */
    hover( object, hoverColor ) {

        if( object === this.hoveredObject ) {
            return;
        }
    
        if( object !== null ) {
    
            // Change color for old object
            if( this.hoveredObject !== null ) {
    
                for( var i = 0; i < this.hoveredObject.children.length; i++ ) {
    
                    var child = this.hoveredObject.children[i];
                    child.material.color.setHex(this.oldColor[i]);
    
                }
            }
    
            // Change color for new object
            this.hoveredObject = object;
    
            for( var i = 0; i < this.hoveredObject.children.length; i++ ) {
    
                var child = this.hoveredObject.children[i];
                this.oldColor.push(child.material.color.getHex());
                child.material.color.setHex( hoverColor );
    
            }
    
        } else {
    
            if( this.hoveredObject === null ) {
                return;
            }
    
            for( var i = 0; i < this.hoveredObject.children.length; i++ ) {
    
                var child = this.hoveredObject.children[i];
                child.material.color.setHex(this.oldColor[i]);
    
            }
            this.hoveredObject = null;
    
        }
    }

    /**
     * Returns selected object.
     */
    getSelectedObject() {

        return this.selectedObject;
    }


    /**
     * Shots raycast ray from camera position to the mousePos.
     * 
     * @param {THREE.Camera} camera Scenes camera
     * @param {THREE.Vector2} mousePos Position where raycast ray ends
     * @param {boolean} recursive Should go through all children to find target?
     * @param {THREE.Object3D} selectables Objects that will be selected via raycast 
     * @param {float} linePrecision Percision of a raycast ray.
     */
    static raycast( camera, mousePos, recursive = true, selectables = [], linePrecision = 15 ) {

        var raycast = new THREE.Raycaster();
        raycast.setFromCamera(mousePos, camera);
        raycast.linePrecision = linePrecision;
    
        var intersects = raycast.intersectObjects(selectables, recursive);
        return intersects.length > 0 ? intersects[0] : null;
    }
}