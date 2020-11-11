import { Filiere } from './Filiere';
import { Niveau } from './Niveau';
import { DataService } from '../services/data.service';

export class Groupe{
    id:number;
    nomG:string;
    filiere:Filiere;
    niveau:Niveau;
    _links:{
        self:{
            href:string
        },
        groupe:{
            href:string
        },
        niveau:{
            href:string
        },
        filiere:{
            href:string
        },
        eleves:{
            href:string
        },
        profs:{
            href:string
        },
    }
    constructor(){}


}

