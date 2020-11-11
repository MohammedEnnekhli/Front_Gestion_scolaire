export class Prof{

    id:number;
    nom:string;
    prenom:string;
    adresse:string;
    sexe:string;
    tel:string;
    email:string;
    dateNaissance:Date;
    dateAffiliation:Date;
    _links:{
        self:{
            href:string;
        },
        prof:{
            href:string;
        },
        groupe:{
            href:string;
        },
        matiere:{
            href:string;
        }
    }
}

