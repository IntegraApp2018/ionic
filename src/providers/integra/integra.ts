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
