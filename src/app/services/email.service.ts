import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private afStore: AngularFirestore, private toastr: ToastrService) {
  }

  sendMessage(form: FormGroup) {
    let data = {
      'email': form.get('email')?.value,
      'name': form.get('name')?.value,
      'last_name': form.get('last_name')?.value,
      'message': form.get('message')?.value
    };
    
    this.afStore.collection('mail').add(data)
    .then(() => {
      this.toastr.success("Message sent.", undefined);

      form.reset();
    })
    .catch(() => {
      this.toastr.error("Somthing went wrong. Please try again.", undefined);
    });
  }
}
