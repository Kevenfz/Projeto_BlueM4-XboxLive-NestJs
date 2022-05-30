import { Game } from "src/game/entities/games.entities";

export class Genero {
  id?: string;
  genero: string;
  games?: Game[];
  createdAt?: Date;
  updatedAt?: Date;
}
