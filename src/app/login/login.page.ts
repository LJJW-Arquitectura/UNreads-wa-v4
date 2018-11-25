import { Component, OnInit } from '@angular/core';
import { NavController,ToastController } from '@ionic/angular';
import { BooksProvider } from '../../providers/books/books';
import { UserProvider } from '../../providers/user/user';
import { GlobalProvider } from '../../providers/global/global';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	username:string;
	password:string;
	user$;
	id$

	constructor(public navCtrl: NavController, 
		public provider: UserProvider,
		public global: GlobalProvider,
		public toastCtrl: ToastController) {
		global.refresh()
		var myId = global.authenticatedId 
		var user = global.user 
		if(myId != 0){
			this.navCtrl.navigateBack('/books');
		}
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
	}
	async presentToast() {
		const toast = await this.toastCtrl.create({
			message: 'Inicio de Sesion correcto',
			duration: 3000
		});
		toast.present();
	}
	async noAuthToast() {
		const toast = await this.toastCtrl.create({
			message: 'Nombre de usuario o contraseña incorrectos',
			duration: 3000
		});
		toast.present();
	}
	login(){
		//console.log("Username: "+this.username)
		//console.log("Password: "+this.password)
		//Esta es la linea que no se digna funcionar hasta no darle doble click
		if(this.username == undefined || 
			this.password == undefined ){
			alert ("Porfavor llenar todos los campos")
		}
		else{
			this.provider.getUserByUsernameAndPassword(this.username,this.password).subscribe(user =>
			{
				if(user!=undefined){
					console.log("AuthId: "+user.id)
					this.global.authenticatedId = user.id;
					this.global.user = user.username;
					this.global.token = user.token;
					this.global.setUser(user)
					this.presentToast();
					//this.navCtrl.setRoot(AllbooksPage);
					//this.navCtrl.popToRoot();
					this.navCtrl.navigateBack('/books');
				}
				else{
					this.noAuthToast();
				}
			});
		}
	}


	goRegister(){
		this.navCtrl.navigateForward('/register');
	}

	ngOnInit() {
	}

}
