import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {
  
  utilisateur:object;
  listeUtilisateurs:Array<object>;

  constructor(private http:HttpClient) {
    this.getUtilisateurs();
  }
  
  getUtilisateurs(){
    this.http.get<Array<object>>('assets/modele/utilisateurs.json').subscribe(
      (data) => {
        console.log(data);
        this.listeUtilisateurs = data;
      }
    );
  }
}
