class Robot {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        
        this.x = 0;
        this.y = 0;
        this.dir = 0; // 0:East, 1:North, 2:West, 3:South
        
        this.perimeter = 2 * (width + height) - 4;
    }

    step(num) {
        num = num % this.perimeter;

        while (num > 0) {
            if (this.dir === 0) { // East
                let move = Math.min(num, this.width - 1 - this.x);
                this.x += move;
                num -= move;
                if (move === 0) this.dir = 1;
            }
            else if (this.dir === 1) { // North
                let move = Math.min(num, this.height - 1 - this.y);
                this.y += move;
                num -= move;
                if (move === 0) this.dir = 2;
            }
            else if (this.dir === 2) { // West
                let move = Math.min(num, this.x);
                this.x -= move;
                num -= move;
                if (move === 0) this.dir = 3;
            }
            else { // South
                let move = Math.min(num, this.y);
                this.y -= move;
                num -= move;
                if (move === 0) this.dir = 0;
            }
        }

        // Special case: if we end at (0,0) after full loop
        if (this.x === 0 && this.y === 0 && num === 0) {
            this.dir = 3; // South
        }
    }

    getPos() {
        return [this.x, this.y];
    }

    getDir() {
        return ["East", "North", "West", "South"][this.dir];
    }
}