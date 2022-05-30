import { Perfil } from "src/perfil/entities/perfil.entity";

export class User {
  id?: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  isAdmin: string;
  perfil?: Perfil[];
  createdAt?: Date;
  updatedAt?: Date;
}
