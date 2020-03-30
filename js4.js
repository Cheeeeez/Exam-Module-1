let Circle = function (x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.render = function () {
        let ctx = document.getElementById('myCanvas').getContext('2d');
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};

let circle = new Circle(10, 10, 100, "#000000");
circle.render();