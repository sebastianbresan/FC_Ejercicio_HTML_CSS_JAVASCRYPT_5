let bbdd = [];
let estadoNombre = false;
let estadoCiudad = false;
let estadoPais = false;
let estadoTelefono = false;
let estadoCorreo = false;
let estadoEtiquetas = false;
let hidden = false;
const arEtiquetas = [
  "HTML&CSS",
  "JAVA",
  "PYTHON",
  "ANGULAR",
  "REACT",
  "BIG DATA",
  "TYPESCRYPT",
  "JAVASCRYPT",
  "GO",
];

class Alumno {
  constructor(nombre, ciudad, pais, telefono, correo, []) {
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.pais = pais;
    this.telefono = telefono;
    this.correo = correo;
    this.etiquetas = [];
  }
}

function flocal() {
  let nombreInput = document.getElementById(`nombre`).value;
  let ciudadInput = document.getElementById(`ciudad`).value;
  let paisInput = document.getElementById(`pais`).value;
  let telefonoInput = document.getElementById(`telefono`).value;
  let correoInput = document.getElementById(`correo`).value;
  let etiquetasInput = document.getElementById(`etiquetas`).value;

  if (nombreInput == "") {
    alert("Debe rellenar el nombre correctamente");
  } else if (ciudadInput == "") {
    alert("Debe rellenar la ciudad correctamente");
  } else if (paisInput == "") {
    alert("Debe rellenar el pais correctamente");
  } else if (telefonoInput == "") {
    alert("Debe rellenar el telefono correctamente");
  } else if (correoInput == "") {
    alert("Debe rellenar el email correctamente");
  } else {
    const candidato = new Alumno(
      nombreInput,
      ciudadInput,
      paisInput,
      telefonoInput,
      correoInput,
      etiquetasInput
    );
    bbdd.push(candidato);
    document.getElementById(`tabla`).innerHTML +=
      `<tr class="tr">
  <td class="tdNombre">` +
      nombreInput +
      `</td>
    <td class="tdCiudad">` +
      ciudadInput +
      `</td>
    <td class="tdPais">` +
      paisInput +
      `</td>
    <td class="tdTelefono">` +
      telefonoInput +
      `</td>
    <td class="tdCorreo">` +
      correoInput +
      `</td>
    <td class="tdEtiquetas">` +
      `<p class="etiqueta">` +
      etiquetasInput +
      `</p>` +
      `</td>
</tr>`;
    console.clear();
    console.log(bbdd);
    document.getElementById(`formulario`).reset();
  }
  mostrarFormulario();
}

function añadirAlumnos() {
  const candidato1 = new Alumno(
    "Esteban Gimenez",
    "Barcelona",
    "España",
    "+34 345 345 345",
    "sbarcelona@gmail.com",
    ""
  );
  candidato1.etiquetas.push(arEtiquetas[0], arEtiquetas[1], arEtiquetas[2]);
  bbdd.push(candidato1);
  const candidato2 = new Alumno(
    "Juan Martin Gimenez",
    "Madrid",
    "España",
    "+34 432 345 345",
    "smadrid@gmail.com",
    ""
  );
  candidato2.etiquetas.push(arEtiquetas[3], arEtiquetas[4], arEtiquetas[5]);
  bbdd.push(candidato2);
  const candidato3 = new Alumno(
    "Jose Rodruigo Diaz",
    "Oviedo",
    "España",
    "+34 444 345 345",
    "soviedo@gmail.com",
    ""
  );
  candidato3.etiquetas.push(arEtiquetas[2], arEtiquetas[4], arEtiquetas[6]);
  bbdd.push(candidato3);
  const candidato4 = new Alumno(
    "Pedro Gabriel Machado",
    "Rosario",
    "Argentina",
    "+34 665 345 345",
    "srosario@gmail.com",
    ""
  );
  candidato4.etiquetas.push(arEtiquetas[6], arEtiquetas[7], arEtiquetas[8]);
  bbdd.push(candidato4);
  ordenar();
}

function mostrarFormulario() {
  hidden = !hidden;
  if (hidden) {
    document.getElementById("formulario").style.display = "block";
    document.getElementById("btn").style.display = "block";
  } else {
    document.getElementById("formulario").style.display = "none";
    document.getElementById("btn").style.display = "none";
  }
}

function vaciar() {
  var contador = 1;
  var tabla = document.getElementById("tabla");
  var filas = tabla.rows.length;
  for (var i = contador; i < filas; i++) {
    tabla.deleteRow(contador);
  }
}

function ordenar() {
  for (x = 0; x < bbdd.length; x++) {
    document.getElementById(`tabla`).innerHTML +=
      `<tr class="tr">
    <td class="tdNombre">` +
      bbdd[x].nombre +
      `</td>
      <td class="tdCiudad">` +
      bbdd[x].ciudad +
      `</td>
      <td class="tdPais">` +
      bbdd[x].pais +
      `</td>
      <td class="tdTelefono">` +
      bbdd[x].telefono +
      `</td>
      <td class="tdCorreo">` +
      bbdd[x].correo +
      `</td>
      <td class="tdEtiquetas">` +
      `<p class="etiqueta">` +
      bbdd[x].etiquetas[0] +
      `</p>` +
      `<p class="etiqueta">` +
      bbdd[x].etiquetas[1] +
      `</p>` +
      `<p class="etiqueta">` +
      bbdd[x].etiquetas[2] +
      `</p>` +
      `</td>
  </tr>`;
  }
}

function ordenarNombre() {
  vaciar();
  if (!estadoNombre) {
    bbdd.sort((a, b) => {
      if (a.nombre < b.nombre) {
        return -1;
      }
      if (a.nombre > b.nombre) {
        return 1;
      }
    });
    console.clear();
    console.log(bbdd);
    estadoNombre = true;
  } else {
    bbdd.sort((a, b) => {
      if (a.nombre < b.nombre) {
        return 1;
      }
      if (a.nombre > b.nombre) {
        return -1;
      }
    });
    console.clear();
    console.log(bbdd);
    estadoNombre = false;
  }
  ordenar();
}

function ordenarCiudad() {
  vaciar();
  if (!estadoCiudad) {
    bbdd.sort((a, b) => {
      if (a.ciudad < b.ciudad) {
        return -1;
      }
      if (a.ciudad > b.ciudad) {
        return 1;
      }
    });
    console.clear();
    console.log(bbdd);
    estadoCiudad = true;
  } else {
    bbdd.sort((a, b) => {
      if (a.ciudad < b.ciudad) {
        return 1;
      }
      if (a.ciudad > b.ciudad) {
        return -1;
      }
    });
    console.clear();
    console.log(bbdd);
    estadoCiudad = false;
  }
  ordenar();
}
function ordenarPais() {
  vaciar();
  if (!estadoPais) {
    bbdd.sort((a, b) => {
      if (a.pais < b.pais) {
        return -1;
      }
      if (a.pais > b.pais) {
        return 1;
      }
    });
    console.clear();
    console.log(bbdd);
    estadoPais = true;
  } else {
    bbdd.sort((a, b) => {
      if (a.pais < b.pais) {
        return 1;
      }
      if (a.pais > b.pais) {
        return -1;
      }
    });
    console.clear();
    console.log(bbdd);
    estadoPais = false;
  }
  ordenar();
}
function ordenarTelefono() {
  vaciar();
  if (!estadoTelefono) {
    bbdd.sort((a, b) => {
      if (a.telefono < b.telefono) {
        return -1;
      }
      if (a.telefono > b.telefono) {
        return 1;
      }
    });
    console.clear();
    console.log(bbdd);
    estadoTelefono = true;
  } else {
    bbdd.sort((a, b) => {
      if (a.telefono < b.telefono) {
        return 1;
      }
      if (a.telefono > b.telefono) {
        return -1;
      }
    });
    console.clear();
    console.log(bbdd);
    estadoTelefono = false;
  }
  ordenar();
}

function ordenarCorreo() {
  vaciar();
  if (!estadoCorreo) {
    bbdd.sort((a, b) => {
      if (a.correo < b.correo) {
        return -1;
      }
      if (a.correo > b.correo) {
        return 1;
      }
    });
    console.clear();
    console.log(bbdd);
    estadoCorreo = true;
  } else {
    bbdd.sort((a, b) => {
      if (a.correo < b.correo) {
        return 1;
      }
      if (a.correo > b.correo) {
        return -1;
      }
    });
    console.clear();
    console.log(bbdd);
    estadoCorreo = false;
  }
  ordenar();
}

function ordenarEtiquetas() {
  vaciar();
  if (!estadoEtiquetas) {
    bbdd.sort((a, b) => {
      if (a.etiquetas < b.etiquetas) {
        return -1;
      }
      if (a.etiquetas > b.etiquetas) {
        return 1;
      }
    });
    console.clear();
    console.log(bbdd);
    estadoEtiquetas = true;
  } else {
    bbdd.sort((a, b) => {
      if (a.etiquetas < b.etiquetas) {
        return 1;
      }
      if (a.etiquetas > b.etiquetas) {
        return -1;
      }
    });
    console.clear();
    console.log(bbdd);
    estadoEtiquetas = false;
  }
  ordenar();
}

function buscar() {
    var tabla = document.getElementById('tabla');
    var busqueda = document.getElementById('busqueda').value.toLowerCase();
    var cellsOfRow="";
    var found=false;
    var compareWith="";
    for (var i = 1; i < tabla.rows.length; i++) {
        cellsOfRow = tabla.rows[i].getElementsByTagName('td');
        found = false;
        for (var j = 0; j < cellsOfRow.length && !found; j++) { compareWith = cellsOfRow[j].innerHTML.toLowerCase(); if (busqueda.length == 0 || (compareWith.indexOf(busqueda) > -1))
            {
                found = true;
            }
        }
        if(found)
        {
            tabla.rows[i].style.display = '';
        } else {
            tabla.rows[i].style.display = 'none';
        }
    }
}
