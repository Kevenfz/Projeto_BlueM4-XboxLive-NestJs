import { Genero } from "src/genero/entities/genero.entities";
import { Perfil } from "src/perfil/entities/perfil.entity";

export class Game {
  id?: string;
  title: string;
  imgUrl: string;
  description: string;
  year: string;
  score: number;
  traillerYtUrl: string;
  GplayYtUrl: string;
  perfil?: Perfil[];
  genero?: Genero[];
  createdAt?: Date;
  updatedAt?: Date;
}
