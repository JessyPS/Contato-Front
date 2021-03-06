import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css']
})
export class ListaDeContatosComponent implements OnInit {

  public contatos!: Contato[];

  constructor(private cs:ContatoService ) {
    this.cs.getContatos().subscribe(
      {
        next: contatos => {
          this.contatos = contatos;
        },
        error: err => console.error(err)
      }
    )
  }

  ngOnInit(): void {
  }  

}
