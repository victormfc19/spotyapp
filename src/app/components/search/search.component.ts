import { Component} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  busquedaArtista: any[] = [];


  constructor(private spotify:SpotifyService) { }

  buscar(artista:string){
    this.spotify.getArtistas(artista)
          .subscribe( (data:any) => {
       
             this.busquedaArtista = data;
              
          });
  }
}
