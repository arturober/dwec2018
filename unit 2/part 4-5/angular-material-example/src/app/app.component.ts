import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-example';
  resp = '';

  constructor(private dialog: MatDialog) {}

  openModal() {
    const modalRef = this.dialog.open(ModalConfirmComponent, {
      data: {title: 'Important question!', body: 'Do you want to marry me?'},
      disableClose: true
    });
    modalRef.afterOpened().subscribe(() => console.log('Modal opened!'));
    modalRef.afterClosed().subscribe(resp => {
      console.log('Modal closed! ', resp);
      this.resp = resp ? 'Yes!' : 'No...';
    });
  }
}
