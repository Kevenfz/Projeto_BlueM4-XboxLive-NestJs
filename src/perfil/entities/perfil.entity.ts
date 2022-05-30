import { Game } from "src/game/entities/games.entities";
import { User } from "src/users/entities/user.entity";

export class Perfil {
  id?: string;
  title: string;
  imgUrl: string;
  user: User;
  games?: Game[];
  createdAt?: Date;
  updatedAt?: Date;
}
