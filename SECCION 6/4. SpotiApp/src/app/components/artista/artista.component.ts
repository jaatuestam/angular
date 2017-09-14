import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {


  constructor(private activatedRoute:ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute
  }

}
