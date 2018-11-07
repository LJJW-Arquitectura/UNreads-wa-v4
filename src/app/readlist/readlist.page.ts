import { Component, OnInit } from '@angular/core';
import { NavController,Events } from '@ionic/angular';
import { BooksProvider } from '../../providers/books/books';
import { GlobalProvider } from '../../providers/global/global';

@Component({
	selector: 'app-readlist',
	templateUrl: './readlist.page.html',
	styleUrls: ['./readlist.page.scss'],
})
export class ReadlistPage implements OnInit {

	books$ = []
	myId
	refresh = true
	ready = false
	constructor(public navCtrl: NavController, 
		public provider: BooksProvider,
		public globalProvider: GlobalProvider) {

		this.myId = globalProvider.authenticatedId
		provider.getReadbooks(this.myId).subscribe(list => {
			var newbook = []
			for (var i = list.books.length - 1; i >= 0; i--) { 				
				provider.getBookById(list.books[i]).subscribe(book => {
					newbook.push(book)})}
				this.books$ = newbook
			})
		this.ready = true
		if(this.myId == 0){
			this.navCtrl.navigateBack('/books');
		}
	}
	trackByFn(index, book) {
		return book.id;
	}
	itemTapped(event, book_id) {
		this.navCtrl.navigateForward('/book/' + book_id);
	}

	createReview(event, book_id, book_title) {
		this.navCtrl.navigateForward('/createreview/' + book_id + '/' + book_title);		
	}

	ngOnInit() {
	}

}
