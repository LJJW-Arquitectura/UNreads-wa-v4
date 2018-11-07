import { Component, OnInit } from '@angular/core';
import { NavController,Events } from '@ionic/angular';
import { BooksProvider } from '../../providers/books/books';
import { GlobalProvider } from '../../providers/global/global';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-createreview',
	templateUrl: './createreview.page.html',
	styleUrls: ['./createreview.page.scss'],
})
export class CreatereviewPage implements OnInit {


	book_id: number;
	book_title: string;
	review: string;
	grade: number = 0;
	myId
	user

	constructor(public navCtrl: NavController, 
		public globalProvider: GlobalProvider, 
		public provider: BooksProvider,
		public events: Events,
		private route: ActivatedRoute) {

		this.book_id = +this.route.snapshot.paramMap.get('id');
		this.book_title = this.route.snapshot.paramMap.get('title');
		globalProvider.refresh()
		this.myId = globalProvider.authenticatedId 
		this.user = globalProvider.user 
		if(this.myId == 0){
			this.navCtrl.navigateBack('/book' + this.book_id);
		}
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CreatereviewPage');
	}

	createReview(){
		if (this.review == undefined){
			alert("Please fill all fields");
		} else {
			this.provider.createReview(this.book_id, this.myId, this.review, this.grade,this.book_title,this.user).subscribe(response => {
				this.navCtrl.navigateForward('/book/' + this.book_id);
			})
		}
	}
	changeRating(id){
		this.grade = id + 1
	}

	ngOnInit() {
	}

}
