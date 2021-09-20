import { CategorieCours } from "./catgorie";
import { Enseignant } from "./enseignant";

export class Cours{
    id!:number;
    name!:string;
    file!:string;
    enseignant!:Enseignant;
    categoriecours!:CategorieCours;
    constructor(id:number,name:string,file:string){
        this.id=id;
        this.name=name;
        this.file=file;
    }
}