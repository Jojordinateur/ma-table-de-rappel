import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CasierTablePojo } from '../../models/casier-table-pojo';

@Component({
    selector: 'table-rappel',
    templateUrl: './table-rappel.html',
    styleUrls: ['./table-rappel.less']
  })
  export class TableRappelComposant implements OnInit {
    
    public tableRappel: CasierTablePojo[] = [];

  
    constructor(private http: HttpClient) {}
  
    public ngOnInit(): void {
      this.firstLoad();
    }
  
    firstLoad() {
      this.http.get<CasierTablePojo[]>('http://localhost:8080/api/getList').subscribe(
        (data) => {
          this.tableRappel = data;
        },
        (error) => {
          console.error('An error occurred:', error);
        }
      );
    }
  }