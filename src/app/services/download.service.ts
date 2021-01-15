import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(private afStorage: AngularFireStorage) { }

  downloadResume() {
    const storageRef = this.afStorage.refFromURL('gs://max-pok.appspot.com/Maxim-Pokidaylo-Resume.docx');
    storageRef.getDownloadURL().subscribe(url => {
      window.open(url);
    });
  }
}
