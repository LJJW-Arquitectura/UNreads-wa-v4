import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class GlobalProvider {
  	public authenticatedId: number = 0;
  	public user: string = '';
    public token: string = '';

  	constructor(public http: HttpClient,public storage: Storage) {
  		console.log('Hello GlobalProvider Provider');
  		
  		storage.ready().then(() => {
  			this.storage.get('user').then((user) => {
  				if(user == null){
  					this.storage.set('user', {name:"" , id:0 ,token: ""});

  				}else{
  					this.authenticatedId = user.id
            this.token = user.token
  					this.user = user.name
  					console.log('Me: Hey, ' + user.name + '! You have a very nice name.');
  					console.log('You: Thanks! I got it for my birthday. ' + user.id);	
  				}
  				
  			});
  		});

  	}

  	setUser(user){
  		this.storage.set('user', {name:user.username , id:user.id, token: user.token});
  	}

    logout(){
      this.storage.set('user', {name:"" , id:0 ,token: ""});
      this.authenticatedId = 0
      this.user = ""
      this.token = ""
    }

  	refresh(){      
        this.storage.get('user').then((user) => {
          console.log(user)
          if(user == null){
            this.storage.set('user', {name:"" , id:0 ,token: ""});
          }else{
            this.authenticatedId = user.id
            this.user = user.name
            this.token = user.token
          }

        });
    }
  }

