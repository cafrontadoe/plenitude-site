import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
    private donationsCollection: string = 'donations';

    constructor(private firestore: AngularFirestore) {}
  
    addDonation(donation: any): Observable<DocumentReference<any>> {
      return this.firestore.collection(this.donationsCollection).add(donation);
    }
}
