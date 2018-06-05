import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ModalPage } from '../index.pages';
/**
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private modalCtrl: ModalController) {
  }

  fnActivarPrincipal(){
    this.navCtrl.parent.select(1);
  }

  fnMostrarModal(){
    let modal = this.modalCtrl.create(ModalPage, {nombre:"Oskar",edad:26});
        modal.present();

        modal.onDidDismiss(parameters=>{
          if(!!parameters){
            console.log("Datos que retornan...");
            console.log(parameters);
          }
          else{
            console.log("No se retornaron datos!");
          }
        });
  }

}
