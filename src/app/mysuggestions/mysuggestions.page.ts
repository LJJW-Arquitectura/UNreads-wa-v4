import { Component, OnInit } from '@angular/core';
import { NavController,Events } from '@ionic/angular';
import { BooksProvider } from '../../providers/books/books';
import { GlobalProvider } from '../../providers/global/global';

@Component({
	selector: 'app-mysuggestions',
	templateUrl: './mysuggestions.page.html',
	styleUrls: ['./mysuggestions.page.scss'],
})
export class MysuggestionsPage implements OnInit {

	suggestions$
	auxid1 = []
	auxid2 = []
	myId
	user
	constructor(public navCtrl: NavController, 
		public globalProvider: GlobalProvider, 
		public provider: BooksProvider) {
		globalProvider.refresh()
		this.suggestions$ = provider.getUserSuggestionsByCode(this.globalProvider.authenticatedId);
		this.myId = globalProvider.authenticatedId 
		this.user = globalProvider.user 
		if(this.myId == 0){
			this.navCtrl.navigateBack('/books');
		}
	} 

	itemTapped(event, book_id) {
		this.navCtrl.navigateForward('/book/' + book_id);
	}

	ngOnInit() {
	}

}
