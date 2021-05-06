import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AboutMe } from '../models/about-me.model';
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  public AboutMeInfo: AboutMe = null;

  constructor(private firestore: AngularFirestore) {
    this.aboutMe().subscribe(x => {
      this.AboutMeInfo = x[0];
    })
  }

  getExperiences(): Observable<Experience[]> {
    return this.firestore.collection("experience").snapshotChanges()
      .pipe(
        map(action => action.map(a => {
          const data = a.payload.doc.data() as Experience;
          data.id = a.payload.doc.id;
          return data;
        }))
      );
  }

  aboutMe(): Observable<AboutMe[]> {
    return this.firestore.collection<AboutMe>("aboutme").snapshotChanges().pipe(
      map(action => action.map(x => {
        return x.payload.doc.data();
      })));
  }
}
