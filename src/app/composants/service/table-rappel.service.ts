import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CasierTablePojo } from '../../models/casier-table-pojo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
  export class TableRappelService {

    constructor(private http: HttpClient) {}

    
    public getTableRappelMock(): Observable<CasierTablePojo[]> {
      return of([
        {numeroCasier: 0, contenuCasier: "Toto"},
        {numeroCasier: 1, contenuCasier: "Flèche"},
        {numeroCasier: 2, contenuCasier: "Nez"},
        {numeroCasier: 3, contenuCasier: "Handspinner"},
        {numeroCasier: 4, contenuCasier: "Rubixcube"},
        {numeroCasier: 5, contenuCasier: "Cheveux banane"},
        {numeroCasier: 6, contenuCasier: "Scie"},
        {numeroCasier: 7, contenuCasier: "Maman"},
        {numeroCasier: 8, contenuCasier: "Bonbon"},
        {numeroCasier: 9, contenuCasier: "Papa"},
        {numeroCasier: 10, contenuCasier: "De"},
        {numeroCasier: 11, contenuCasier: "Millie Bobbie Brown"},
        {numeroCasier: 12, contenuCasier: "Louane"},
        {numeroCasier: 13, contenuCasier: "Mercredi Addams"},
        {numeroCasier: 14, contenuCasier: "Mme Quinconces"},
        {numeroCasier: 15, contenuCasier: "Cake"},
        {numeroCasier: 16, contenuCasier: "Saez"},
        {numeroCasier: 17, contenuCasier: "Stephanie"},
        {numeroCasier: 18, contenuCasier: "Napperon"},
        {numeroCasier: 19, contenuCasier: "Boîte oeufs"},
        {numeroCasier: 20, contenuCasier: "vin"},
        {numeroCasier: 21, contenuCasier: "solstice"},
        {numeroCasier: 22, contenuCasier: "bisou"},
        {numeroCasier: 23, contenuCasier: "boomrang"},
        {numeroCasier: 24, contenuCasier: "dordogne"},
        {numeroCasier: 25, contenuCasier: "noel"},
        {numeroCasier: 26, contenuCasier: "gaelle"},
        {numeroCasier: 27, contenuCasier: "tire bouchon"},
        {numeroCasier: 28, contenuCasier: "huitre"},
        {numeroCasier: 29, contenuCasier: "Poule"},
        {numeroCasier: 30, contenuCasier: "gateau d'anniversaire"},
        {numeroCasier: 31, contenuCasier: "costume"},
        {numeroCasier: 32, contenuCasier: "galette bretonne"},
        {numeroCasier: 33, contenuCasier: "bordeaux"},
        {numeroCasier: 34, contenuCasier: "jesus"},
        {numeroCasier: 35, contenuCasier: "plateau"},
        {numeroCasier: 36, contenuCasier: "chandelle"},
        {numeroCasier: 37, contenuCasier: "rateau tv"},
        {numeroCasier: 38, contenuCasier: "cornet de glace"},
        {numeroCasier: 39, contenuCasier: "poulailer"},
        {numeroCasier: 40, contenuCasier: "voiture"},
        {numeroCasier: 41, contenuCasier: "bus fantome"},
        {numeroCasier: 42, contenuCasier: "M patate"},
        {numeroCasier: 43, contenuCasier: "smart"},
        {numeroCasier: 44, contenuCasier: "puissance 4"},
        {numeroCasier: 45, contenuCasier: "clio"},
        {numeroCasier: 46, contenuCasier: "break"},
        {numeroCasier: 47, contenuCasier: "sel"},
        {numeroCasier: 48, contenuCasier: "perle"},
        {numeroCasier: 49, contenuCasier: "minibus"},
        {numeroCasier: 50, contenuCasier: "billet"},
        {numeroCasier: 51, contenuCasier: "jeux de cartes"},
        {numeroCasier: 52, contenuCasier: "elvis"},
        {numeroCasier: 53, contenuCasier: "bigoudenne"},
        {numeroCasier: 54, contenuCasier: "de funes"},
        {numeroCasier: 55, contenuCasier: "banana split"},
        {numeroCasier: 56, contenuCasier: "punck"},
        {numeroCasier: 57, contenuCasier: "coupe afro"},
        {numeroCasier: 58, contenuCasier: "pimousse"},
        {numeroCasier: 59, contenuCasier: "coq"},
        {numeroCasier: 60, contenuCasier: "monocle"},
        {numeroCasier: 61, contenuCasier: "as"},
        {numeroCasier: 62, contenuCasier: "jumeaux"},
        {numeroCasier: 63, contenuCasier: "coloc"},
        {numeroCasier: 64, contenuCasier: "famille"},
        {numeroCasier: 65, contenuCasier: "enceinte"},
        {numeroCasier: 66, contenuCasier: "lucifer"},
        {numeroCasier: 67, contenuCasier: "chaussette"},
        {numeroCasier: 68, contenuCasier: "mai"},
        {numeroCasier: 69, contenuCasier: "kamasutra"},
        {numeroCasier: 70, contenuCasier: "hippie"},
        {numeroCasier: 71, contenuCasier: "ferrari"},
        {numeroCasier: 72, contenuCasier: "gran turismo"},
        {numeroCasier: 73, contenuCasier: "ordinateur"},
        {numeroCasier: 74, contenuCasier: "chaise"},
        {numeroCasier: 75, contenuCasier: "mannequin"},
        {numeroCasier: 76, contenuCasier: "cidre basque"},
        {numeroCasier: 77, contenuCasier: "james bond"},
        {numeroCasier: 78, contenuCasier: "ouioui"},
        {numeroCasier: 79, contenuCasier: "naissance"},
        {numeroCasier: 80, contenuCasier: "rosace"},
    
      ]);
    } 
  
    public getTableRappelServeur() {
      return this.http.get<CasierTablePojo[]>('http://localhost:8080/api/getList');
    }
  }