import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BooksProvider } from '../../providers/books/books';
import { GlobalProvider } from '../../providers/global/global';

@Component({
	selector: 'app-allbooks',
	templateUrl: './allbooks.page.html',
	styleUrls: ['./allbooks.page.scss'],
})
export class AllbooksPage implements OnInit {

	books$
	Allbooks$
	searchTerm: string = '';
	pro
	refresh = true
	myId
	user
	constructor(public navCtrl: NavController, 
		public globalProvider: GlobalProvider, 
		public provider: BooksProvider) {
		this.pro = provider
		provider.getAllBooks().subscribe(book => this.Allbooks$ = book);
		provider.getAllBooks().subscribe(book => this.books$ = book);
		globalProvider.refresh() 
		this.myId = globalProvider.authenticatedId
		this.user = globalProvider.user
	} 
	setFilteredItems(){
		this.pro.getAllBooks().subscribe(book => this.Allbooks$ = book);
		this.books$ = this.Allbooks$.filter((item) => item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1)
	} 	
	trackByFn(index, book) {
		return book.id;
	}

	viewMore(event, book_id) {
		this.navCtrl.navigateForward('/book/' + book_id);
	}

	createReview(event, book_id, book_title) {
		this.navCtrl.navigateForward('/createreview/' + book_id + '/' + book_title);		
	}

	islogged(){
		if (this.globalProvider.authenticatedId != 0) {
			return true
		}else{
			return false
		}
	}

	showCreateBook() {
		this.navCtrl.navigateForward('/createbook');
	}

	ngOnInit() {
	}

}
