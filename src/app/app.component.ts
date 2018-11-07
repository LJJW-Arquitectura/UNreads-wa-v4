import { Component } from '@angular/core';

import { Platform,NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GlobalProvider } from '../providers/global/global';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  pages
  username

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private global: GlobalProvider,
    public navCtrl: NavController
    ) {
    this.initializeApp();
    this.pages = [
    { title: 'Iniciar Sesion', component: '/login' ,needLogin: false, noNeedLogin: true},
    { title: 'Libros', component: '/books' ,needLogin: false, noNeedLogin: false},
    { title: 'Listas', component: '/booklists' ,needLogin: false, noNeedLogin: false},
    { title: 'Mis listas', component: '/mybooklists' ,needLogin: true, noNeedLogin: false},
    { title: 'Mis libros leidos', component: 'myreadlist' ,needLogin: true, noNeedLogin: false},
    { title: 'Mis reseñas', component: '/myreviews' ,needLogin: true, noNeedLogin: false},
    { title: 'Mis sugerencias', component: '/mysuggestions' ,needLogin: true, noNeedLogin: false},
    { title: 'Crear Libro', component: '/createbook' ,needLogin: false, noNeedLogin: false},
    { title: 'Crear sugerencia', component: '/createsuggestion' ,needLogin: true, noNeedLogin: false},
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  canShow(page){
    if(this.global.authenticatedId == 0){
      return !page.needLogin
    }else{
      return !page.noNeedLogin
    }
  }

  isLoggedIn(){
    if(this.global.authenticatedId == 0){
      this.username = "Invitado";
      return false;
    }else{
      this.username = this.global.user;
      return true;
    }
  }

  logout(){
    this.global.authenticatedId = 0;
    this.username = "Invitado";
  }

  openPage(page) {   
    this.navCtrl.navigateForward(page.component);
  }
}
