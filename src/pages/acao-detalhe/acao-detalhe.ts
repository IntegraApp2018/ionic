import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AcaoDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-acao-detalhe',
	templateUrl: 'acao-detalhe.html',
})
export class AcaoDetalhePage {

	public getCard;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.getCard = this.navParams.get('cardAcao');

		console.log('getCard ' + JSON.stringify(this.getCard));
	}

}
