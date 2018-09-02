import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IntegraProvider } from '../../providers/integra/integra';

/**
 * Generated class for the CriarIdeiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-criar-ideia',
	templateUrl: 'criar-ideia.html',
})
export class CriarIdeiaPage {

	public listaCategorias;

	constructor(public navCtrl: NavController,
		public integraService: IntegraProvider, 
		public navParams: NavParams) {

			this.integraService
			.buscaCategorias()
			.subscribe(
				(retorno) => {
				this.listaCategorias = retorno;
				console.log('this.listaCategorias ' + JSON.stringify(this.listaCategorias))
				}
			)

			
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CriarIdeiaPage');
	}

}
