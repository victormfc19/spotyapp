import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {}

  getQuery(query:string){

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDq01hnTH2GA_FZwz_1JzWIejH7f8qSOu1Blz1vhSoVH5xYL6ElUBGP8GG0K2BOwSW0zHANrGwgtGk4PPk'
    });

    return this.http.get(url, {headers} );
  }

  getNewReleseas(){
 
       return this.getQuery('browse/new-releases')
           .pipe( map( (data:any) => {
                return data.albums.items;
      }));
          
  }

  getArtistas( artista:string ){
   
   return this.getQuery(`search?q=${artista}&type=artist&limit=10`)
       .pipe( map( (data:any) => {
            return data.artists.items; 
       }));
  }

  getArtista( id:string ){
    return this.getQuery(`artists/${id}`);
   }
  
   getTopTracks( id: string ){
     return this.getQuery(`artists/${ id }/top-tracks?country=us`)
           .pipe( map( (data:any) => {
               return data.tracks;
           } ))
   }
}
