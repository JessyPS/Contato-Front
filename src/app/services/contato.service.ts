import { EventEmitter, Injectable } from '@angular/core';
import { Contato } from '../models/Contato';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private readonly chave:string = "CONTATOS";
  private readonly url = "http://contatos-nodb.herokuapp.com";

  static onContatosMudaram:EventEmitter<Contato[]> = new EventEmitter();

  constructor(private http: HttpClient) { }
  getContatos():Observable<Contato[]> {
    let token = window.sessionStorage.getItem('token');
    return this.http.get<Contato[]>(this.url+'/contatos', {headers:{Authorization:'Bearer ${token}'}});
  }

  addContato(c:Contato): void {
    
    // // Levantar os contatos do localStorage para um array de contatos
    // let contatos = this.getContatos();
    
    // // Adicionar o contato c ao final do array
    // contatos.push(c);

    // // Salvar o array de volta no localStorage
    // window.localStorage.setItem(this.chave,JSON.stringify(contatos));

    // // Emitindo evento "contatos mudaram"
    // ContatoService.onContatosMudaram.emit(contatos);
  }
}
