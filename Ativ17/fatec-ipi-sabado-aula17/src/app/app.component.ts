import { Component } from '@angular/core';
import { PrevisoesService } from './previsoes.service';
import { Previsao } from './model/previsao';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public pesquisa: string;
  public url: string;
  public previsoes: Previsao[];
  public cidade: string;
  
  pesquisar(pesquisa: string): void {
    this.cidade=pesquisa
    this.url="http://api.openweathermap.org/data/2.5/forecast?q=" + pesquisa + "&appid=5c28a270774141e17c0184b037b987d1&units=metric&lang=pt_br&cnt=16"
  }

  constructor(private previsoesService: PrevisoesService) {    
    previsoesService.obterPrevisoes(this.url).subscribe((previsoes) => {      
      this.previsoes = previsoes['list'];      
      console.log(this.previsoes);    
    });  
  } 
} 