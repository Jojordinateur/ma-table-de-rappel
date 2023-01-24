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
  public commentaire: string = 'A toi de jouer !';

  

  public onValider(): void {
    if(this.estLaBonneReponse()) {
      this.question = Math.floor(Math.random() * AppComponent.NOMBRE_MAX);
      this.commentaire = 'Bravo ! Encore !'
      this.reponse ='';
    } else {
      this.commentaire = 'Raté ! Un autre.';
      this.question = Math.floor(Math.random() * AppComponent.NOMBRE_MAX);
      this.reponse ='';
    }
  }

  public estLaBonneReponse(): boolean {
    return AppComponent.TABLE_DE_RAPPEL.some(elt => elt.nombre === this.question && elt.valeur === this.reponse);
  }

  public onChangingReponse(blabla: any){
    this.reponse = blabla.target.value;
  }

}
