import { Genero } from "src/genero/entities/genero.entities";

export class Game {
  id?: string;
  title: string;
  imgUrl: string;
  description: string;
  year: string;
  score: number;
  traillerYtUrl: string;
  GplayYtUrl: string;
  genero: Genero[];
  createdAt?: Date;
  updatedAt?: Date;
}
