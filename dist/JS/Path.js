"use strict";
class Path {
    constructor(spacingX, spacingY, points) {
        this.points = points;
        Path.cells = new Array(columns)
            .fill(null)
            .map(() => new Array(rows).fill(false));
        this.addMove(Math.floor(Math.random() * columns), Math.floor(Math.random() * rows), spacingX, spacingY);
    }
    addMove(x, y, spacingX, spacingY) {
        this.points.push(new Point(x, y, Math.min(spacingX / 4, spacingY / 4), spacingX, spacingY, Path.cells));
        Path.cells[x][y] = true;
    }
    removeMove() {
        const { x, y } = this.points[this.points.length - 1];
        this.points.pop();
        Path.cells[x][y] = false;
    }
}
