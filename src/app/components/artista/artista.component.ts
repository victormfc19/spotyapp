import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any = {};

  constructor( private route: ActivatedRoute,
               private service: SpotifyService) 
  {

      let id: any;
      this.route.params.subscribe( params => {

            id = params['id'];
            this.obtenerArtista( id );
            this.obtenerTopTracks( id );
      });
     
  }

  obtenerArtista( id: string ){

    this.service.getArtista(id).subscribe( data => {
      this.artista = data;
    });
    
  }

  obtenerTopTracks( id: string ){

    this.service.getTopTracks(id).subscribe( resp => {
      this.topTracks = resp;
    });

  }

}
