import { Component, OnInit} from '@angular/core';
import { UtilisateursService } from '../services/utilisateurs.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {
  
  constructor(public lUtilisateurs: UtilisateursService) { }

  ngOnInit() { }

}
