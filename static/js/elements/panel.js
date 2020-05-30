/**
 * Dimensions are in centimeters (1cm = 0.39inch = 0.1m)
 */
var PanelType = {
    Left: "left",
    Top: "top",
    Right: "right",
    Bottom: "bottom",
    Back: "back",
    Door: "door",
    Drawer: "drawer",
    Divider: "divider"
};

/**
 * Creates panel for the base element.
 * 
 * @param scene - Three.js scene
 * @param type - Panel type
 * @param size - Panel size in cm
 */
class Panel extends THREE.Mesh {
    constructor( scene, type, size ) {

        super();
        this.scene = scene;
        this.type = type;
        this.name = type + "Panel";
        this.size = size;
    }
    /**
     * Creates instances of BoxBufferGeometry and Standard Material that are assigned to variables.
     */
    generateMesh() {
        
        this.geometry = new THREE.BoxBufferGeometry( this.size.x, this.size.y, this.size.z );
        this.material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    }

    /**
     * Disposes geometry and material of a mesh.
     */
    dispose() {
        this.geometry.dispose();
        this.material.dispose();
    }
}