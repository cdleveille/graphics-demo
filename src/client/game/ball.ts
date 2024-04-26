const COLORS = ["red", "orange", "yellow", "green", "blue", "purple"];

export class Ball {
	ele: HTMLDivElement;
	x: number;
	y: number;
	xv: number;
	yv: number;
	radius: number;
	color: string;

	constructor(init: { x: number; y: number; xv: number; yv: number; radius: number }) {
		const { x, y, xv, yv, radius } = init;
		this.ele = document.getElementById("ball") as HTMLDivElement;
		this.ele.style.width = `${radius * 2}px`;
		this.ele.style.height = `${radius * 2}px`;
		this.x = x;
		this.y = y;
		this.xv = xv;
		this.yv = yv;
		this.radius = radius;
		this.color = "red";
		this.ele.style.backgroundColor = this.color;
		this.ele.onclick = () => this.changeColor();
	}

	changeColor() {
		const currentColorIndex = COLORS.indexOf(this.color);
		this.color = COLORS[currentColorIndex + 1 < COLORS.length ? currentColorIndex + 1 : 0];
		this.ele.style.backgroundColor = this.color;
	}

	update(delta: number) {
		this.x += this.xv * delta;
		this.y += this.yv * delta;
		this.ele.style.left = `${this.x}px`;
		this.ele.style.top = `${this.y}px`;
	}
}
