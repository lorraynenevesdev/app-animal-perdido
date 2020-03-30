import { Component, OnInit } from '@angular/core';
import { ListaAnimaisPerdidosService } from './lista-animais-perdidos.service';
import { ResponseAnimalPerdido } from './animal-perdido.model';

@Component({
  selector: 'app-lista-animais-perdidos',
  templateUrl: './lista-animais-perdidos.component.html',
  styleUrls: ['./lista-animais-perdidos.component.css']
})
export class ListaAnimaisPerdidosComponent implements OnInit {

  tituloPagina = "Animais Perdidos";
  urlbackend = "https://api-animal-perdido.herokuapp.com"; 

  responseListaAnimalPerdido: ResponseAnimalPerdido;
  
  constructor(private service: ListaAnimaisPerdidosService) { }

  ngOnInit(): void {
    
    this.service.getAnimaisPerdidos()
      .subscribe(res => this.responseListaAnimalPerdido = res )
  }

}

