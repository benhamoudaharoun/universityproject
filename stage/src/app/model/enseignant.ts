import { Cours } from "./cours";

export class Enseignant{
id!: number; 
name!: string;
 
  
 
  phone!: string;
  matiere!:string;
  address!: string;
  constructor(id: number, name: string, phone: string, matiere:string, address: string) {
    this.id = id;
    this.name = name;
    
   
    this.phone = phone;
    this.matiere=matiere;
    this.address = address;
}}