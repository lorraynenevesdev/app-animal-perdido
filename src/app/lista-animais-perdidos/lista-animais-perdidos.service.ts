import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseAnimalPerdido, RequestAnimalPerdidoCreate, ResponseAnimalPerdidoCreate } from './animal-perdido.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ListaAnimaisPerdidosService {

  private url ="http://localhost:3000/animal-perdido" ;
  
  constructor(private http: HttpClient) { }

  getAnimaisPerdidos(): Observable<ResponseAnimalPerdido> {
    
    return this.http.get<ResponseAnimalPerdido>(this.url);

  }
  createListaAnimaisPerdidos(request: RequestAnimalPerdidoCreate): Observable<ResponseAnimalPerdidoCreate> {
    return this.http.post<ResponseAnimalPerdidoCreate>(this.url, request);
  }

}
