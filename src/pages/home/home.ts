import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IntegraProvider } from '../../providers/integra/integra';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {


	private cardIdeias;
	private cardAcoes;

	pet: string = "puppies";
	constructor(public navCtrl: NavController,
		public serviceIntegra: IntegraProvider) {

		this.serviceIntegra
		.buscaCardIdeias()
		.subscribe((retorno) => {
			this.cardIdeias = retorno;
		})

		console.log('this.cardIdeias ' + JSON.stringify(this.cardIdeias));

		this.serviceIntegra
		.buscaCardAcoes()
		.subscribe((retorno) => {
			this.cardAcoes = retorno;
		})

		console.log('this.cardAcoes ' + JSON.stringify(this.cardAcoes));
	}

	vaiDetalheIdeia(cardIdeia) {
		this.navCtrl.push('IdeiaDetalhePage', {
			cardIdeia: cardIdeia
		});
	}


	vaiDetalheAcao(cardAcao){
    	this.navCtrl.push('AcaoDetalhePage', {
			cardAcao: cardAcao
      	});
	}

	vaiCriarIdeia(){
    	this.navCtrl.push('CriarIdeiaPage');
	}
}
