import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'books', loadChildren: './allbooks/allbooks.module#AllbooksPageModule' },
  { path: 'booklists', loadChildren: './allbooklist/allbooklist.module#AllbooklistPageModule' },
  { path: 'createbook', loadChildren: './createbook/createbook.module#CreatebookPageModule' },
  { path: 'createbooklist', loadChildren: './createbooklist/createbooklist.module#CreatebooklistPageModule' },
  { path: 'createreview/:id/:title', loadChildren: './createreview/createreview.module#CreatereviewPageModule' },
  { path: 'createsuggestion', loadChildren: './createsuggestion/createsuggestion.module#CreatesuggestionPageModule' },
  { path: 'book/:id', loadChildren: './infobook/infobook.module#InfobookPageModule' },
  { path: 'booklist/:user/:name', loadChildren: './infobooklist/infobooklist.module#InfobooklistPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'mybooklists', loadChildren: './mybooklist/mybooklist.module#MybooklistPageModule' },
  { path: 'myreviews', loadChildren: './myreviews/myreviews.module#MyreviewsPageModule' },
  { path: 'mysuggestions', loadChildren: './mysuggestions/mysuggestions.module#MysuggestionsPageModule' },
  { path: 'myreadlist', loadChildren: './readlist/readlist.module#ReadlistPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
