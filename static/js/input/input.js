class Input {

    constructor(dom) {

        this.domElement = dom;

        // Values at update() class
        this.mousePosition = new THREE.Vector2();
        this.pointerMove = null;
        this.pointerOut = null;
        this.pointerHover = null;
        this.pointerDown = null;
        this.pointerUp = null;
        this.pointerClick = null;
        this.latestEvent = new Event('');
        this.latestButtons = 0;

        ///
        this.attachListeners();
    }

    attachListeners() {

        const scope = this;

        function onPointerDown(event) {

            scope.latestButtons = event.buttons;
            scope.latestEvent = scope.pointerDown = event;
        }

        function onPointerUp(event) {

            scope.latestButtons = 0;
            scope.latestEvent = scope.pointerUp = scope.pointerMove = event;
        }

        function onPointerHover(event) {

            scope.latestEvent = scope.pointerHover = event;
        }

        function onPointerMove(event) {

            scope.latestEvent = scope.pointerMove = event;
        }

        if ("onpointerdown" in window) {

            this.domElement.addEventListener("pointerdown", onPointerDown, false);
            this.domElement.addEventListener("pointerover", onPointerHover, false);
            this.domElement.addEventListener("pointermove", onPointerMove, false);
            this.domElement.addEventListener("pointerup", onPointerUp, false);

        } else if ("ontouchstart" in window) {

            this.domElement.addEventListener("touchstart", onPointerDown, false);
            this.domElement.addEventListener("touchover", onPointerHover, false);
            this.domElement.addEventListener("touchmove", onPointerMove, false);
            this.domElement.addEventListener("touchend", onPointerUp, false);

        } else if ("onmousedown" in window) {

            this.domElement.addEventListener("mousedown", onPointerDown, false);
            this.domElement.addEventListener("mousover", onPointerHover, false);
            this.domElement.addEventListener("mousemove", onPointerMove, false);
            this.domElement.addEventListener("mouseup", onPointerUp, false);
        }
    }

    dispose() {

        const scope = this;

        function onPointerDown(event) {
            scope.latestEvent = scope.pointerDown = event;
        }

        function onPointerUp(event) {
            scope.latestEvent = scope.pointerUp = event;
        }

        function onPointerHover(event) {
            scope.latestEvent = scope.pointerHover = event;
        }

        function onPointerMove(event) {
            scope.latestEvent = scope.pointerMove = event;
        }

        if ("onpointerdown" in window) {

            if (x.removeEventListener) {
                x.removeEventListener("pointerdown", onPointerDown);
            } else if (x.detachEvent) {
                x.detachEvent("pointerdown", onPointerDown);
            }
            if (x.removeEventListener) {
                x.removeEventListener("pointerover", onPointerHover);
            } else if (x.detachEvent) {
                x.detachEvent("pointerover", onPointerHover);
            }
            if (x.removeEventListener) {
                x.removeEventListener("pointermove", onPointerMove);
            } else if (x.detachEvent) {
                x.detachEvent("pointermove", onPointerMove);
            }
            if (x.removeEventListener) {
                x.removeEventListener("pointerup", onPointerUp);
            } else if (x.detachEvent) {
                x.detachEvent("pointerup", onPointerUp);
            }

        } else if ("ontouchstart" in window) {

            if (x.removeEventListener) {
                x.removeEventListener("touchstart", onPointerDown);
            } else if (x.detachEvent) {
                x.detachEvent("touchstart", onPointerDown);
            }
            if (x.removeEventListener) {
                x.removeEventListener("touchover", onPointerHover);
            } else if (x.detachEvent) {
                x.detachEvent("touchover", onPointerHover);
            }
            if (x.removeEventListener) {
                x.removeEventListener("touchmove", onPointerMove);
            } else if (x.detachEvent) {
                x.detachEvent("touchmove", onPointerMove);
            }
            if (x.removeEventListener) {
                x.removeEventListener("touchend", onPointerUp);
            } else if (x.detachEvent) {
                x.detachEvent("touchend", onPointerUp);
            }

        } else if ("onmousedown" in window) {

            if (x.removeEventListener) {
                x.removeEventListener("mousedown", onPointerDown);
            } else if (x.detachEvent) {
                x.detachEvent("mousedown", onPointerDown);
            }
            if (x.removeEventListener) {
                x.removeEventListener("mousover", onPointerHover);
            } else if (x.detachEvent) {
                x.detachEvent("mousover", onPointerHover);
            }
            if (x.removeEventListener) {
                x.removeEventListener("mousemove", onPointerMove);
            } else if (x.detachEvent) {
                x.detachEvent("mousemove", onPointerMove);
            }
            if (x.removeEventListener) {
                x.removeEventListener("mouseup", onPointerUp);
            } else if (x.detachEvent) {
                x.detachEvent("mouseup", onPointerUp);
            }
        }
    }

    update() {

        // Gets Current Mouse Position
        if (this.pointerMove !== null) {

            this.mousePosition = this.getMouseCoords();
        }

        // Fires Events
        if (this.pointerMove !== null) this.domElement.dispatchEvent(new CustomEvent('pointerMove', {
            'detail': {
                input: this.pointerMove
            }
        }));
        if (this.pointerOut !== null) this.domElement.dispatchEvent(new CustomEvent('pointerOut', {
            'detail': {
                input: this.pointerOut
            }
        }));
        if (this.pointerHover !== null) this.domElement.dispatchEvent(new CustomEvent('pointerHover', {
            'detail': {
                input: this.pointerHover
            }
        }));
        if (this.pointerDown !== null) this.domElement.dispatchEvent(new CustomEvent('pointerDown', {
            'detail': {
                input: this.pointerDown
            }
        }));
        if (this.pointerUp !== null) this.domElement.dispatchEvent(new CustomEvent('pointerUp', {
            'detail': {
                input: this.pointerUp
            }
        }));
        if (this.pointerClick !== null) this.domElement.dispatchEvent(new CustomEvent('pointerClick', {
            'detail': {
                input: this.pointerClick
            }
        }));

        // Dispose old values
        this.pointerMove = null;
        this.pointerOut = null;
        this.pointerHover = null;
        this.pointerDown = null;
        this.pointerUp = null;
        this.pointerClick = null;
    }

    getMouseCoords() {

        const offset = this._calcOffset();
        let mouse = new THREE.Vector2();

        mouse.x = ((this.pointerMove.clientX - offset.left) / this.domElement.clientWidth) * 2 - 1;
        mouse.y = -((this.pointerMove.clientY - offset.top) / this.domElement.clientHeight) * 2 + 1;
        return mouse;
    }

    _calcOffset() {
        
        return {
            left: this.domElement.getBoundingClientRect().left,
            top: this.domElement.getBoundingClientRect().top
        };
    }
}