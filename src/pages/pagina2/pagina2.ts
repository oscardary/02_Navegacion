import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Pagina3Page } from "../index.pages";
/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  pagina3:any = Pagina3Page;

  mutantes:any[] = [
    {nombre:"Magneto", poder:"Controlar metales"},
    {nombre:"SuperMan", poder:"Salvar el mundo"},
    {nombre:"Oscar", poder:"Cambiar el mundo"}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  fnIrPagina3(mutante){
    this.navCtrl.push(Pagina3Page, {personaje: mutante});
  }

}
