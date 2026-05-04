import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, DragDropModule, FormsModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
 
 niveles = [
  {
  pregunta: 'Trae todos los datos de la tabla usuarios',
  piezas: ['SELECT', '*', 'FROM usuarios'],
  respuesta: ['SELECT', '*', 'FROM usuarios']
},
{
  pregunta: 'Trae solo el nombre de los usuarios',
  piezas: ['SELECT', 'nombre', 'FROM usuarios'],
  respuesta: ['SELECT', 'nombre', 'FROM usuarios']
},
{
  pregunta: 'Trae usuarios mayores de 25 años',
  piezas: ['SELECT', '*', 'FROM usuarios', 'WHERE edad > 25'],
  respuesta: ['SELECT', '*', 'FROM usuarios', 'WHERE edad > 25']
},
{
  pregunta: 'Trae nombre mayores de 25 años',
  piezas: ['SELECT', 'nombre', 'FROM usuarios', 'WHERE edad > 25'],
  respuesta: ['SELECT', 'nombre', 'FROM usuarios', 'WHERE edad > 25']
},
{
  pregunta: 'Trae usuarios mayores de 20 años',
  piezas: ['SELECT', '*', 'FROM usuarios', 'WHERE edad > 20'],
  respuesta: ['SELECT', '*', 'FROM usuarios', 'WHERE edad > 20']
},
{
  pregunta: 'Trae el nombre y la edad de los usuarios',
  piezas: ['SELECT', 'nombre', ',', 'edad', 'FROM', 'usuarios'],
  respuesta: ['SELECT', 'nombre', ',', 'edad', 'FROM', 'usuarios']
},
{
  pregunta: 'Trae usuarios mayores de 25 años mostrando nombre y edad',
  piezas: ['SELECT', 'nombre', ',', 'edad', 'FROM', 'usuarios', 'WHERE', 'edad', '>', '25'],
  respuesta: ['SELECT', 'nombre', ',', 'edad', 'FROM', 'usuarios', 'WHERE', 'edad', '>', '25']
},
{
  pregunta: 'Trae todos los usuarios menores de 30 años',
  piezas: ['SELECT', '*', 'FROM', 'usuarios', 'WHERE', 'edad', '<', '30'],
  respuesta: ['SELECT', '*', 'FROM', 'usuarios', 'WHERE', 'edad', '<', '30']
},
{
  pregunta: 'Trae solo el nombre de usuarios mayores de 20 años',
  piezas: ['SELECT', 'nombre', 'FROM', 'usuarios', 'WHERE', 'edad', '>', '20'],
  respuesta: ['SELECT', 'nombre', 'FROM', 'usuarios', 'WHERE', 'edad', '>', '20']
},
{
  pregunta: 'Ordena los usuarios por edad de menor a mayor',
  piezas: ['SELECT', '*', 'FROM', 'usuarios', 'ORDER BY', 'edad', 'ASC'],
  respuesta: ['SELECT', '*', 'FROM', 'usuarios', 'ORDER BY', 'edad', 'ASC']
},
{
  pregunta: 'Ordena los usuarios por edad de mayor a menor',
  piezas: ['SELECT', '*', 'FROM', 'usuarios', 'ORDER BY', 'edad', 'DESC'],
  respuesta: ['SELECT', '*', 'FROM', 'usuarios', 'ORDER BY', 'edad', 'DESC']
},
{
  pregunta: 'Trae nombre y edad ordenados por edad descendente',
  piezas: ['SELECT', 'nombre', ',', 'edad', 'FROM', 'usuarios', 'ORDER BY', 'edad', 'DESC'],
  respuesta: ['SELECT', 'nombre', ',', 'edad', 'FROM', 'usuarios', 'ORDER BY', 'edad', 'DESC']
},
{
  pregunta: 'Trae usuarios entre 20 y 30 años',
  piezas: ['SELECT', '*', 'FROM', 'usuarios', 'WHERE', 'edad', '>', '20', 'AND', 'edad', '<', '30'],
  respuesta: ['SELECT', '*', 'FROM', 'usuarios', 'WHERE', 'edad', '>', '20', 'AND', 'edad', '<', '30']
},
{
  pregunta: 'Trae usuarios menores de 23 o mayores de 28',
  piezas: ['SELECT', '*', 'FROM', 'usuarios', 'WHERE', 'edad', '<', '23', 'OR', 'edad', '>', '28'],
  respuesta: ['SELECT', '*', 'FROM', 'usuarios', 'WHERE', 'edad', '<', '23', 'OR', 'edad', '>', '28']
},
{
  pregunta: 'Trae nombres de usuarios entre 20 y 30 años',
  piezas: ['SELECT', 'nombre', 'FROM', 'usuarios', 'WHERE', 'edad', '>', '20', 'AND', 'edad', '<', '30'],
  respuesta: ['SELECT', 'nombre', 'FROM', 'usuarios', 'WHERE', 'edad', '>', '20', 'AND', 'edad', '<', '30']
},
{
  pregunta: 'Trae usuarios cuyo nombre empieza por J',
  piezas: ['SELECT', '*', 'FROM', 'usuarios', 'WHERE', 'nombre', 'LIKE', "'J%'"],
  respuesta: ['SELECT', '*', 'FROM', 'usuarios', 'WHERE', 'nombre', 'LIKE', "'J%'"]
},
{
  pregunta: 'Trae usuarios cuyo nombre termina en a',
  piezas: ['SELECT', '*', 'FROM', 'usuarios', 'WHERE', 'nombre', 'LIKE', "'%a'"],
  respuesta: ['SELECT', '*', 'FROM', 'usuarios', 'WHERE', 'nombre', 'LIKE', "'%a'"]
},
{
  pregunta: 'Trae usuarios cuyo nombre contiene ar',
  piezas: ['SELECT', '*', 'FROM', 'usuarios', 'WHERE', 'nombre', 'LIKE', "'%ar%'"],
  respuesta: ['SELECT', '*', 'FROM', 'usuarios', 'WHERE', 'nombre', 'LIKE', "'%ar%'"]
},
{
  pregunta: 'Trae solo nombres que empiezan por J',
  piezas: ['SELECT', 'nombre', 'FROM', 'usuarios', 'WHERE', 'nombre', 'LIKE', "'J%'"],
  respuesta: ['SELECT', 'nombre', 'FROM', 'usuarios', 'WHERE', 'nombre', 'LIKE', "'J%'"]
},
{
  pregunta: 'Cuenta cuantos usuarios hay',
  piezas: ['SELECT', 'COUNT(*)', 'FROM', 'usuarios'],
  respuesta: ['SELECT', 'COUNT(*)', 'FROM', 'usuarios']
},
{
  pregunta: 'Calcula el promedio de edad de los usuarios',
  piezas: ['SELECT', 'AVG(edad)', 'FROM', 'usuarios'],
  respuesta: ['SELECT', 'AVG(edad)', 'FROM', 'usuarios']
},
{
  pregunta: 'Cuenta usuarios mayores de 20 años',
  piezas: ['SELECT', 'COUNT(*)', 'FROM', 'usuarios', 'WHERE', 'edad', '>', '20'],
  respuesta: ['SELECT', 'COUNT(*)', 'FROM', 'usuarios', 'WHERE', 'edad', '>', '20']
},
{
  pregunta: 'Promedio de edad de usuarios mayores de 20',
  piezas: ['SELECT', 'AVG(edad)', 'FROM', 'usuarios', 'WHERE', 'edad', '>', '20'],
  respuesta: ['SELECT', 'AVG(edad)', 'FROM', 'usuarios', 'WHERE', 'edad', '>', '20']
},
{
  pregunta: 'Trae nombre de usuario y su producto',
  piezas: ['SELECT','usuarios.nombre',',','pedidos.producto','FROM','usuarios','JOIN','pedidos','ON','usuarios.id', '=','pedidos.usuario_id'],
  respuesta: ['SELECT','usuarios.nombre',',','pedidos.producto', 'FROM','usuarios','JOIN','pedidos','ON','usuarios.id','=','pedidos.usuario_id']
},
{
  pregunta: 'Cuenta cuantos pedidos tiene cada usuario',
  piezas: [ 'SELECT', 'usuario_id', ',', 'COUNT(*)', 'FROM', 'pedidos', 'GROUP BY', 'usuario_id'],
  respuesta: [ 'SELECT', 'usuario_id', ',', 'COUNT(*)', 'FROM', 'pedidos', 'GROUP BY','usuario_id']
},
{
  pregunta: 'Muestra nombre del usuario y cantidad de pedidos',
  piezas: ['SELECT','usuarios.nombre',',','COUNT(*)', 'FROM','usuarios', 'JOIN','pedidos', 'ON','usuarios.id','=','pedidos.usuario_id', 'GROUP BY', 'usuarios.nombre'],
  respuesta: [ 'SELECT','usuarios.nombre',',', 'COUNT(*)','FROM', 'usuarios', 'JOIN','pedidos', 'ON', 'usuarios.id', '=','pedidos.usuario_id','GROUP BY', 'usuarios.nombre']
},
{
  pregunta: 'Muestra todos los usuarios y sus productos (aunque no tengan)',
  piezas: ['SELECT','usuarios.nombre',',','pedidos.producto','FROM','usuarios','LEFT JOIN','pedidos','ON','usuarios.id','=','pedidos.usuario_id'],
  respuesta: [ 'SELECT', 'usuarios.nombre', ',', 'pedidos.producto', 'FROM', 'usuarios', 'LEFT JOIN', 'pedidos', 'ON', 'usuarios.id', '=', 'pedidos.usuario_id']},
{
  pregunta: 'Muestra usuarios aunque no tengan pedidos (solo nombres)',
  piezas: ['SELECT','usuarios.nombre','FROM','usuarios','LEFT JOIN','pedidos','ON','usuarios.id','=','pedidos.usuario_id'],
  respuesta: ['SELECT','usuarios.nombre','FROM','usuarios','LEFT JOIN','pedidos','ON','usuarios.id','=','pedidos.usuario_id']
},
{
  pregunta: 'Muestra usuarios con más de 1 pedido',
  piezas: ['SELECT','usuario_id',',','COUNT(*)','FROM','pedidos','GROUP BY','usuario_id','HAVING','COUNT(*)','>','1'],
  respuesta: ['SELECT','usuario_id',',','COUNT(*)','FROM','pedidos','GROUP BY','usuario_id','HAVING','COUNT(*)','>','1']
},
{
  pregunta: 'Muestra nombres de usuarios con más de 1 pedido',
  piezas: ['SELECT','usuarios.nombre',',','COUNT(*)','FROM','usuarios','JOIN','pedidos','ON','usuarios.id','=','pedidos.usuario_id','GROUP BY','usuarios.nombre','HAVING','COUNT(*)','>','1'],
  respuesta: ['SELECT','usuarios.nombre',',','COUNT(*)','FROM','usuarios','JOIN','pedidos','ON','usuarios.id','=','pedidos.usuario_id','GROUP BY','usuarios.nombre','HAVING','COUNT(*)','>','1']
}
 ];

obtenerRanking() {
  return JSON.parse(localStorage.getItem('ranking') || '[]');
}
//guarda ranking
guardarRanking() {

  if (!this.nombreJugador) {
    
    return;
  }

  const ranking = JSON.parse(localStorage.getItem('ranking') || '[]');

  ranking.push({
    nombre: this.nombreJugador,
    puntos: this.puntajeTotal
  });

  ranking.sort((a: any, b: any) => b.puntos - a.puntos);

  localStorage.setItem('ranking', JSON.stringify(ranking.slice(0, 10)));

  // 🔥 reiniciar juego automáticamente
  setTimeout(() => {
    this.resetJuego();
    this.mostrarPantallaFinal = false;
  }, 800);
}
 



agregarPieza(pieza: string) {

  // 🔥 contar cuántas veces existe la pieza en el nivel
  const maxPermitidas = this.piezasDisponibles.filter(p => p === pieza).length;

  // 🔥 contar cuántas veces ya la usó el jugador
  const usadas = this.zonaConstruccion.filter(p => p === pieza).length;

  // 🚫 bloquear solo si se pasa del límite
  if (usadas >= maxPermitidas) {
    this.mensaje = '⚠️ Ya usaste todas las veces permitidas para esa pieza';
    this.tipoMensaje = 'error';
    return;
  }

  // ✅ agregar pieza
  this.zonaConstruccion.push(pieza);

  // limpiar feedback
  this.resetFeedback();
}
resetFeedback() {
  this.mostrarFeedbackVisual = false;
  this.mensaje = '';
  this.tipoMensaje = '';
}

eliminarPieza(index: number) {
  this.zonaConstruccion.splice(index, 1);
   this.resetFeedback();
}

moverIzquierda(i: number) {
  if (i > 0) {
    [this.zonaConstruccion[i], this.zonaConstruccion[i - 1]] =
    [this.zonaConstruccion[i - 1], this.zonaConstruccion[i]];
  }
   this.resetFeedback();
}

moverDerecha(i: number) {
  if (i < this.zonaConstruccion.length - 1) {
    [this.zonaConstruccion[i], this.zonaConstruccion[i + 1]] =
    [this.zonaConstruccion[i + 1], this.zonaConstruccion[i]];
  }
   this.resetFeedback();
}
  vidas: number=3;
  maxVidas: number = 5;
  nombreJugador: string = '';
  mostrarPantallaFinal: boolean = false;
  dragging = false;
  nivelActual = 0;

  piezasDisponibles: string[] = [];
  zonaConstruccion: string[] = [];

  datosUsuarios = [
    { id: 1, nombre: 'Juan', edad: 25 },
    { id: 2, nombre: 'Ana', edad: 30 },
    { id: 3, nombre: 'Carlos', edad: 22 }
  ];
  datosPedidos = [
  { id: 1, usuario_id: 1, producto: 'Laptop' },
  { id: 2, usuario_id: 2, producto: 'Mouse' },
  { id: 3, usuario_id: 1, producto: 'Teclado' }
];

 juegoTerminado: boolean = false;
 modoDebug: boolean = true;
 nivelesCompletados: boolean[] = [];
 intentos: number = 0;
 estrellas: number = 0;
 puntajeTotal: number = 0;

 mostrarFeedbackVisual: boolean = false;
 ranking: { nombre: string; puntos: number }[] = [];
 resultadoConsulta: any[] = [];

  // 🔥 NUEVO: controla si puede avanzar
  respuestaCorrectaFlag = false;

  ngOnInit() {
    
    const nivelGuardado = localStorage.getItem('nivel');
    const puntajeGuardado = localStorage.getItem('puntaje');
    const completados = localStorage.getItem('nivelesCompletados');

  if (completados) {
  this.nivelesCompletados = JSON.parse(completados);
}

if (nivelGuardado) {
  this.nivelActual = parseInt(nivelGuardado, 10);
}

if (puntajeGuardado) {
  this.puntajeTotal = parseInt(puntajeGuardado, 10);
}
 // 🔥 AQUÍ VA EL PASO 4 (IMPORTANTE)
  if (this.nivelesCompletados.length === 0) {
    this.nivelesCompletados = new Array(this.niveles.length).fill(false);
  }
    this.ranking = JSON.parse(localStorage.getItem('ranking') || '[]');
    this.cargarNivel();
  }

  cargarNivel() {
    const nivel = this.niveles[this.nivelActual];

    this.piezasDisponibles = [...nivel.piezas].sort(() => Math.random() - 0.5);
    this.zonaConstruccion = [];
    this.resultadoConsulta = [];
    this.respuestaCorrectaFlag = false;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
     this.resetFeedback();
  }
  mensaje: string = '';
tipoMensaje: 'success' | 'error' | '' = '';
generarFeedback(respuestaCorrecta: string[]): string {

  const usuarioArray = this.zonaConstruccion;
  const correctaArray = respuestaCorrecta;

  // 🔍 detectar piezas faltantes
  for (let pieza of correctaArray) {
    if (!usuarioArray.includes(pieza)) {
      return `Te falta: ${pieza}`;
    }
  }

  // 🔍 detectar piezas sobrantes
  for (let pieza of usuarioArray) {
    if (!correctaArray.includes(pieza)) {
      return `La pieza "${pieza}" no es necesaria`;
    }
  }

  // 🔍 detectar orden incorrecto
  for (let i = 0; i < usuarioArray.length; i++) {
    if (usuarioArray[i] !== correctaArray[i]) {
      return 'El orden no es correcto';
    }
  }

  return 'La consulta no es correcta';
}

validar() {

  this.intentos++;
  this.mostrarFeedbackVisual = true;

  const respuestaCorrecta = this.niveles[this.nivelActual].respuesta;

  // ✅ evaluar una sola vez
  const esCorrecto = this.zonaConstruccion.join(' ') === respuestaCorrecta.join(' ');

  // ❌ SI FALLA → pierde vida
  if (!esCorrecto) {

    this.vidas--;

    if (this.vidas <= 0) {
      this.mensaje = '💀 Sin vidas, intenta de nuevo';
      this.tipoMensaje = 'error';
      this.reiniciar();
      return;
    }

    this.mensaje = '❌ ' + this.generarFeedback(respuestaCorrecta);
    this.tipoMensaje = 'error';
    this.respuestaCorrectaFlag = false;

    return; // 👈 IMPORTANTE: corta ejecución
  }

  // ✅ SI ES CORRECTO
  if (!this.nivelesCompletados[this.nivelActual]) {

    if (this.intentos === 1) {
      this.estrellas = 3;
    } else if (this.intentos <= 3) {
      this.estrellas = 2;
    } else {
      this.estrellas = 1;
    }

    this.puntajeTotal += this.estrellas;
    // 🎁 BONUS: vida extra si lo hace perfecto
if (this.estrellas === 3 && this.vidas < this.maxVidas) {
  this.vidas++;
  this.mensaje = '🔥 ¡Perfecto! +1 vida';
} else {
  this.mensaje = '✅ ¡Correcto!';
}

    // marcar como completado
    this.nivelesCompletados[this.nivelActual] = true;

    // guardar progreso
    localStorage.setItem('puntaje', this.puntajeTotal.toString());
    localStorage.setItem('nivel', this.nivelActual.toString());
    localStorage.setItem('nivelesCompletados', JSON.stringify(this.nivelesCompletados));
  }

  this.mensaje = '✅ ¡Correcto!';
  this.tipoMensaje = 'success';
  this.respuestaCorrectaFlag = true;

  this.ejecutarConsulta();
}

ejecutarConsulta() {
  const consulta = this.zonaConstruccion.join(' ');

let resultado = [...this.datosUsuarios];
// 👉 LIKE
const likeMatch = consulta.match(/nombre LIKE '(.+)'/);

if (likeMatch) {
  const patron = likeMatch[1];

  if (patron.startsWith('%') && patron.endsWith('%')) {
    const texto = patron.replace(/%/g, '');
    resultado = resultado.filter(u => u.nombre.includes(texto));
  }
  else if (patron.startsWith('%')) {
    const texto = patron.replace('%', '');
    resultado = resultado.filter(u => u.nombre.endsWith(texto));
  }
  else if (patron.endsWith('%')) {
    const texto = patron.replace('%', '');
    resultado = resultado.filter(u => u.nombre.startsWith(texto));
  }
}

// 👉 AND
const andMatch = consulta.match(/edad > (\d+) AND edad < (\d+)/);
if (andMatch) {
  const min = parseInt(andMatch[1], 10);
  const max = parseInt(andMatch[2], 10);
  resultado = resultado.filter(u => u.edad > min && u.edad < max);
}

// 👉 OR
const orMatch = consulta.match(/edad < (\d+) OR edad > (\d+)/);
if (orMatch) {
  const menor = parseInt(orMatch[1], 10);
  const mayor = parseInt(orMatch[2], 10);
  resultado = resultado.filter(u => u.edad < menor || u.edad > mayor);
}

// 👉 filtro >
const mayor = consulta.match(/edad > (\d+)/);
if (mayor && !consulta.includes('AND')) {
  const edad = parseInt(mayor[1], 10);
  resultado = resultado.filter(u => u.edad > edad);
}

// 👉 filtro <
const menor = consulta.match(/edad < (\d+)/);
if (menor && !consulta.includes('AND')) {
  const edad = parseInt(menor[1], 10);
  resultado = resultado.filter(u => u.edad < edad);
}
// 👉 GROUP BY pedidos
if (consulta.includes('GROUP BY usuario_id')) {

  const conteo: any = {};

  for (let pedido of this.datosPedidos) {
    conteo[pedido.usuario_id] = (conteo[pedido.usuario_id] || 0) + 1;
  }

  this.resultadoConsulta = Object.keys(conteo).map(id => ({
    usuario_id: Number(id),
    total_pedidos: conteo[id]
  }));

  return;
}
// 👉 HAVING con pedidos
if (consulta.includes('GROUP BY usuario_id') && consulta.includes('HAVING COUNT(*) >')) {

  const conteo: any = {};

  for (let pedido of this.datosPedidos) {
    conteo[pedido.usuario_id] = (conteo[pedido.usuario_id] || 0) + 1;
  }

  const match = consulta.match(/HAVING COUNT\(\*\) > (\d+)/);
  const limite = match ? parseInt(match[1], 10) : 0;

  this.resultadoConsulta = Object.keys(conteo)
    .filter(id => conteo[id] > limite)
    .map(id => ({
      usuario_id: Number(id),
      total_pedidos: conteo[id]
    }));

  return;
}

// 👉 GROUP BY con JOIN
if (consulta.includes('GROUP BY usuarios.nombre')) {

  const conteo: any = {};

  for (let usuario of this.datosUsuarios) {
    for (let pedido of this.datosPedidos) {

      if (usuario.id === pedido.usuario_id) {
        conteo[usuario.nombre] = (conteo[usuario.nombre] || 0) + 1;
      }

    }
  }

  this.resultadoConsulta = Object.keys(conteo).map(nombre => ({
    nombre,
    total_pedidos: conteo[nombre]
  }));

  return;
}
if (consulta.includes('GROUP BY usuarios.nombre') && consulta.includes('HAVING COUNT(*) >')) {

  const conteo: any = {};

  for (let usuario of this.datosUsuarios) {
    for (let pedido of this.datosPedidos) {

      if (usuario.id === pedido.usuario_id) {
        conteo[usuario.nombre] = (conteo[usuario.nombre] || 0) + 1;
      }

    }
  }

  const match = consulta.match(/HAVING COUNT\(\*\) > (\d+)/);
  const limite = match ? parseInt(match[1], 10) : 0;

  this.resultadoConsulta = Object.keys(conteo)
    .filter(nombre => conteo[nombre] > limite)
    .map(nombre => ({
      nombre,
      total_pedidos: conteo[nombre]
    }));

  return;
}
// 👉 LEFT JOIN
if (consulta.includes('LEFT JOIN pedidos')) {

  const resultado = [];

  for (let usuario of this.datosUsuarios) {

    const pedidosUsuario = this.datosPedidos.filter(
      p => p.usuario_id === usuario.id
    );

  if (pedidosUsuario.length > 0) {
  for (let pedido of pedidosUsuario) {

    if (consulta.includes('pedidos.producto')) {
      resultado.push({
        nombre: usuario.nombre,
        producto: pedido.producto
      });
    } else {
      resultado.push({
        nombre: usuario.nombre
      });
    }

  }
} else {

  if (consulta.includes('pedidos.producto')) {
    resultado.push({
      nombre: usuario.nombre,
      producto: null
    });
  } else {
    resultado.push({
      nombre: usuario.nombre
    });
  }

}
  }

  this.resultadoConsulta = resultado;
  return;
}
// 👉 JOIN
if (consulta.includes('JOIN pedidos')) {

  const resultadoJoin = [];

  for (let usuario of this.datosUsuarios) {
    for (let pedido of this.datosPedidos) {

      if (usuario.id === pedido.usuario_id) {
        resultadoJoin.push({
          nombre: usuario.nombre,
          producto: pedido.producto
        });
      }

    }
  }

  this.resultadoConsulta = resultadoJoin;
  return;
}

// 👉 COUNT
if (consulta.includes('COUNT(*)')&& !consulta.includes('GROUP BY')) {
  this.resultadoConsulta = [{
    total: resultado.length
  }];
  return;
}

// 👉 AVG
if (consulta.includes('AVG(edad)')) {
  const suma = resultado.reduce((acc, u) => acc + u.edad, 0);
  const promedio = resultado.length ? (suma / resultado.length).toFixed(2) : 0;

  this.resultadoConsulta = [{
    promedio_edad: promedio
  }];
  return;
}

  // 👉 columnas
  // 👉 ORDER BY ASC
if (consulta.includes('ORDER BY edad ASC')) {
  resultado.sort((a, b) => a.edad - b.edad);
}

// 👉 ORDER BY DESC
if (consulta.includes('ORDER BY edad DESC')) {
  resultado.sort((a, b) => b.edad - a.edad);
}
  if (consulta.includes('nombre') && consulta.includes('edad')) {
    this.resultadoConsulta = resultado.map(u => ({
      nombre: u.nombre,
      edad: u.edad
    }));
  }
  else if (consulta.includes('nombre')) {
    this.resultadoConsulta = resultado.map(u => ({
      nombre: u.nombre
    }));
  }
  else {
    this.resultadoConsulta = resultado;
  }
}



  // 🔥 NUEVO: avanzar manualmente
  siguienteNivel() {
    
    
    this.intentos = 0;
    this.estrellas = 0;
    localStorage.setItem('nivel', this.nivelActual.toString());
    localStorage.setItem('puntaje', this.puntajeTotal.toString());

  if (this.nivelActual < this.niveles.length - 1) {

  this.nivelActual++;   // ✅ ahora se incrementa aquí (correcto)
  this.cargarNivel();

} else {
  if (this.juegoTerminado) return;

  this.juegoTerminado = true;
  this.mostrarPantallaFinal = true;

  this.guardarRanking();


  return;
}
  }
  //dectecta erorres de consulta
 esError(indice: number): boolean {

  // 🔥 si no está activado, NO marcar nada
  if (!this.mostrarFeedbackVisual) return false;

  const respuesta = this.niveles[this.nivelActual].respuesta;
  return this.zonaConstruccion[indice] !== respuesta[indice];
}
esCorrecto(indice: number): boolean {

  if (!this.mostrarFeedbackVisual) return false;

  const respuesta = this.niveles[this.nivelActual].respuesta;
  return this.zonaConstruccion[indice] === respuesta[indice];
}
resetJuego() {

  if (!confirm('¿Seguro que quieres reiniciar todo el progreso?')) return;

  localStorage.removeItem('nivel');
  localStorage.removeItem('puntaje');
  localStorage.removeItem('nivelesCompletados');

  this.nivelActual = 0;
  this.puntajeTotal = 0;
  this.nivelesCompletados = new Array(this.niveles.length).fill(false);

  this.cargarNivel();

  this.mensaje = '';
  this.tipoMensaje = '';
  this.juegoTerminado = false;
  this.mostrarPantallaFinal = false;
  this.nombreJugador = '';
}

  reiniciar() {

    this.cargarNivel();
    this.mensaje = '';
    this.tipoMensaje = '';
    this.mostrarFeedbackVisual = false;

    this.vidas = 3;
    this.intentos = 0;
    this.zonaConstruccion = [];
    this.mensaje = '';
    this.tipoMensaje = '';
    this.respuestaCorrectaFlag = false;

  }
}