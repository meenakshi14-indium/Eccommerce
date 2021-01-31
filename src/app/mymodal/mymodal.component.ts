import { IModalDialog, IModalDialogOptions,IModalDialogButton } from 'ngx-modal-dialog';
import { Component, ComponentRef } from '@angular/core';


@Component({
  selector: 'app-my-modal',
  templateUrl: './mymodal.component.html',
  styleUrls: ['./mymodal.component.css']
})
export class MyModalComponent implements IModalDialog {
  actionButtons: IModalDialogButton[];
 
  constructor() {
    this.actionButtons = [
      { text: 'Close' }, // no special processing here
      { text: 'I will always close', onAction: () => true },
      { text: 'I never close', onAction: () => false }
    ];
  }
 
  dialogInit(reference: ComponentRef<any>, options: Partial<IModalDialogOptions<any>>) {
    // no processing needed
  }

}