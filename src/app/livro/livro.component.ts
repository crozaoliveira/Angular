import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Livro } from '../model/livro';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss'],
  
})

export class LivroComponent implements OnInit {
  
  constructor(private _api: ApiService) { }

  ngOnInit() {
  }
  

}
