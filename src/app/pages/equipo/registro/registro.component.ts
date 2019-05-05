import { Component, OnInit } from '@angular/core';

import { EquipoService } from '../../../services/equipo/equipo.service';

import { Equipo } from '../../../models/equipo';

@Component({
  selector: 'ngx-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  equipos: Equipo[];
  equipo: Equipo;

  constructor(private equipoService: EquipoService) { }

  ngOnInit() {
    this.equipo = {} as Equipo;
    this.getEquipos();
  }

  crearEquipo(){
    this.equipoService.post('equipo',this.equipo)
   	  .subscribe((res:Equipo) => {
	      console.log(res);
          this.ngOnInit();
	    },(error) => {
	      console.log(error);
	      alert("Ocurrio un error insertando el equipo");
	    }) 
  }

  getEquipos(){
  	this.equipos = [];
  	this.equipoService.get('equipo')
  		.subscribe((res:Equipo[]) => {
	      console.log(res);
	      if(Object.keys(res[0]).length > 0){
	      	this.equipos = res;
	      }
	    },(error) => {
	      console.log(error);
	      alert("Ocurrio un error cargando los equipos");
	    })
	}
	
	getPaises(){
  	this.equipos = [];
  	this.equipoService.get('pais')
  		.subscribe((res:Equipo[]) => {
	      console.log(res);
	      if(Object.keys(res[0]).length > 0){
	      	this.equipos = res;
	      }
	    },(error) => {
	      console.log(error);
	      alert("Ocurrio un error cargando los equipos");
	    })
  }

}
