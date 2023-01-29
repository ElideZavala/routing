import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Libro } from '../libro.model';
import { LIBROS } from '../mocks';

@Component({
  selector: 'app-libro-detalle',
  templateUrl: './libro-detalle.component.html',
  styleUrls: ['./libro-detalle.component.scss']
})
export class LibroDetalleComponent implements OnInit {
  libro!: Libro;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        let id = +params.get('id')!; // <-- the ! is the non-null assertion operator || the + is the unary operator && get params from the url
        this.libro = LIBROS.find(item => item.id === id)!;
      });
  }
}
