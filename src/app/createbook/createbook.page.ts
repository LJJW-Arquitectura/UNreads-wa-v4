import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BooksProvider } from '../../providers/books/books';
import { GlobalProvider } from '../../providers/global/global';

@Component({
	selector: 'app-createbook',
	templateUrl: './createbook.page.html',
	styleUrls: ['./createbook.page.scss'],
})
export class CreatebookPage implements OnInit {

	title: string;
	publiser: string;
	numPages: number;
	isbn: string;
	plot: string;
	authors: Array<string>;
	genres: Array<string>;
	author: string;
	genre: string;
	id$

	constructor(public navCtrl: NavController, public provider: BooksProvider,public global: GlobalProvider) {
	}

	addAuthor(){
		if (!this.authors) {this.authors = []}
			this.authors.push(this.author);
	}

	addGenre(){
		if (!this.genres) {this.genres = []}
			this.genres.push(this.genre);
	}

	createBook(){
		if(this.title == undefined || 
			this.publiser == undefined || 
			this.numPages == undefined ||
			this.plot == undefined ||
			this.authors == undefined ||
			this.genres == undefined ||
			this.isbn == undefined){
			alert ("Porfavor llenar todos los campos")
		}else {
			this.provider.createBook(this.title, this.publiser, this.numPages, this.isbn, this.plot, this.authors, this.genres).subscribe(response => {
				this.navCtrl.navigateForward('/book/' + response.data.createBook.id);				
			})
		}
	}

	ngOnInit() {
	}

}
