import { Component, OnInit } from '@angular/core';
import { NavController,Events } from '@ionic/angular';
import { BooksProvider } from '../../providers/books/books';
import { GlobalProvider } from '../../providers/global/global';

@Component({
	selector: 'app-myreviews',
	templateUrl: './myreviews.page.html',
	styleUrls: ['./myreviews.page.scss'],
})
export class MyreviewsPage implements OnInit {

	reviews$
	aux = []
	myId
	user
	constructor(public navCtrl: NavController, 
		public globalProvider: GlobalProvider, 
		public provider: BooksProvider) {
		this.reviews$ = provider.getUserReviewsByCode(this.globalProvider.authenticatedId);
		
		globalProvider.refresh()
		this.myId = globalProvider.authenticatedId 
		this.user = globalProvider.user 
		if(globalProvider.authenticatedId == 0){
			this.navCtrl.navigateForward('/books');
		}

	} 
	
	itemTapped(event, book_id) {
		this.navCtrl.navigateForward('/book/' + book_id);		
	}
	
	ngOnInit() {
	}

}
