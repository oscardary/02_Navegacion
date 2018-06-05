import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  nombre:"";
  edad:0;

  constructor(public viewCtrl: ViewController,
              public navParams: NavParams) {
    this.nombre = this.navParams.get("nombre");
    this.edad = this.navParams.get("edad");

    console.log(this.nombre + ", " + this.edad);
  }

  fnCerrarConParam(){

    let data = {
      nombre: "Sara QZ",
      edad: 26,
      coord: {
        lat: 10,
        lgt: -10
      }
    };

    this.viewCtrl.dismiss( data );
  }

  fnCerrarSinParam(){
    this.viewCtrl.dismiss();
  }

  

}
