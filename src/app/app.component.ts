import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'table-de-rappel';

  public static TABLE_DE_RAPPEL: {nombre: number, valeur: string}[] = [
    {nombre: 0, valeur: "toto"},
    {nombre: 1, valeur: "fleche"},
    {nombre: 2, valeur: "nez"},
    {nombre: 3, valeur: "handspinner"},
    {nombre: 4, valeur: "rubixcube"},
    {nombre: 5, valeur: "cheveux banane"},
    {nombre: 6, valeur: "scie"},
    {nombre: 7, valeur: "maman"},
    {nombre: 8, valeur: "bonbon"},
    {nombre: 9, valeur: "papa"},
    {nombre: 10, valeur: "de"},
    {nombre: 11, valeur: "Millie Bobbie Brown"},
    {nombre: 12, valeur: "Louane"},
    {nombre: 13, valeur: "Mercredi Addams"},
    {nombre: 14, valeur: "Mme Quinconces"},
    {nombre: 15, valeur: "cake"},
    {nombre: 16, valeur: "Saez"},
    {nombre: 17, valeur: "Stephanie"},
    {nombre: 18, valeur: "napperon"},
    {nombre: 19, valeur: "boite oeufs"},
  ];

  public static NOMBRE_MAX: number = 19;

  public reponse:string = '';
  public question:number = Math.floor(Math.random() * AppComponent.NOMBRE_MAX);
  public oldQuestion:number = -1;
  public commentaire: string = 'A toi de jouer !';

  public ngOnInit(): void {
    this.oldQuestion = this.question;
  }

  public onValider(): void {
    if(this.estLaBonneReponse()) {
      this.commentaire = 'Bravo ! Encore !';
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
