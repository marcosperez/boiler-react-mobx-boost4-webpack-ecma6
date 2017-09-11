import {observable, computed} from 'mobx';
import * as mobx from 'mobx'
import authService from '../services/auth.js'

class AppStore {
	@observable language = "es_ES";
	@observable conectado = false;
	username = '';

    constructor() {
        mobx.autorun(() => console.log());
    }

	@computed get reportStatus() {
		return this.conectado ? "Conectado" : "Desconectado" ;
	}

	setConnectionStatus(){
		this.conectado = !this.conectado;
	}
}

export default AppStore;