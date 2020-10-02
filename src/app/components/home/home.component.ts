import { Component} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{
  
  nuevasCanciones : any[] = [];


  
  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleseas() 
        .subscribe( (data:any) => {
            this.nuevasCanciones = data;
        })
  }
}
