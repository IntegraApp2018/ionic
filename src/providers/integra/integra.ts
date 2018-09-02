import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the IntegraProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IntegraProvider {

	private urlBase = 'http://integra-api.herokuapp.com/';

	constructor(public _http: HttpClient) {
		console.log('Hello IntegraProvider Provider');
	}

	buscaCardIdeias() {
		var retornoCardIdeias = this._http.get(this.urlBase + 'ideas',
			{
				headers: {
					'Content-Type': 'application/json'
				},
				params: {
				}
			});

		return retornoCardIdeias;
	}

	buscaCategorias() {
		var retornoCategories = this._http.get(this.urlBase + 'categories',
			{
				headers: {
					'Content-Type': 'application/json'
				},
				params: {
				}
			});

		return retornoCategories;
	}

	sendIdea(tituloIdeia, dataIdeia, horaIdeia, descIdeia, categoriaIdea, nroPessoas, materialAjuda, enderecoIdea) { 	  
		  var retornoPostIdeia = this._http.post(this.urlBase + 'cards', 
										{ 
											"title":tituloIdeia,
											"description":descIdeia,
											"category_id":categoriaIdea,
											"people_interested":0,
											'materialName':materialAjuda,
											'materialquantity':1,
											"people_needed":nroPessoas,
											"time":'2012-01-26T13:51:50.417-07:00',
											"location":enderecoIdea, 
											"owner_id":3
										}, 
		                                {});
		  return retornoPostIdeia;
		}

	confirmaUsuario(idCard){

		
		var retornoPostIdeia = this._http.post(this.urlBase + 'cards/'+ idCard +'/participants ', 
										{ 
											"user_id":3
										}, 
		                                {});
		  return retornoPostIdeia;
	}

	buscaCardAcoes() {
		var retornoCardAcoes = this._http.get(this.urlBase + 'actions',
			{
				headers: {
					'Content-Type': 'application/json'
				},
				params: {
				}
			});

		return retornoCardAcoes;
	}

}
