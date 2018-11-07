import { Component } from '@angular/core';
import { Observable } from 'rxjs';  
import { BooksProvider } from '../../providers/books/books';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	books$: Observable<any>;

	constructor(
		public provider: BooksProvider) {
		this.books$ = provider.getAllBooks();
	}
}
