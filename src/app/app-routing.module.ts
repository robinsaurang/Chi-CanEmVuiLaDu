import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentComponent} from './content/content.component';
import {BookDetailComponent} from './book-detail/book-detail.component';

const routes: Routes = [
  {path: '', component: ContentComponent},
  {path: 'detail/:id', component: BookDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
