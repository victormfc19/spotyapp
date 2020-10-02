import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    
    if(!images) //Si el arreglo de imagenes es igual a null o undenifed
        return "assets/img/noimage.png";   //retorne imagen vacia
    if (images.length > 0) // Si hay una ruta de imagen en el arreglo
        return images[0].url;   // retorne la ruta
    else  
        return "assets/img/noimage.png";
      
  }

}
