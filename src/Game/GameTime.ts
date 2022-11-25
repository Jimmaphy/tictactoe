export default class GameTime {
    private gameStart: number;
    private frameEnd: number;
    private previousElapsed: number;
    private gameTime: number;
    private frameCount: number;
    private fps: number;

    constructor() {
        this.gameStart = performance.now();
        this.frameEnd = this.gameStart;
        this.previousElapsed = this.gameStart;
        this.gameTime = 0;
        this.frameCount = 0;
        this.fps = 0;
    }

    public tick(timestamp: number) {
        const now = performance.now();
        const stepTime = timestamp - now;
        const frameTime = now - this.frameEnd;

        this.fps = Math.round(1000 / frameTime);
        this.frameEnd = now;
        this.gameTime = now - this.gameStart;
        this.frameCount += 1;
    }
}