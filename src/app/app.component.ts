import { Component } from '@angular/core';
import 'animate.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
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
  ];

  public static NOMBRE_MAX: number = 19;

  public reponse:string = '';
  public question:number = Math.floor(Math.random() * AppComponent.NOMBRE_MAX);
  public oldQuestion:number = -1;
  public commentaire: string = 'A toi de jouer !';
  public reussites: number = 0;
  public total: number = 0;

  public ngOnInit(): void {
    this.oldQuestion = this.question;
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
