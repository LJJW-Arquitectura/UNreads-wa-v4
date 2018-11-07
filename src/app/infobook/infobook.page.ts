import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BooksProvider } from '../../providers/books/books';
import { GlobalProvider } from '../../providers/global/global';
import { UserProvider } from '../../providers/user/user';

import { Observable } from 'rxjs';  
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'app-infobook',
	templateUrl: './infobook.page.html',
	styleUrls: ['./infobook.page.scss'],
})
export class InfobookPage implements OnInit {
	book_id: number;
	book$: Observable<any>;
	reviews$ = []
	suggestions$ = []
	readed
	
	myId = 0
	myName
	constructor(public navCtrl: NavController,
		public provider: BooksProvider,
		public provideruser: UserProvider,
		public globalProvider: GlobalProvider,
		private route: ActivatedRoute,
		public storage: Storage) {

		this.readed = false   
		this.book_id = +this.route.snapshot.paramMap.get('id');
		this.book$ = provider.getBookById(this.book_id);
		provider.getBookReviewsByCode(this.book_id).subscribe(review =>{
			this.reviews$ = review
		});
		provider.getBookSuggestionsByCode(this.book_id).subscribe(suggestion =>{
			this.suggestions$ = suggestion
		});
		this.globalProvider.refresh()
		this.myId = this.globalProvider.authenticatedId
		this.myName = this.globalProvider.user							
		if (this.globalProvider.authenticatedId != 0) {
			this.provider.getReadbooks(this.globalProvider.authenticatedId).subscribe(list => {
				this.readed = list.books.indexOf(this.book_id) > -1
			})
		}


	}


	itemTapped(event, book_id) {
		this.navCtrl.navigateForward('/book/' + book_id);
	}

	ionViewDidLoad() {

	}
	islogged(){
		if (this.myId != 0) {       
			return true
		}else{
			return false
		}
	}
	trackByFn(index, sugg) {
		return sugg.suggestion_id;
	}
	read(){
		this.provider.addBookToReadlist(this.globalProvider.authenticatedId,this.book_id)
		this.readed = true
	}
	ngOnInit() {
	}

}
