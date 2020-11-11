import { Groupe } from './Groupe';

export class Eleve{
    id:number;
    nom:string;
    prenom:string;
    adresse:string;
    sexe:string;
    tel:string;
    email:string;
    dateNaissance:Date;
    dateAffiliation:Date;
    lieuNaissance:string;
    nomResp:string;
    prenomResp:string;
    telResp:string;
    isTransp:Boolean;
    groupe:Groupe;
    _links:{
        self:{
            href:string;
        },
        eleve:{
            href:string;
        },
        groupe:{
            href:string;
        }
    }
}

