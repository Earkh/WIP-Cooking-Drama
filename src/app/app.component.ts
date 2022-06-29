import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home/', icon: 'home' },
    { title: 'Buscar', url: '/search/', icon: 'search' },
    { title: 'Favoritas', url: '/favorites', icon: 'heart' },
    { title: 'Añadir', url: '/add', icon: 'add-circle' },
  ];

  constructor() {}
}
