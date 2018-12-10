import { Component, Inject } from "@angular/core";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Book } from "src/app/book/book.model";

export interface DialogData {
    count: number;
    book: Book;
  }

@Component({
    selector: 'add-to-cart-dialog',
    templateUrl: 'add-to-cart-dialog.component.html',
  })
  export class AddToCartDialogComponent {
  
    constructor(
      public dialogRef: MatDialogRef<AddToCartDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }