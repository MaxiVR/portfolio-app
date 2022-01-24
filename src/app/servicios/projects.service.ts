import { Injectable } from '@angular/core';
import { CardProject } from '../cardProject.model'; 

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  
  cardProject: CardProject[] = [

    new CardProject ("titulo1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan nisl mi, vitae mattis quam consectetur et. Sed fringilla commodo lacus, a dignissim lacus. Donec ut euismod lorem, posuere accumsan justo. Duis nec sapien in massa consequat consectetur vitae ut turpis. Sed consequat vitae mauris vitae hendrerit. Curabitur erat tortor, scelerisque et porttitor sit amet, aliquam ut massa. Nullam sed malesuada justo. Quisque tincidunt venenatis dolor non varius. Vestibulum efficitur ullamcorper augue, et mollis lacus venenatis in. Sed accumsan massa eu mauris congue, non fringilla metus hendrerit. Proin rutrum neque ipsum. Sed egestas nibh sed sem dignissim, vitae mollis orci maximus. Nulla bibendum justo vitae orci accumsan porta."  , 0),
    new CardProject ("titulo2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan nisl mi, vitae mattis quam consectetur et. Sed fringilla commodo lacus, a dignissim lacus. Donec ut euismod lorem, posuere accumsan justo. Duis nec sapien in massa consequat consectetur vitae ut turpis. Sed consequat vitae mauris vitae hendrerit. Curabitur erat tortor, scelerisque et porttitor sit amet, aliquam ut massa. Nullam sed malesuada justo. Quisque tincidunt venenatis dolor non varius. Vestibulum efficitur ullamcorper augue, et mollis lacus venenatis in. Sed accumsan massa eu mauris congue, non fringilla metus hendrerit. Proin rutrum neque ipsum. Sed egestas nibh sed sem dignissim, vitae mollis orci maximus. Nulla bibendum justo vitae orci accumsan porta."  , 1)

  ];

  constructor() { }

  agregarCampoServicio(titulo:string, comentario:string, id: number){
    const newCampo = new CardProject (titulo, comentario, id);
    this.cardProject.push(newCampo);
  }


  agregarInfoServicio(index:number, titulo:string, comentario: string){
    this.cardProject[index].titulo = titulo;
    this.cardProject[index].comentario= comentario;
    
  }

  eliminarInfo(id: number){
    this.cardProject.splice(id - 1, 1)
  }

}
