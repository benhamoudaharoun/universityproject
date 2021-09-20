export class Etudiant {
    id!: number; 
  name!: string;
   
    age!: string;
    phone!: string;
    address!: string;
    dateCreated!: Date;
    dateUpdated!: Date;
    constructor(id: number, name: string, age: string, phone: string, address: string) {
      this.id = id;
      this.name = name;
     
      this.age = age;
      this.phone = phone;
      this.address = address;
  }
  
  
  }