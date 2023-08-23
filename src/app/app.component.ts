import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'animate.css';
import { CasierTablePojo } from './models/casier-table-pojo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'table-de-rappel';

  public reponse:string = '';
  public question = 0;
  public oldQuestion:number = -1;
  public commentaire: string = 'A toi de jouer !';
  public reussites: number = 0;
  public total: number = 0;
  public test: any = '';
  public tableRappel: CasierTablePojo[] = [];
  public nombreMax : number = 0;

  constructor(private http: HttpClient) {}

  public ngOnInit(): void {
    this.fetchData();
    this.firstLoad();
    //this.firstSave();
    
  }

  fetchData() {
    this.http.get('http://localhost:8080/api/db').subscribe(
      (data) => {
        this.test = data;
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  }

  firstLoad() {
    this.http.get<CasierTablePojo[]>('http://localhost:8080/api/getList').subscribe(
      (data) => {
        this.tableRappel = data;
        this.nombreMax = data.length - 1;
        this.question = Math.floor(Math.random() * this.nombreMax);
        this.oldQuestion = this.question;
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  }

  /*firstSave() {
    this.http.post('http://localhost:8080/api/firstsave', AppComponent.TABLE_DE_RAPPEL).subscribe(
      () => {
        console.log('is ok');
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  }*/

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
    return this.tableRappel.some(elt => elt.numeroCasier === this.question && this.formalizeString(elt.contenuCasier) === this.formalizeString(this.reponse));
  }

  public formalizeString(str: string): string {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
  }

  public onChangingReponse(blabla: any){
    this.reponse = blabla.target.value;
  }

  public trouverReponse(question: number): string | undefined {
    return this.tableRappel.find(elt => elt.numeroCasier === question)?.contenuCasier;
  }

  public genererNouvelleQuestion(): void {
    this.oldQuestion = this.question;
    while(this.question === this.oldQuestion){
      this.question = Math.floor(Math.random() * this.nombreMax);
    }
  }

}
