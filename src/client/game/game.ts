import { Ball, now } from "@game";

export class Game {
	ball: Ball;
	width: number;
	height: number;

	constructor() {
		this.ball = new Ball({ x: 1, y: 1, xv: 150, yv: 150, radius: 50 });
		[this.width, this.height] = this.getScreenDimensions();
		window.addEventListener("resize", () => {
			[this.width, this.height] = this.getScreenDimensions();
		});
		this.start();
	}

	start() {
		let current: number, last: number, delta: number;
		const frame = () => {
			current = now();
			delta = (current - last ?? now()) / 1000 || 0;
			requestAnimationFrame(frame);
			this.update(delta);
			last = current;
		};
		requestAnimationFrame(frame);
	}

	getScreenDimensions() {
		return [window.innerWidth, window.innerHeight];
	}

	handleCollisions() {
		if (this.ball.x <= 0) {
			this.ball.x = 0;
			this.ball.xv *= -1;
			this.ball.changeColor();
		} else if (this.ball.x + this.ball.radius * 2 >= this.width) {
			this.ball.x = this.width - this.ball.radius * 2;
			this.ball.xv *= -1;
			this.ball.changeColor();
		}
		if (this.ball.y < 0) {
			this.ball.y = 0;
			this.ball.yv *= -1;
			this.ball.changeColor();
		} else if (this.ball.y + this.ball.radius * 2 > this.height) {
			this.ball.y = this.height - this.ball.radius * 2;
			this.ball.yv *= -1;
			this.ball.changeColor();
		}
	}

	update(delta: number) {
		this.ball.update(delta);
		this.handleCollisions();
	}
}
