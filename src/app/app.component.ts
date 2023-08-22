import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'animate.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'table-de-rappel';

  public static TABLE_DE_RAPPEL: {nombre: number, valeur: string}[] = [
    {nombre: 0, valeur: "Toto"},
    {nombre: 1, valeur: "Flèche"},
    {nombre: 2, valeur: "Nez"},
    {nombre: 3, valeur: "Handspinner"},
    {nombre: 4, valeur: "Rubixcube"},
    {nombre: 5, valeur: "Cheveux banane"},
    {nombre: 6, valeur: "Scie"},
    {nombre: 7, valeur: "Maman"},
    {nombre: 8, valeur: "Bonbon"},
    {nombre: 9, valeur: "Papa"},
    {nombre: 10, valeur: "De"},
    {nombre: 11, valeur: "Millie Bobbie Brown"},
    {nombre: 12, valeur: "Louane"},
    {nombre: 13, valeur: "Mercredi Addams"},
    {nombre: 14, valeur: "Mme Quinconces"},
    {nombre: 15, valeur: "Cake"},
    {nombre: 16, valeur: "Saez"},
    {nombre: 17, valeur: "Stephanie"},
    {nombre: 18, valeur: "Napperon"},
    {nombre: 19, valeur: "Boîte oeufs"},
    {nombre: 20, valeur: "vin"},
    {nombre: 21, valeur: "solstice"},
    {nombre: 22, valeur: "bisou"},
    {nombre: 23, valeur: "boomrang"},
    {nombre: 24, valeur: "dordogne"},
    {nombre: 25, valeur: "noel"},
    {nombre: 26, valeur: "gaelle"},
    {nombre: 27, valeur: "tire bouchon"},
    {nombre: 28, valeur: "huitre"},
    {nombre: 29, valeur: "Poule"},
    {nombre: 30, valeur: "gateau d'anniversaire"},
    {nombre: 31, valeur: "costume"},
    {nombre: 32, valeur: "galette bretonne"},
    {nombre: 33, valeur: "bordeaux"},
    {nombre: 34, valeur: "jesus"},
    {nombre: 35, valeur: "plateau"},
    {nombre: 36, valeur: "chandelle"},
    {nombre: 37, valeur: "rateau tv"},
    {nombre: 38, valeur: "cornet de glace"},
    {nombre: 39, valeur: "poulailer"},
    {nombre: 40, valeur: "voiture"},
    {nombre: 41, valeur: "bus fantome"},
    {nombre: 42, valeur: "M patate"},
    {nombre: 43, valeur: "smart"},
    {nombre: 44, valeur: "puissance 4"},
    {nombre: 45, valeur: "clio"},
    {nombre: 46, valeur: "break"},
    {nombre: 47, valeur: "sel"},
    {nombre: 48, valeur: "perle"},
    {nombre: 49, valeur: "minibus"},
    {nombre: 50, valeur: "billet"},
    {nombre: 51, valeur: "jeux de cartes"},
    {nombre: 52, valeur: "elvis"},
    {nombre: 53, valeur: "bigoudenne"},
    {nombre: 54, valeur: "de funes"},
    {nombre: 55, valeur: "banana split"},
    {nombre: 56, valeur: "punck"},
    {nombre: 57, valeur: "coupe afro"},
    {nombre: 58, valeur: "pimousse"},
    {nombre: 59, valeur: "coq"},
    {nombre: 60, valeur: "monocle"},
    {nombre: 61, valeur: "as"},
    {nombre: 62, valeur: "jumeaux"},
    {nombre: 63, valeur: "coloc"},
    {nombre: 64, valeur: "famille"},
    {nombre: 65, valeur: "enceinte"},
    {nombre: 66, valeur: "lucifer"},
    {nombre: 67, valeur: "chaussette"},
    {nombre: 68, valeur: "mai"},
    {nombre: 69, valeur: "kamasutra"},
    {nombre: 70, valeur: "hippie"},
    {nombre: 71, valeur: "ferrari"},
    {nombre: 72, valeur: "gran turismo"},
    {nombre: 73, valeur: "ordinateur"},
    {nombre: 74, valeur: "chaise"},
    {nombre: 75, valeur: "mannequin"},
    {nombre: 76, valeur: "cidre basque"},
    {nombre: 77, valeur: "james bond"},
    {nombre: 78, valeur: "ouioui"},
    {nombre: 79, valeur: "naissance"},
    {nombre: 80, valeur: "rosace"},
   
  ];

  public static NOMBRE_MAX: number = 80;

  public reponse:string = '';
  public question:number = Math.floor(Math.random() * AppComponent.NOMBRE_MAX);
  public oldQuestion:number = -1;
  public commentaire: string = 'A toi de jouer !';
  public reussites: number = 0;
  public total: number = 0;
  public test: any = '';

  constructor(private http: HttpClient) {}

  public ngOnInit(): void {
    this.fetchData();
    this.oldQuestion = this.question;
  }

  fetchData() {
    this.http.get('http://localhost:8080/api/hello').subscribe(
      (data) => {
        this.test = data;
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  }

  public onValider(): void {
    this.total++;
    if(this.estLaBonneReponse()) {
      this.commentaire = 'Bravo ! Encore !';
      this.reussites++;
      this.genererNouvelleQuestion();
      this.reponse ='';
    } else {
      this.commentaire = `Raté ! Tu as dit ${this.reponse} alors que la bonne réponse était ${this.trouverReponse(this.question)}... Un autre.`;
      this.genererNouvelleQuestion();
      this.reponse ='';
    }
  }

  public estLaBonneReponse(): boolean {
    return AppComponent.TABLE_DE_RAPPEL.some(elt => elt.nombre === this.question && this.formalizeString(elt.valeur) === this.formalizeString(this.reponse));
  }

  public formalizeString(str: string): string {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
  }

  public onChangingReponse(blabla: any){
    this.reponse = blabla.target.value;
  }

  public trouverReponse(question: number): string | undefined {
    return AppComponent.TABLE_DE_RAPPEL.find(elt => elt.nombre === question)?.valeur;
  }

  public genererNouvelleQuestion(): void {
    this.oldQuestion = this.question;
    while(this.question === this.oldQuestion){
      this.question = Math.floor(Math.random() * AppComponent.NOMBRE_MAX);
    }
  }

}
