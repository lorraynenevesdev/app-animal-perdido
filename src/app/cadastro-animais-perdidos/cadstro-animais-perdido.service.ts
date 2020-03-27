import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { RequestAnimalPerdidoCreate, ResponseAnimalPerdidoCreate, ResponseAnimalPerdidoUpdate, RequestAnimalPerdidoUpdate, ResponseAnimalPerdido, RequestAnimalPerdidoGetUpdate } from './../lista-animais-perdidos/animal-perdido.model';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CadstroAnimaisPerdidoService {

  private url ="http://localhost:3000/animal-perdido" ;
  
  constructor(private http: HttpClient) { }


createCadastroAnimaisPerdidos(request: RequestAnimalPerdidoCreate): Observable<ResponseAnimalPerdidoCreate> {
    return this.http.post<ResponseAnimalPerdidoCreate>(this.url, request);
  }

  getAnimaisPerdidosPorId(id: string): Observable<RequestAnimalPerdidoGetUpdate> {
    const _url = `${this.url}/${id}`;

    return this.http.get<RequestAnimalPerdidoGetUpdate>(_url);
  
  }

  updateAnimaisPerdidos(id: string, request: RequestAnimalPerdidoUpdate) : Observable<ResponseAnimalPerdidoUpdate>  {
    const _url = `${this.url}/${id}`
    return this.http.put<ResponseAnimalPerdidoUpdate>(_url, request);

  }

}

