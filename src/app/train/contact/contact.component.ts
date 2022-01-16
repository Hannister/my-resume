import { Component, OnInit } from '@angular/core';
import { getStorage, ref } from "firebase/storage";
import firebase from "firebase/compat";
import {getDownloadURL} from "@angular/fire/storage";
import {Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {HttpClient} from "@angular/common/http";
import {take} from "rxjs/operators";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  profileUrl!: Observable<string | null>;

  constructor(private storage: AngularFireStorage,
              private http: HttpClient) {

  }

  ngOnInit(): void {
  }

  onDownloadCv(){
    const storage = getStorage();
    getDownloadURL(ref(storage, 'gs://resumesite-hanny.appspot.com/Resume.pdf'))
      .then((url) => {
        window.open(url, "_blank");

      })
      .catch((error) => {
        // Handle any errors
      });
  }

}
