import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { concat, forkJoin, from, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Image } from '../models/image.model';
import { Project } from '../models/project.model';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private firestore: AngularFirestore) { }

  getProjects(): Observable<Project[]> {
    return this.firestore.collection("projects").snapshotChanges()
      .pipe(
        map(action => action.map(a => {
          const data = a.payload.doc.data() as Project;
          data.id = a.payload.doc.id;
          this.getProjectImages(data.id).subscribe(images => data.images = images);
          return data;
        }))
      );
  }

  getProjectById(id: string): Observable<any> {

    return this.firestore.collection<Project>("projects").doc(id).snapshotChanges().pipe(map(x => {
      const data = x.payload.data()
      data.id = x.payload.id;
      this.getProjectTeam(id).subscribe(teams => data.teams = teams);
      this.getProjectImages(id).subscribe(images => data.images = images);
      return data;
    }
    ))
  }

  private getProjectTeam(id: string): Observable<Team[]> {
    return this.firestore.collection("projects").doc(id).collection<Team>('teams').snapshotChanges()
      .pipe(
        map(action => action.map(a => {
          const data = a.payload.doc.data();
          return data;
        }))
      );
  }

  private getProjectImages(id: string): Observable<Image[]> {
    return this.firestore.collection("projects").doc(id).collection<Image>('images').snapshotChanges()
      .pipe(
        map(action => action.map(a => {
          const data = a.payload.doc.data();
          return data;
        }))
      );
  }

}
