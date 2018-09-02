import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-ideia-detalhe',
	templateUrl: 'ideia-detalhe.html',
})
export class IdeiaDetalhePage {

	public getCard;
	public percent;
	public participante;

	constructor(public navCtrl: NavController, public navParams: NavParams) {

		this.getCard = this.navParams.get('cardIdeia');

		console.log('getCard ' + JSON.stringify(this.getCard));

		this.percent = (parseInt(this.getCard.people_interested)*100)/parseInt(this.getCard.people_needed);
		console.log('percent ' + this.percent);

		this.participante = JSON.stringify(this.getCard.participants);
		console.log('tem participanteeeeeeeeeeeeees? ' + this.participante)

		console.log('this.percent ' + this.percent);
		
	}

	vaiPresencaConfirma() {
		this.navCtrl.push('PresencaIdeiaPage');
	}

}
