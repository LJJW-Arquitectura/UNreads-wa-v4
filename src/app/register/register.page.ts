import { Component, OnInit } from '@angular/core';
import { NavController,ToastController } from '@ionic/angular';
import { UserProvider } from '../../providers/user/user';
import { GlobalProvider } from '../../providers/global/global';

@Component({
	selector: 'app-register',
	templateUrl: './register.page.html',
	styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

	username:string;
	password:string;
	repassword:string;
	email:string;
	confirmationText:string;

	constructor(public navCtrl: NavController, 
		public provider: UserProvider,
		public globalProvider: GlobalProvider,
		public toastCtrl: ToastController) {
		globalProvider.refresh()
		var myId = globalProvider.authenticatedId 
		var user = globalProvider.user 
		if(myId != 0){
			this.navCtrl.navigateBack('/books');
		}
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad RegisterPage');
	}
	async presentToast() {
		const toast = await this.toastCtrl.create({
			message: 'Usuario creado correctamente',
			duration: 3000
		});
		toast.present();
	}
	register(){
		if(this.username == undefined || 
			this.password == undefined || 
			this.repassword == undefined ||
			this.email == undefined)
		{
			alert ("Porfavor llenar todos los campos")
		}
		else if(this.password != this.repassword){
			alert ("Las contraseñas no coinciden")
		}
		else{
			this.provider.createUser(this.username, this.password, this.email);
			this.presentToast();
			this.navCtrl.navigateBack('/books');
		}
	}
	ngOnInit() {
	}

}
