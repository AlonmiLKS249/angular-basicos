import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Hulk','IronMan','Thor'];
  heroesBorrados: string[] = [];

  borrarHeroe() {
    let heroeBorrado = this.heroes.pop();
    if (heroeBorrado != undefined) {this.heroesBorrados.push(heroeBorrado);}
  }

}
