import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { IntegraProvider } from '../../providers/integra/integra';
import { TabsPage } from '../tabs/tabs';

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
	public tituloIdeia;
	public dataIdeia;
	public horaIdeia;
	public descIdeia;
	public categoriaIdea;
	public nroPessoas;
	public materialAjuda;
	public enderecoIdeia;
	public retornoEnviaIdeia;

	constructor(public navCtrl: NavController,
		public integraService: IntegraProvider, 
		public alertCtrl: AlertController,
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
	
	enviaIdeia() {
		console.log('this.tituloIdeia ' + this.tituloIdeia);
		console.log('this.dataIdeia ' + this.dataIdeia);
		console.log('this.horaIdeia ' + this.horaIdeia);
		console.log('this.descIdeia ' + this.descIdeia);
		console.log('this.categoriaIdea ' + this.categoriaIdea);
		console.log('this.nroPessoas ' + this.nroPessoas);
		console.log('this.materialAjuda ' + this.materialAjuda);
		console.log('this.enderecoIdeia ' + this.enderecoIdeia);

		this.integraService
		.sendIdea(this.tituloIdeia, this.dataIdeia, this.horaIdeia,this.descIdeia, this.categoriaIdea, this.nroPessoas, this.materialAjuda, this.enderecoIdeia)
		.subscribe((retorno) => {
			this.retornoEnviaIdeia = retorno;

			if(this.retornoEnviaIdeia) {
				let alert = this.alertCtrl.create({
					title: 'Cadastrado com sucesso!',
					subTitle: 'Obrigado por Cadastrar a sua ideia!',
					buttons: ['OK']
				  });
				  alert.present();

				  this.navCtrl.push(TabsPage);
			}

		})
	}




}
