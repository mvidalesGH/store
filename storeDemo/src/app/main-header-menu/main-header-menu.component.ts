import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header-menu',
  templateUrl: './main-header-menu.component.html',
  styleUrls: ['./main-header-menu.component.css']
})
export class MainHeaderMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  active = "Mn01";
  lstMenus= [
    {Icon:"icon-map-marker",Menuref:"Mnu01", MenuNombre:"Menu 01", visible:true, enabled:false},
    {Icon:"icon-signal",Menuref:"Mnu02", MenuNombre:"Menu 02", visible:true, enabled:false},
    {Icon:"icon-sitemap",Menuref:"Mnu03", MenuNombre:"Menu 03", visible:true, enabled:true},
    {Icon:"icon-music",Menuref:"Mnu04", MenuNombre:"Menu 04", visible:true, enabled:true},
    {Icon:"icon-upload",Menuref:"Mnu05", MenuNombre:"Menu 05", visible:true, enabled:true},
    {Icon:"icon-upload-alt",Menuref:"Mnu06", MenuNombre:"Menu 06", visible:true, enabled:true},
    {Icon:"icon-zoom-out",Menuref:"Mnu07", MenuNombre:"Menu 07", visible:true, enabled:true},
    {Icon:"icon-user",Menuref:"Mnu08", MenuNombre:"Menu 08", visible:true, enabled:true},
    {Icon:"icon-truck",Menuref:"Mnu09", MenuNombre:"Menu 09", visible:true, enabled:true},
    {Icon:"icon-calendar-empty",Menuref:"Mnu10", MenuNombre:"Menu 10", visible:true, enabled:true}
  ]
}
