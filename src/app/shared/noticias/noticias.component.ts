import { Component, Input } from '@angular/core';
import { Article } from '../interfaces/noticia.interface';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent{
  listaArticulos: Article[]=[];
    //para input erecibir info del padre al hijo
    @Input() numArt:number=0;

  constructor(private noticiaService:NoticiasService){
    
    
    this.noticiaService.getNoticias().subscribe(data => {
      
      this.listaArticulos = data.articles;
      //this.listaArticulos[0].urlToImage
      
    });

  }

  mostrarNoticia(){
    
    
  }
}
