import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BooksProvider } from '../../providers/books/books';
import { GlobalProvider } from '../../providers/global/global';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-infobooklist',
	templateUrl: './infobooklist.page.html',
	styleUrls: ['./infobooklist.page.scss'],
})
export class InfobooklistPage implements OnInit {


	list$
	books$ = []
	ready = false
	readed = false
	user_id: number;
	name: string;
	constructor(public navCtrl: NavController,
		public provider: BooksProvider,
		private route: ActivatedRoute) {
		
		this.user_id = +this.route.snapshot.paramMap.get('user');
		this.name = this.route.snapshot.paramMap.get('name');
		console.log(this.name)
		this.list$ = provider.getBooklist(this.user_id,this.name)
		provider.getBooklist(this.user_id,this.name).subscribe(list => {
			for (var i = list.books.length - 1; i >= 0; i--) {
				provider.getBookById(list.books[i]).subscribe(book => this.books$.push(book))
			} 					
		})		
		this.ready = true
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad InfobooklistPage');
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
