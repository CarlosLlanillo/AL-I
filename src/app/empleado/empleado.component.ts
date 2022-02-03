import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre = "Carlos";
  edad = 18;

  constructor() { }

  ngOnInit(): void {
  }

  usuarioRegistrado = true;

  getResgistroUsuario() {
    return this.usuarioRegistrado;
  }

  setResgistroUsuario() {
    alert("Usuario registrado");
  }

}
