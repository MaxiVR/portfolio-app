import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string = "Maximiliano Vazquez";
  place: string = "La Plata, Bs As - Argentina";
  myImage: any = 'https://img.freepik.com/vector-gratis/dibujos-animados-cara-hombre-joven_18591-59097.jpg?size=338&ext=jpg'


  constructor() { }

  ngOnInit(): void {
  }

  cambiarDatos(nom: string, lugar: string) {
    this.name = nom;
    this.place = lugar;
  }

  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.myImage = reader.result;

      reader.readAsDataURL(file);
    }
  }
}
