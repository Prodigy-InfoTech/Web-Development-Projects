const COLORS = {
    red: "#E34A4A",
    green: "#33AC4E",
    blue: "#3C8DED",
    black: "#000",
};

const MAX_UNDOS = 5;

const TOOLS = {
    pen: "pen",
    eraser: "eraser",
    line: "line",
    rectangle: "rectangle",
    circle: "circle",
    text: "text",
};

const toolbar = document.getElementById("toolbar");
const textToolInput = document.getElementById("text-tool-input");

function distanceFormula(x1, x2, y1, y2) {
    return Math.floor(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));
}

class Sketchpad {
    /*
        The sketchpad maintains the current state of the sketchpad such as the current
        tool being used, the color, and the size.
    */
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.bounds = this.canvas.getBoundingClientRect();
        this.color = COLORS.red;
        this.tool = TOOLS.pen;

        // tool customization
        this.pencilWidth = 10;
        this.eraserWidth = 10;
        this.shapeWidth = 10;
        this.fontSize = 16;
        this.fontFamily = "Arial";

        this.drawing = false;

        // store the mouse coordinates
        this.currentPosition = {
            x: 0,
            y: 0,
        };
        this.startPosition = {
            x: 0,
            y: 0,
        };

        this.savedCanvas;
        this.savedActions = [];

        this.draw = this.draw.bind(this);
        this.startDrawing = this.startDrawing.bind(this);
        this.stopDrawing = this.stopDrawing.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.showTextInput = this.showTextInput.bind(this);
        this.addText = this.addText.bind(this);
        this.init = this.init.bind(this);
    }

    startDrawing(event) {
        /* Save the current canvas state and initialize settings
        needed for starting a drawing */

        this.drawing = true;

        this.startPosition.x = event.pageX - this.bounds.left;
        this.startPosition.y = event.pageY - this.bounds.top;

        // save the canvas state
        this.savedCanvas = this.ctx.getImageData(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );

        if (this.savedActions.length >= MAX_UNDOS) {
            this.savedActions.shift();
        }

        this.savedActions.push(this.savedCanvas);

        // make sure that on click, the text input box doesn't show up
        if (this.tool !== TOOLS.text) {
            this.canvas.removeEventListener("click", this.showTextInput);
        }

        if (this.tool !== TOOLS.eraser) {
            this.ctx.globalCompositeOperation = "source-over";
        }

        if (this.tool === TOOLS.pen || this.tool === TOOLS.eraser) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.startPosition.x, this.startPosition.y);
            this.ctx.lineCap = "round";
            this.ctx.lineJoin = "round"; // when you join lines, create a rounded corner

            if (this.tool === TOOLS.pen) {
                this.ctx.strokeStyle = this.color;
                this.ctx.lineWidth = this.pencilWidth;
            } else {
                this.ctx.globalCompositeOperation = "destination-out";
                this.ctx.strokeStyle = "rgba(0,0,0,1)";
                this.ctx.lineWidth = this.eraserWidth;
            }

            this.ctx.lineTo(this.startPosition.x, this.startPosition.y);
            this.ctx.stroke();
        } else if (this.tool === TOOLS.text) {
            this.handleText();
        }
    }

    stopDrawing() {
        this.drawing = false;
    }

    onMouseMove(event) {
        this.currentPosition.x = event.pageX - this.bounds.left;
        this.currentPosition.y = event.pageY - this.bounds.top;

        if (!this.drawing) return;

        if (this.tool === TOOLS.pen || this.tool === TOOLS.eraser) {
            this.draw();
        } else {
            this.drawShape();
        }
    }

    showTextInput(e) {
        /* Show the text input on the canvas when the text tool is used */

        if (e.target !== textToolInput) {
            console.log("lo");

            textToolInput.style.display = "block";
            textToolInput.style.left = `${e.x}px`;
            textToolInput.style.top = `${e.y}px`;
            textToolInput.style.font = `${this.fontSize}px ${this.fontFamily}`;

            textToolInput.focus();
        }
    }

    addText(e) {
        /* Add the text to the canvas drawing on ENTER, then hide the text input tool */
        if (e.keyCode === 13) {
            let inputBounds = textToolInput.getBoundingClientRect();

            this.ctx.font = `${this.fontSize}px ${this.fontFamily}`;
            this.ctx.fillText(
                textToolInput.innerText,
                inputBounds.left - this.bounds.left,
                inputBounds.top + this.fontSize
            );
            textToolInput.style.display = "none";
        }
    }

    handleText() {
        /* Add the event listeners needed for the text tool to work and
           reset the text inside the text tool input
        */
        textToolInput.innerText = "";
        this.canvas.addEventListener("click", this.showTextInput);
        window.addEventListener("keydown", this.addText);
    }

    draw() {
        this.ctx.lineTo(this.currentPosition.x, this.currentPosition.y);
        this.ctx.stroke();
    }

    drawShape() {
        /* Draw the chosen shape with its specific properties set */

        // restore the canvas image that we saved when we first started the shape
        this.ctx.putImageData(this.savedCanvas, 0, 0);
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = this.shapeWidth;

        // Remember to always use break; after your case blocks
        switch (this.tool) {
            case TOOLS.line:
                this.ctx.beginPath();
                this.ctx.lineCap = "round";
                this.ctx.moveTo(this.startPosition.x, this.startPosition.y);
                this.ctx.lineTo(this.currentPosition.x, this.currentPosition.y);
                this.ctx.stroke();
                break;

            case TOOLS.rectangle:
                this.ctx.beginPath();
                this.ctx.lineJoin = "miter";
                this.ctx.moveTo(this.startPosition.x, this.startPosition.y);
                this.ctx.rect(
                    this.startPosition.x,
                    this.startPosition.y,
                    this.currentPosition.x - this.startPosition.x,
                    this.currentPosition.y - this.startPosition.y
                );
                this.ctx.stroke();
                break;

            case TOOLS.circle:
                this.ctx.beginPath();
                let radius = distanceFormula(
                    this.startPosition.x,
                    this.currentPosition.x,
                    this.startPosition.y,
                    this.currentPosition.y
                );

                this.ctx.arc(
                    this.startPosition.x,
                    this.startPosition.y,
                    radius,
                    0,
                    Math.PI * 2
                );
                this.ctx.stroke();
        }
    }

    setColor(color) {
        this.color = color;
    }

    setTool(tool) {
        this.tool = tool;
    }

    setPenSize(size) {
        this.pencilWidth = size;
    }

    setEraserSize(size) {
        this.eraserWidth = size;
    }

    setShapeSize(size) {
        this.shapeWidth = size;
    }

    setFontSize(size) {
        this.fontSize = parseInt(size);
        textToolInput.style.fontSize = `${size}px`;
    }

    setFontFamily(family) {
        this.fontFamily = family;
    }

    clearCanvas() {
        if (this.savedActions.length >= MAX_UNDOS) {
            this.savedActions.shift();
        }
        this.savedActions.push(
            this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height)
        );
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    undo() {
        if (this.savedActions.length > 0) {
            this.ctx.putImageData(
                this.savedActions[this.savedActions.length - 1],
                0,
                0
            );
            this.savedActions.pop();
        }
    }

    init() {
        /* Initialize the canvas event listeners that allows for drawing
           to take place as well as set the canvas height and width
        */
        this.canvas.width = window.innerWidth - toolbar.offsetWidth;
        this.canvas.height = window.innerHeight;

        this.canvas.addEventListener("mousedown", this.startDrawing);
        this.canvas.addEventListener("mouseup", this.stopDrawing);
        this.canvas.addEventListener("mousemove", this.onMouseMove);

        window.addEventListener("click", function (e) {
            if (e.target !== this.canvas) {
                textToolInput.style.display = "none";
            }
        });

        window.addEventListener("resize", function () {
            this.canvas.width = window.innerWidth - toolbar.offsetWidth;
            this.canvas.height = window.innerHeight;
        });
    }
}

window.addEventListener("load", function () {
    const sketchpad = new Sketchpad();
    const colorsBtns = document.querySelectorAll(".color");
    const toolsBtns = document.querySelectorAll(".tool");

    // individual tools
    const penSlider = document.getElementById("pen-slider");
    const eraserSlider = document.getElementById("eraser-slider");
    const shapesSlider = document.getElementById("shapes-slider");
    const fontSize = document.getElementById("font-size");
    const fontFamily = document.getElementById("font-family");

    // actions
    const trash = document.getElementById("trash");
    const undoBtn = document.getElementById("undo");
    const gridCheck = document.getElementById("grid-toggle");

    const grid = document.getElementById("grid");

    // set up event listeners for the color buttons
    for (let i = 0; i < colorsBtns.length; i++) {
        colorsBtns[i].addEventListener("click", function (e) {
            let color = colorsBtns[i].getAttribute("data-color");
            sketchpad.setColor(COLORS[color]);

            // remove all selected-color classes
            for (let j = 0; j < colorsBtns.length; j++) {
                colorsBtns[j].classList.remove("selected-color");
            }

            colorsBtns[i].classList.add("selected-color");
        });
    }

    // set up event listeners for tools
    for (let i = 0; i < toolsBtns.length; i++) {
        toolsBtns[i].addEventListener("click", function (e) {
            let tool = toolsBtns[i].getAttribute("data-tool");
            sketchpad.setTool(tool);

            // remove all selected-color classes
            for (let j = 0; j < toolsBtns.length; j++) {
                toolsBtns[j].classList.remove("selected-tool");
            }

            toolsBtns[i].classList.add("selected-tool");
        });
    }

    // Event listeners for tool customization and misc actions
    trash.addEventListener("click", function () {
        sketchpad.clearCanvas();
    });

    penSlider.addEventListener("change", function () {
        sketchpad.setPenSize(penSlider.value);
    });

    eraserSlider.addEventListener("change", function () {
        sketchpad.setEraserSize(eraserSlider.value);
    });

    shapesSlider.addEventListener("change", function () {
        sketchpad.setShapeSize(shapesSlider.value);
    });

    fontSize.addEventListener("change", function () {
        sketchpad.setFontSize(fontSize.value);
    });

    fontFamily.addEventListener("change", function () {
        sketchpad.setFontFamily(fontFamily.value);
    });

    undoBtn.addEventListener("click", function () {
        sketchpad.undo();
    });

    gridCheck.addEventListener("change", function (e) {
        if (e.target.checked) {
            grid.style.display = "block";
        } else {
            grid.style.display = "none";
        }
    });

    sketchpad.init();
});
const downloadBtn = document.createElement("button");
downloadBtn.id = "downloadBtn";
downloadBtn.textContent = "Download";
toolbar.appendChild(downloadBtn);

// Event listener for downloading the canvas with the background color
downloadBtn.addEventListener("click", () => {
    const mergedCanvas = document.createElement("canvas");
    mergedCanvas.width = canvas.width;
    mergedCanvas.height = canvas.height;
    const mergedCtx = mergedCanvas.getContext("2d");

    // Set the background color
    mergedCtx.fillStyle = document.body.style.backgroundColor;
    mergedCtx.fillRect(0, 0, mergedCanvas.width, mergedCanvas.height);

    // Draw the canvas content on top of the background
    mergedCtx.drawImage(canvas, 0, 0);

    // Create a download link for the merged canvas
    const link = document.createElement("a");
    link.setAttribute("download", "sketch.png");
    link.href = mergedCanvas.toDataURL("image/png");

    // Simulate a click to trigger the download
    link.click();
});

// Style the download button to match your UI
downloadBtn.style.padding = "5px 10px";
downloadBtn.style.backgroundColor = "#a6c6ece3"; // Match with the blue color in the HTML
downloadBtn.style.color = "white";
downloadBtn.style.border = "none";
downloadBtn.style.margin = "5px";
downloadBtn.style.cursor = "pointer";
downloadBtn.style.borderRadius = "5px";

const changeBgColorBtn = document.getElementById("changeBgColorBtn");

changeBgColorBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the link from navigating

    const bgColorPicker = document.createElement("input");
    bgColorPicker.type = "color";
    bgColorPicker.value = document.body.style.backgroundColor;

    bgColorPicker.addEventListener("input", (event) => {
        const bgColor = event.target.value;
        document.body.style.backgroundColor = bgColor;
        bgColorPicker.remove(); // Remove the color picker after selecting a color
    });

    bgColorPicker.click(); // Open the color picker
});

const clearCanvasBtn = document.createElement("button");
clearCanvasBtn.id = "clearCanvasBtn";
clearCanvasBtn.textContent = "Clear Canvas";
toolbar.appendChild(clearCanvasBtn);

clearCanvasBtn.addEventListener("click", () => {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Style the clear canvas button to match your UI
clearCanvasBtn.style.padding = "5px 10px";
clearCanvasBtn.style.backgroundColor = "#a6c6ece3"; // Match with the blue color in the HTML
clearCanvasBtn.style.color = "white";
clearCanvasBtn.style.border = "none";
clearCanvasBtn.style.margin = "5px";
clearCanvasBtn.style.cursor = "pointer";
clearCanvasBtn.style.borderRadius = "5px";
