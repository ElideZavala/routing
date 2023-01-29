import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-libro-imagenes',
  templateUrl: './libro-imagenes.component.html',
  styleUrls: ['./libro-imagenes.component.scss']
})
export class LibroImagenesComponent implements OnInit {
  idLibro!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent?.paramMap
      .subscribe(params => {
        this.idLibro = +params.get('id')!; // the + is the unary operator && get params from the url
      });
  }

}
