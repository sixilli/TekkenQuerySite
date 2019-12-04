import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { DataTableItem } from '../models/data-table-model';

@Injectable()
export class DbService {
  //private frameData: AngularFirestoreCollection<DataTableItem> = null;
  private frameData: AngularFirestoreCollection<DataTableItem>;
  private items: DataTableItem[];
  private dbPath = 'entities';

  constructor(private afs: AngularFirestore) {
    this.frameData = afs.collection<DataTableItem>(this.dbPath);
  }

  // This is where more CRUD operations can go
  getFrames(): AngularFirestoreCollection<DataTableItem> {
    return this.frameData  
  }
  
  getCharacterFrames(character: string): Observable<DataTableItem[]> {
    this.frameData = this.afs.collection<DataTableItem>(this.dbPath, ref => 
      {
        return ref 
          .where('Character', '==', character)});
    return this.frameData.valueChanges();
  }
}