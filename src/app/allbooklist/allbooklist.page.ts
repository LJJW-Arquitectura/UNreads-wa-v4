import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BooksProvider } from '../../providers/books/books';

@Component({
	selector: 'app-allbooklist',
	templateUrl: './allbooklist.page.html',
	styleUrls: ['./allbooklist.page.scss'],
})
export class AllbooklistPage implements OnInit {

	Alllist$
	lists$
	searchTerm: string = '';

	constructor(public navCtrl: NavController,
		public provider: BooksProvider) {
		provider.getAllBooklist().subscribe(list => this.Alllist$ = list);
		provider.getAllBooklist().subscribe(list => this.lists$ = list);
	} 


	setFilteredItems(){
		this.provider.getAllBooklist().subscribe(list => this.Alllist$ = list);
		this.lists$ = this.Alllist$.filter((item) => item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1)
	} 	

	trackByFn(index, list) {
		return list.name + list.user;
	}

	itemTapped(event, _list) {
		this.navCtrl.navigateForward('/booklist/' + _list.user_id + '/' + _list.name);
	}

	ngOnInit() {
	}
	
}
