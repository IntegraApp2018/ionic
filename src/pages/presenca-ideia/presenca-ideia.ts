import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IntegraProvider } from '../../providers/integra/integra';

/**
 * Generated class for the PresencaIdeiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-presenca-ideia',
	templateUrl: 'presenca-ideia.html',
})
export class PresencaIdeiaPage {

	public idCard;

	constructor(public navCtrl: NavController, 
		public serviceIntegra: IntegraProvider,
		public navParams: NavParams) {
		this.idCard = this.navParams.get('idCard');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad PresencaIdeiaPage');
	}

	vaiConfirmacaoPresenca() {

		this.serviceIntegra
		.confirmaUsuario(this.idCard)
		.subscribe()

		this.navCtrl.push('ConfirmacaoPage');
	}

}
