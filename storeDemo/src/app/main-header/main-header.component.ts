import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  config = {
    mainTitle : "Titulo Principal de la Pagina",
    mainSubTitle : "SubTitulo de la pagina",
    imgLogo : "../../assets/Img/companyLogo.png"
   }
}
