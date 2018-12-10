import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule, MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';
import { BookDetailsComponent } from './book-details/book-details.component';

import { MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AddToCartDialogComponent } from './book-details/dialogs/add-to-cart-dialog.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  exports: [
    MatDialogModule
  ],
  entryComponents: [AddToCartDialogComponent],
  declarations: [
    AppComponent,
    NavComponent,
    BooksComponent,
    BookComponent,
    BookDetailsComponent,
    AddToCartDialogComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
