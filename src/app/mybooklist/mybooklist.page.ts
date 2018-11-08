import { Component, OnInit } from '@angular/core';
import { NavController,Events } from '@ionic/angular';
import { BooksProvider } from '../../providers/books/books';
import { GlobalProvider } from '../../providers/global/global';

@Component({
	selector: 'app-mybooklist',
	templateUrl: './mybooklist.page.html',
	styleUrls: ['./mybooklist.page.scss'],
})
export class MybooklistPage implements OnInit {

	Alllist$ = []
	lists$  = []
	searchTerm: string = '';
	myid
	constructor(public navCtrl: NavController, 
		public provider: BooksProvider,
		public globalprovider: GlobalProvider) {
		globalprovider.refresh()
		this.myid = globalprovider.authenticatedId 		
		if(globalprovider.authenticatedId == 0){
			this.navCtrl.navigateForward('/booklists');
		}
		provider.getBooklistByuser(globalprovider.authenticatedId).subscribe(list => this.Alllist$ = list);
		provider.getBooklistByuser(globalprovider.authenticatedId).subscribe(list => this.lists$ = list);
	} 

	setFilteredItems(){
		this.provider.getBooklistByuser(this.myid).subscribe(list => this.Alllist$ = list);
		this.lists$ = this.Alllist$.filter((item) => item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1)
	}

	trackByFn(index, list) {
		return list.name + list.user;
	}

	itemTapped(event, _list) {
		this.navCtrl.navigateForward('/booklist/' + _list.user_id + '/' + _list.name);		
	}

	ionViewDidEnter(){
		if(this.Alllist$ != undefined){
			this.setFilteredItems()
		}
	}
	createBooklist(){
		this.navCtrl.navigateForward('/createbooklist');
	}
	ngOnInit() {
	}

}
