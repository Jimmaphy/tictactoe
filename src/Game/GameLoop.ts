import { GameState } from "./GameState";
import GameTime from "./GameTime";
import IGame from "./IGame";

/**
 * The GameLoop class is used to create a loop around an IGame.
 */
export default class GameLoop {
    private game: IGame;
    private state: GameState;
    private time: GameTime;

    /**
     * Create an instance of the GameLoop
     *
     * @param game The game you wanna loop.
     */
    public constructor(game: IGame) {
        this.game = game;
        this.time = new GameTime();
        this.state = GameState.Idle;
    }

    /**
     * Start the game.
     */
    public start(): void {
        if (this.isInState(GameState.Idle)) {
            this.state = GameState.Running;
            requestAnimationFrame(this.step);
        }
    }

    /**
     * Process the next frame of the game.
     * 
     * @param timestep the point in time the function was called.
     */
    private step(timestep: number): void {
        let nextGameState = this.state;

        this.game.processInput();
        nextGameState = this.game.update(this.time);

        switch(nextGameState) {
            case GameState.Stopped: this.state = GameState.Idle; break;
            default: requestAnimationFrame(this.step);
        }

        this.time.tick(timestep);
    }

    /**
     * Check whether the current state of the game matches a given one.
     * 
     * @param state The state to check.
     * @returns Whether the current state matches the one provided.
     */
    public isInState(state: GameState): boolean {
        return this.state === state;
    }
}