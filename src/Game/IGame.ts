import { GameState } from "./GameState";
import GameTime from "./GameTime";

/**
 * The implementation details of a game.
 * These interface is used by the GameLoop and is required to correctly execute the game.
 */
export default interface IGame {
    processInput(): void;
    update(gameTime: GameTime): GameState;
    render(): void;
}