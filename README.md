# Aprendiendo Angular

#### Comandos de incio

>Comando para iniciar un proyecto

```bash
npm new nuevo-proyecto
```
>Tambien hay que tener en consideracion que en las versiones mas recientes el modulo esta siendo descartado, y para hacer que siga siendo agregado a tu aplicacion hay que poner un argumento en el codigo

```bash
ng new nombre-de-la-aplicación --no-standalone
```

>Inicia la aplicacion 

```bash
npm start
```

#### Creacion de carpetas
>tsConfig.json ->> Esta es la configuracion recomendada de versiones de angular
>pacckage.json ->> Esto se fija NODE oara manejar los paquetes (configuracion, scripts, dependencias etc)
>Los demas json no se tocan y casi nunca se tocan(Menos angular.json(aqui podemos usar el mapeo de los archivs estaticos y estilos etc.))
>.gitignore ->> ignora archivos o carpetas que manejan datos sensibles
>node_modules ->> Aqui se crean todos los modulos que creamos al meter el comando para crear el proyecto

#### Carpetas importantes

> src ->> Informacion real de todoa la aplicacion angular
> style.css ->> Un archivo de estilos general
> main.ts ->> Archivo de typeScrip general
> index.html ->> Archivo de entrada aqui esta la magia donde se hace angular
> assets ->> aqui esta todo el contenido estatico que vamos a usar en la pagina web

#### Carpeta app
> Aqui en esta app tenemos varias palabras clave (routing, component y modulo)

### Conseptos

## Módulos

> Son una parte fundamentales de la arquitectura de la aplicacion, un modulo es un mecanismo de organizacion y encapsulacion que se utiliza para agrupar componentes, directivas, pipes(filtros), servicios y otros elementos relacionados en una unidad funcional coherente, los modulos ayudan a dividir una aplicacion en partes mas équeñas y manejables, lo que facilita el desarrollo y mantenibilidad y escalabilidad.
> * Unidades de organizacion.
> * Encapsulamiento de funcionalidades.
> * Divide la aplicacion
> * Importa/exporta elementos.
> * Registra Proveedores.
> * Evita conflictos de nombres.

> * Para crear un modulo de hace con 


```bash
ng generate module nombre-del-modulo

ng g m nombre-del-modulo

```
> * Estructura del modulo

```typeScript
//Importaciones arriba
import { NgModule } from '@angular/core';//Modulos propios de angular
import { CommonModule } from '@angular/common';//Modulos propios de angular
import { MiComponente } from './mi-componente.componente';


//Decorador con el arroba, configurar la aplicacion angular(Declaraciones, importaciones y provider, tambien contiene mas cosas al cabo de un aplicaciaon)
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MiComponente],
  providers: [],
  bootstrap: []
})
//Todo esto esta exportado
export class AppIndexJsModule { }
```

## Componentes

> Es un bloque fundamental de construccion para la creacion de interfaces de usaurio(UI) en un aplicacion web los componentes son responsables de definir como se ven y se comportan una parte de especifica de la interface de usuario de la aplicacion, cada componente representa un elemento visual o funcional e la pagina web, como un encabezado, un pie de pagina, un formulario, una lista de elementos, etc.
> * Bloques de UI.
> * Definen vistas y lógica.
> * Usan clases TypeScript.
> * Tienen plantillas HTML.
> * Son reactivos.
> * Altamente reutilizables.
> * Se encapsulan.
> * Jerarquia en la UI.

> * Para generar un componente es con

```bash
ng generate component nombre-del-modulo

ng g c nombre-del-modulo
```
> Un componente se compone de 4 archivos
> * componente.ts ->> esta el controlador puro
> * componente.html ->> Esta es la plantilla de lo que se ve
> * componente.css ->> vista en el html 
> * componente.spec.ts ->> Se haen las prueba y testing de el componente
> Estructura de el componente CONTROLLER

```typeScript
//nombre-del-componente.componente.ts
// importaciones
import { Component } from '@angular/core';

//decorador componente(dice  que es un componente) tipo de estructura
@Component({
  selector: 'app-app-componente',
  imports: [],
  templateUrl: './app-componente.html',
  styleUrl: './app-componente.css'
})
// AppComponente class definition
export class AppComponente implements OnInit {

  //Propiedades del componente
  title: string = 'Mi primera componente Angular';

  // Constructor del componente
  constructor() { }

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    // Initialization logic can go here
  }
}
```
> * Estructura del el componente pantilla HTML

```html
<!--Nombre del componente que esta estamos haciendo interpolacion con la variable declarada en el componente.ts-->
<div>
    <h1>{{title}}</h1>
    <p></p>
</div>
```
> * Estructura del el componente CSS
```css
/* Nombre del componente app-componente */
/* Estilos para el componente app-componente */
/* Puedes agregar estilos específicos para este componente aquí */
/* Ejemplo de estilo para un encabezado */
h1{
    color: blue;
    width: auto;
}
```

## Enlaces de datos

>Se refiere a la capacidad de conectar y sincronizar automaticamente los datos entre el modelo(que representa el estado de la aplicacion) y la vista (la interfaz de usuaurio que muestra esos datos) El enlace de datos es una caracteristica fundamental que permite que los cambios en el modelo se reflejen automaticamante en la vista y viceversa, sin necesidad de intervencion manual.
> * Conexion Automaica: sincroniza datos entre el modelo y la vista 
> * Unidireccional: Los cambios en el modelo se reflejan en la vista
> * Bidireccional: CAmbios en la vista actualizan el modelo(Por eejemplo, formularios)
> * Reactivo: Utiliza Observables para actualizaciones en el tiempo real
> * Simplifica Interaccion: Facilita la creacion de las aplicaciones interactivas.
> * Automatiza Actualizaciones: Cambios se reflejan sin intervencion manual.

## Metadata

> * Configuracion:Define como se comportan las partes de la aplicacion.
> * Decoradores: Se utiliza con decoradores como @Component, @NgModule, @Injectable
> * Personalizacion: Ajusta el comportamiento con propiedades clave.
> * Componente: Metadata para componentes, incluye plantilla y estilos.
> * Modulo: Configuracion de modulos, como declaraciones e importaciones
> * Servicio: Metadata para servicios, define su alcance y proveedores.
> * Rirectiva: Define metadata de directivas personalizadas, como selectores.

## Comunicacion entre componentes
> Los  componenetes puden comunicarse a travez de las propiedades de entrada y salida. Un componente padre puede pasar datos a un componente hijo mediante la vinculacion de propiedades de entrada, y un componente hijo puede emitir eventos que el componente padre puede escuchar a travez de propiedades de salida

**Comunicacion Input**

_*Compomponente de entrada hijo utilizando el decorador @Input()*_ 

```typeScript
//Componente hijo
@Input() datoEntrada: string;
```
_*El componente padre, puede vincular datos a la propiedad de entrada del componente hijo utilizando la sintaxis del corchete [] en el marcado del templete*_

```html
<!--Componente padre-->
<app-hijo [datoEntrada]='valorDesdePadre'></app-hijo>
```
*Cuando el valor de la propiedad en el componente padre cambia, Angular automaticamente actualiza la propiedad de entrada en el componente hijo, esto proporciona una forma eficiente y automaticamente de mantener sincronizados los datos entre componentes*

```typeScript
//Componente padre
valorDesdePadre = "Hola, mundo";
```
*En el componente hijo puedes utilizar la propiedad de entrada (datoEntrada en este caso) como cualquier otra propiedad local. puedes mostrar en el templete, realizar logica basada en ese valor, etc.*

```html
<!--Componente hijo templete-->
<p>{{datoEntrada}}</p>
```
**Comunicacion Output**

*Se utiliza @Output y EventEmitter para lograr la comunicacion entre un componente hijo y su componente padre, declaras una propiedad con @Output en el componente hijo y emites eventos con EventEmitter*

```typeScript
//Componente hijo

//Declaramos el evento
@Output() messageEvent = new EventEmitter<string>();
message: string = '';//El mesnaje vacio

//Funcion que hace que mandemos el mensaje
sendMenssage(){
  this.messageEvent.emit(this.message);
}
```
*Este archivo HTML contiene la interface de usuario del componente hijo. Incluye un input para que el usuario ingrese un mensaje y un boton para enviarlo, utiliza ngModel para vilcular el input con la propiedad message del componente TypeScript*

```html
<!--Componente hijo templete-->
<div>
  <label for="childInput" >Mensaje: </label>
  <input id="childInput" [(ngModel)]="mesagge"/>
  <button (click)="sendMessage()" >Enviar mensaje</button>
</div>
```

*El archivo TypeScript define el componente ParentComponent, que tiene una propiedad (receivedMessage) para almacenar mensahes recibidos del componente hijo. Incluye un metodo (reciveMessage) que actualiza esta propiedad cuando se emite el evento desde el componente hijo*

```javaScript
//Componente padre

//variable vacial del pare
receivedMessage: string = '';

//Actualiza lo que recibe el hijo y lo coloca en el mensaje vacio
reciveMessage(mesagge: string){
  this.receivedMessage = message;
}
```
*La plantilla HTML del componente padre incluye el componente hijo (<app-child>) y utiliza el evento de salida messageEvent para llamr al metodo recivedMessage cuando se emite un mensaje desde el componente hijo. Muestra el mensaje recibido en la interfaz del componente padre*

```html
<!--Componente padre templete-->
<div>
  <app-child (messageEvent)="receivedMessage($event)"><app-child>
  <p>Mensaje recibido en el padre: {{receivedMessage}}</p>
</div>
```
*Esto no va a andar por que en los modulo tienes que agregar FormModule*

```typeScript
 imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
```


## Servicios

> El servicio es una clase de TypeScript que se utiliza para organizar y compartir logica, datos o funcionalidades comunes entre diferentes componentes de una aplicacion, los servicios son una parte fundamental de la arquitectura de angular y proporcionan una forma de la centralizar y reutilizar la logica que no esta relacionada directamente con la interfaz de usuario

> * Reutilizacion: Logica compartida.
> * Separacion de precupaciones: divide logica y UI
> * Inyecccion de dependencias: Instancias porporcionadas
> * Centralizacion de datos: Almacena y gestiona datos compartidos
> * Comunicacion entre componentes: Facilita la comunicacion
> * Lifecycle independiente: No vilcula vistas
> * Resteabilidad: facil de probar

*Como se genera un servicio*
```bash
ng generate service nombre-del-servicio

ng g s nombre-del-servicio
```
*Estructura del servicio*
```typeScript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiServicio {

  costructor(){}

  //Metdos y logica del servicio
  
}

```
*Documentación del Servicio Familiar - Angular*
 *✅ Servicio: ServicioFamiliar*

**Ubicación:** `src/app/servicio-familiar.ts`  
**Decorador:** `@Injectable({ providedIn: 'root' })`

*Propósito*
>Es un servicio compartido entre componentes para mantener y manipular información de dos "hermanos": el mayor y el menor. Este servicio puede ser accedido desde cualquier componente de la aplicación, ya que está registrado en la raíz (`providedIn: 'root'`).

*Contenido*

*Propiedades*
- **hermanoGrande** y **hermanoPequeno**: guardan los nombres como strings.
- **Getters y setters**: permiten acceder y modificar los nombres de manera controlada.

*Métodos*
- **saludar(hermano: string)**: imprime un saludo en consola.
- **preguntarPorHijo()**: retorna un mensaje tipo pregunta.

> Este servicio permite compartir datos entre componentes sin que estén directamente conectados entre sí (programación desacoplada).

---

*🧩 Componente: Padre*

**Ubicación:** `src/app/padre/padre.ts`

*Propósito*
>Este componente representa al hermano mayor. Se comunica con el servicio para establecer su propio nombre (Juan) y acceder a los datos del hermano pequeño.

*Características clave*

>Inyección del servicio de dos maneras:
- Con `constructor(private _servicioFamiliar: ServicioFamiliar)`
- Con `inject(ServicioFamiliar)` directamente en una variable (alternativa moderna).

*En ngOnInit():*
- Se asigna el nombre del hermano mayor usando el setter del servicio.
- Se guarda ese nombre en una variable local del componente (`nombre`) para mostrarlo en la vista.

*Métodos del componente:*
- **saludar()**: usa el nombre del hermano pequeño desde el servicio para imprimir un saludo.
- **preguntar()**: muestra en consola una pregunta genérica del servicio.

> Este componente demuestra cómo acceder a métodos y propiedades de un servicio compartido desde un componente.

---

*🧩 Componente: Hermano*

**Ubicación:** `src/app/hermano/hermano.ts`

*Propósito*
>Este componente representa al hermano pequeño. Funciona igual que el componente Padre, pero desde el otro lado: asigna y obtiene el nombre del hermano menor y accede al nombre del mayor.

*Acciones realizadas en ngOnInit():*
- Se establece su propio nombre como 'Pedro'.
- Recupera su nombre desde el servicio para mostrarlo en la vista.

*Métodos:*
- **saludar()**: saluda al hermano mayor usando el servicio.
- **preguntar()**: igual que en el componente Padre, imprime una pregunta.

> Este componente complementa al Padre, usando el mismo servicio para compartir datos de manera bidireccional.

---

*🖼️ Plantilla HTML de ambos componentes*

En ambos casos, el HTML sigue esta estructura:

```html
<h1>{{ nombre }}</h1>
<button (click)="saludar()">Saludar</button>
<button (click)="preguntar()">Preguntar por hijo</button>
```

Muestra el nombre del hermano, y tiene dos botones para invocar los métodos definidos en el componente (los cuales usan el servicio).

---

*Conclusión general*

Se ha creado un servicio centralizado (`ServicioFamiliar`) que gestiona el estado compartido entre dos componentes (`Padre` y `Hermano`). Angular inyecta este servicio automáticamente por estar marcado como `providedIn: 'root'`, y se usa para comunicar datos entre componentes sin depender uno del otro directamente.

**Este patrón es clave en Angular para mantener aplicaciones organizadas, reutilizables y escalables.**


## Dependencias
>Son los recursos externos y modulos de odigo que un aplicacion necesita para funcionar correctamente, estos recursos pueden incluir bibliotecas externas, modulos de Angular, servicios personalizados, componentes y otros elementos que se utilizan en la aplicacion para realizar tareas especificas. Las dependencias de Angular se gestionan principalmente a travez del sistema de inyeccion de dependencias(DI), que es una caracteristica clave del framework

> * Recursos Externos: Bibliotecas y reursos de terceros.
> * Modulos de Angular: Unidades organizativas con funcionalidades
> * Servicios personalizados: Funcionalidad compartida
> * Inyeccion de Dependencias: Gestion automatica de instancias. 
> * Inyeccion de Contructores: Dependencias pasadas atravez de contructores.
> * Gestion de ciclo de vida: Control de creacion y destruccion.
> * Testeabilidad: Facilita pruebas ubitarias y de integracion.
> 
## Diretivas

>Son instrucciones en el marcado HTML que proporcionan funcionalidad adicional a los elementos DOM existentes o personalizan su comportamiento. Las directivas son un componente clave en la construccion de aplicaciones Web en Angular, ya que permiten extender y manipular el DOM de manera declarativa, lo que facilita la creacion de interfaces de usuario dinamicas e interactivas. Angular proporciona varias directivas incorporadas y tambien permiten la creacion de directivas personalizadas.

> * Intrucciones HTML: Extienden o personalizan elementos HTML.
> * Directivas Incorporadas: Ofrecen funcionalidad preedefinida.
> * Directivas Estructurales: Manipulan la estructura del DOM.
> * Directivas de Atributo: Cambian atributos y propiedades.
> * Directivas de eventos: Capturan y responden a eventos de usuario.
> * Directivas Personalizadas: Creadas para necesidades especificas.
> * Inyeccion de Dependencias: Acceso a servicios y datos.
> * Flexibilidad de Aplicacion: Se pueden aplicar como atributos o elementos

>Crear diretivas personalizadas

```bash
ng generate directive nombre-de-la-directiva

ng g d nombre-de-la-directiva
```
*Estructura de la direciva*

```typeScript
//Nombre del archivo: mi-directiva.ts
// Este archivo define una directiva personalizada en Angular
import { Directive } from '@angular/core';

@Directive({
  selector: '[appMiDirectiva]',
  standalone: false
})
export class MiDirectiva {

  // Esta directiva no tiene lógica específica por el momento
  // Podría ser utilizada para aplicar estilos o comportamientos a elementos HTML
  constructor() { }

}

```

*Llamar a una directiva*
```html
<div appMiDirectiva>
  Este es un elemento con mi directiva personalizada.
</div>
```
- Ejemplo de una directiva

```typeScript
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstiloHermanosDirective]',
  standalone: false
})
export class EstiloHermanosDirective {

  //Este directive aplica un estilo a los elementos hermanos del elemento al que se aplica
  constructor( private element: ElementRef) { 
    this.element.nativeElement.style.backgroundColor = 'green';// Cambia el color de fondo a verde
    this.element.nativeElement.style.color = 'blue';// Cambia el color del texto a azul
    this.element.nativeElement.style.fontSize = '30px';// Cambia el tamaño de la fuente a 30px
  }

}
```
## Pipes

>Son una caracteristica que permite formatear y ranformar datos en la vista de una aplicacion web de manera sencilla y legible. Los pipes son funciones que toman un valor de entrada (como una cadena de texto, un numero o un objeto) y lo procesan para proporcionar una representacion modificada o formateada en la interfaz de usuario. Los pipes se utilizan en las plantillas HTML de angular y se aplican utilizando el simbolo de barra certical ||. Alguno ejemplos comunes de uso de pipes incluyen el formato de fechas, numeros, monedas, texto en mayusculas o minusculas entre otros. Angular proporciona una serie de pipes integrados, com DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, DecimalPipe, ParcentPipe, entre otros. Ademas, tambien puedes crear tus propios pipes personalizados cuando necesites realizar transformaciones especificas.

- Los pipes se generan asi:

```bash

ng generate pipe nombre-del-pipe

ng g p nombre-del-pipe

```
- Como se ve un pipe:

```typeScript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipePersonalizado',
  standalone: false
})
export class MiPipePersonalizadoPipe implements PipeTransform {

  //transform es el método que se ejecuta cuando se usa el pipe
  //Recibe el valor que se le pasa al pipe y retorna el valor transformado
  //En este caso, convierte el valor a mayúsculas
  //Si el valor es undefined, retorna una cadena vacía
  transform(valor: string | undefined): unknown {
    return valor?.toUpperCase() || '';// Convertir a mayúsculas o retornar cadena vacía si es undefined
  }

}

```
- Como se aplica
  
```html
<p>{{texto | mipipe }}</p>
```
## Enrutamiento

> * El enrutamiento en Angular se refiere a la capacidad de navegar entre diferentes componentes o vistas de una aplicacion web sin recargar la pagina completa. Permite crear aplicaciones de una solo pagina (SPA) donde los cambios en la URL desencadenan la carga de diferentes componentes, proporcionando asi una experiencia de usuario mas fluida y rapída.
> Se crean los componentes: (home, contact, products, products-details)
> * se agregan a app-routing-module.ts (Especificamente a )

```typeScript
//Define las rutas de la aplicación
const routes: Routes = [
{path: 'home', component: Home},// Ruta para la página de inicio
{path: 'products', component: Products},// Ruta para la página de productos
{path: 'products/:category/:category2/:productId', component: ProductDetails},// Ruta para los detalles de un producto específico (Route Parameters)
{path: 'contact', component: Contact}, // Ruta para la página de contacto
{path: '**', redirectTo: '/home', pathMatch: 'full'} // Redirige cualquier ruta desconocida a la página de inicio
];
```
- En Angular para poder agregar parametros de algo se los define en el html que en este caso de pone el var en la aplicacion principal que serie app.html
  
```html
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Hector Code</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup"> 
      <div class="navbar-nav">
        <!-- Aqui se crean las rutas que queremos manipular, tambien pudimos crear un componente para el nav -->
        <a class="nav-link active" aria-current="page" routerLink="home">Home</a> 
        <a class="nav-link active" routerLink="products">Products</a>
        <a class="nav-link active" routerLink="contact">Contact</a>
      </div>
    </div>
  </div>
</nav>

<router-outlet></router-outlet>
```
> * Este caso para poder entrar a detalles de un producto tenemos que reedirigir el producto a product-details que esto se hace en el especificamente en el products con redireccion a component: ProductsDetails, lo cual los parapetros de RouterParameter



```typeScript
//Define las rutas de la aplicación
const routes: Routes = [
{path: 'home', component: Home},// Ruta para la página de inicio
{path: 'products', component: Products},// Ruta para la página de productos
{path: 'products/:category/:category2/:productId', component: ProductDetails},// Ruta para los detalles de un producto específico (Route Parameters)
{path: 'contact', component: Contact}, // Ruta para la página de contacto
{path: '**', redirectTo: '/home', pathMatch: 'full'} // Redirige cualquier ruta desconocida a la página de inicio
];
```

> * Estos parametros son incializados en el poductsDetails y son 

# 🔄 Lo que estás haciendo en `ProductDetails.ts`:

```ts
this._route.params.subscribe(params => {
  this.producto = params['productId'];
  this.color = params['category'];
  this.col = params['category2'];
})
```

✅ Aquí estás **inicializando las variables del componente** (`producto`, `color`, `col`) con los valores **que Angular extrae de la URL** al entrar a la ruta `products/:category/:category2/:productId`.

## 🌐 ¿Cómo llegan esos valores?

1. En tu página de productos (`products.component.html`), usas `[routerLink]` para navegar:

```html
<button [routerLink]="['/products','blue','white','Lavandina']">Detalle</button>
```

2. Angular convierte eso en esta URL:

```
/products/blue/white/Lavandina
```

3. Esa URL coincide con la ruta:

```ts
{ path: 'products/:category/:category2/:productId', component: ProductDetails }
```

4. Angular carga el componente `ProductDetails` y, dentro de él, `ActivatedRoute` extrae:

```ts
params['category'] = 'blue'
params['category2'] = 'white'
params['productId'] = 'Lavandina'
```

5. Tú igualas esos valores a las variables del componente:

```ts
this.color = 'blue';
this.col = 'white';
this.producto = 'Lavandina';
```

## 🖼 ¿Y en el HTML de `product-details.component.html`?

Usas esas variables así:

```html
<p [ngStyle]="{'background-color' : color, 'color' : col}">
  Este es el detalle de el producto: {{ producto }}
</p>
```

✅ Solo estás **usando las variables que ya igualaste en el** `.ts` con los valores que llegaron por la URL.

## Estructuras de control
> Las estructuras de control son las herramientas que te permiten manipular el flujo de ejecucion en tu aplicacion.
- (ngif) Permite mostrar u ocultar un elemento en funcion de una exprecion booleana
```html
<div *ngIf="mostrarElemento" >
  Contenido visible si mostrarElemento es true
</div>
```
-(ngFor) Utilizado para iterar sobre una lista y renderizar elementos repetitivos

```html
<div>
  <li *ngFor="let item of listaItem" >
    {{ item }}
  </li>
</div>
```
- (ngSwitch) Muestra un bloque de contenido segun el valor de una expresion

```html
<div [ngSwitch]="opcion">
  <p *ngSwitchCase="opcion1">Contenido para opcion 1</p>
  <p *ngSwitchCase="opcion2">Contenido para opcion 2</p>
  <p *ngSwitchDefault>Contenido por defecto</p>
</div>
```

- (ngClass) Permite cambiar dinamicamente las clases de un elemento.

```html
<div [ngClass]="{'clase1': condicion1, 'clase2': condicion2}">
    <!--Contenido con clases dinamicas-->
</div>
```

- (ngStyle) Permite cambiar dinamicamente los estilos de un elemento

```html
<div [ngStyle]="{'color' : color, 'font-size' : tamaño}">
  <!--Contenido con los estilos dinamicos-->
</div>
```

- (ngContainer) Es una estructura de control que no afecta al DOM. Se utiliza para agrupar elementos sin agregar nodos adicionales al arbol DOM

```html
<ng-container *ngIf="condition">
  <!-- Contenido que no afecta al DOM directamente -->
</ng-container>
```

- Otras esructuras (ngTemplate, ngPlural, ngComponentOutlet) hay que investigarlas

> * Creamos un mock para poder mostrar el bucle ngFor y mostrar los productos en iteracion (Mostrarlos de forma dinamica)

```typeScript
// products.mock.ts son datos de ejemplo para simular una lista de productos
export const productsList: Products[] = [
    {id: 1, name: 'Lavandina', price: 10, description: 'Botella de 1L de lavandina'},
    {id: 2, name: 'Detergente', price: 5, description: 'Dura 120 lavados'},
    {id: 3, name: 'Limpia Vidrios', price: 7, description: ' Tus vidrios brillarán como nuevos'},
    {id: 4, name: 'Quita Grasa', price: 8 , description: 'Cocina limpia y sin grasa'},
    {id: 5, name: 'Perfumina', price: 2, description: 'Olor a campo fresco todo el día'},
];

export interface Products{
    id: number | string;
    name: string;
    price: number;
    description: string;
};
```
- Lo importamos a la ts principal

```typeScript
import { Component } from '@angular/core';
import { productsList } from "../products/products.mock";

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  // productsList es una lista de productos que se importan desde un archivo mock
  productsList = productsList;
}
```
- Modificamos el html de products ya que tenemos las variables en el .ts para poder importarlos
```html
<h1>Productos de Limpieza</h1>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Producto</th>
      <th scope="col">Precio</th>
      <th scope="col">Detalle</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let product of productsList">
      <th scope="row">{{product.id}}</th>
      <td>{{product.name | uppercase}}</td>
      <td>{{product.price | currency}}</td>
      <button type="button" class="btn btn-outline-primary" [routerLink]="['/products', product.name, product.price]">Detalle</button>
    </tr>
   
  </tbody>
</table>
```
- si queda pero para poder tarer por el id a un producto hay que modificar lo siguiente en productsDetails

```typeScript

//Comentamos lo anterior y ahora si podemos usar los valores que tiene elmock
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products, productsList } from '../products/products.mock';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit{

  // Inyecta ActivatedRoute para acceder a los parámetros de la ruta
  constructor( private _route: ActivatedRoute) { }

  /* producto: string = '';
  color: string = '';
  col: string = '';
  price: number = 0; */

  product?: Products;

  productList: Products[] = productsList;

  ngOnInit(): void {
      this._route.params.subscribe(params =>{
        /* this.producto = params['productId'];
        this.color = params['category'];
        this.col = params['category2'];
        this.price = params['price']; */

        this.product = this.productList.find(product => product.id == params['productId']);
      })
  }

}
```

- Tambien hay que modificar el html y quedaria de esta forma para que tenga una mejor vista

```html
<p>Producto: {{product?.name}} </p>
<p>Precio: {{product?.price | currency}}</p>
<p>Descripción: {{product?.description}}</p>
```

- No olvidar borrar las rutas que teniamos por defecto aqui, por si tenemos algun tema en futuros proyectos

```typeScript
  import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import { ProductDetails } from './product-details/product-details';
import { Contact } from './contact/contact';

//Define las rutas de la aplicación
const routes: Routes = [
{path: 'home', component: Home},// Ruta para la página de inicio
{path: 'products', component: Products},// Ruta para la página de productos
{path: 'products/:productId', component: ProductDetails},// Ruta para los detalles de un producto específico(VALORES BORRADOS DE COLOR O PRECIO)
{path: 'contact', component: Contact}, // Ruta para la página de contacto
{path: '**', redirectTo: '/home', pathMatch: 'full'} // Redirige cualquier ruta desconocida a la página de inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```
- Tamnien podemos hacer que no aparesca un atributo modificando en el mock,(En este caso borrando descripcion) podemos decirle que si no hay descripcion que no la ponga, y es con esto

```typeScript
// products.mock.ts son datos de ejemplo para simular una lista de productos
export const productsList: Products[] = [
    {id: 1, name: 'Lavandina', price: 10, description: 'Botella de 1L de lavandina'},
    {id: 2, name: 'Detergente', price: 5, description: 'Dura 120 lavados'},
    {id: 3, name: 'Limpia Vidrios', price: 7, description: ' Tus vidrios brillarán como nuevos'},
    {id: 4, name: 'Quita Grasa', price: 8 },//Eliminacion de descripcion
    {id: 5, name: 'Perfumina', price: 2, description: 'Olor a campo fresco todo el día'},
];

export interface Products{
    id: number | string;
    name: string;
    price: number;
    description?: string;//Le ponemos el signo(?) para que pueda omitir si tiene o no
};
```
- Despues en el html Usamos otra Estructura de control para hacer que no aparesca el texto (Descripcion:)

```html
<p>Producto: {{product?.name}} </p>
<p>Precio: {{product?.price | currency}}</p>
<!-- Aqui ponemos la estructura de control com el parametro product?.description y si la descripcion no tiene un valor o texto, simplemente no lo pone-->
<p *ngIf="product?.description" >Descripción: {{product?.description}}</p>
```
- Ahora vamos a hacer un looding para que no cargue en tiempo real y tarde un segundo imedio y esto se hace en el product-details

```typeScript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products, productsList } from '../products/products.mock';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit{

  // Inyecta ActivatedRoute para acceder a los parámetros de la ruta
  constructor( private _route: ActivatedRoute) { }


  product?: Products;
  loading: boolean = true;

  productList: Products[] = productsList;

  ngOnInit(): void {
    // Simula un retraso para la carga de datos
      setTimeout(() => {
      // Obtiene el parámetro 'productId' de la ruta activa
      // y busca el producto correspondiente en la lista de productos
        this._route.params.subscribe(params =>{
        this.product = this.productList.find(product => product.id == params['productId']);
        this.loading = false;// Simula un retraso para la carga de datos
      })
      }, 1500);// Simula un retraso de 1.5 segundos
  }

}

```

- Y ahora en el html tenemos que contenerlo en un ng-container donde el loading este con un ngIf donde este en true no aparesca, al mismo tiempo otro ng-container donde aparesca un texto de carga, y cuando pase el segundo imedio se ponga en false, y paresca la informacion y desaparesca la otra

```html
<!--Muestra los detalles de un producto específico -->
<ng-container *ngIf="!loading">
    <p>Producto: {{product?.name}} </p>
    <p>Precio: {{product?.price | currency}}</p>
    <p *ngIf="product?.description" >Descripción: {{product?.description}}</p>
</ng-container>

<!-- Muestra un mensaje de carga mientras se obtienen los datos del producto -->
<ng-container *ngIf="loading">
    <p>Cargando producto...</p>
</ng-container>

```

- Tambien en ngClass se ponen un parametro en este caso para los precios mayor a 5

```html
<h1>Productos de Limpieza</h1>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Producto</th>
      <th scope="col">Precio</th>
      <th scope="col">Detalle</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let product of productsList">
      <th scope="row">{{product.id}}</th>
      <td>{{product.name | uppercase}}</td>
      <td [ngClass]="{'red-color': product.price > 5}">{{product.price | currency}}</td><!--Aqui ponesmos la calse con el nombre de la clase y una ciondicional para que se aplique-->
      <button type="button" class="btn btn-outline-primary" [routerLink]="['/products', product.id]">Detalle</button>
    </tr>
   
  </tbody>
</table>

```
- Ahora viene el ngStyle que este se puede definir en una variable vacia en el product-details y darle logica, y solo pasar la variable en el html

```typeScript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products, productsList } from '../products/products.mock';
import { timeEnd } from 'console';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css']
})
export class ProductDetails implements OnInit{

  constructor( private _route: ActivatedRoute) { }


 
  product?: Products;
  productList: Products[] = productsList;
  loading: boolean = true;
  color: string = 'blue'; //Definimos la variable vacia o con un color por defecto

  
    ngOnInit(): void {
        this._route.params.subscribe(params =>{
        this.product = this.productList.find(product => product.id == params['productId']);
        this.color = this.product?.price as number > 5 ? 'red' : 'blue'; // Cambia el color según el precio(Aqui es donde la declaramos al precio)
        this.loading = false;
        
      });
    }

}
```
- Y en el html solo la declaramos con ngStyle
  
```html
<ng-container *ngIf="!loading" >
    <h1>Producto: {{product?.name}} </h1>
    <!-- Aqui solo declaramos con ngStyle-->
    <h2 [ngStyle]="{'color': color}">Precio: {{product?.price | currency}}</h2>
    <h3 *ngIf="product?.description" >Descripción: {{product?.description}}</h3>
</ng-container>

<ng-container *ngIf="loading" ><i style="color:blue">Cargando Informacion.......</i></ng-container>

```
## Formularios

> Son una parte esencial para interactuar con el usuario y recopilar datos. Hay dos tipos principales de formularios en angular: los basados en plantillas (template-driver) y los reactivos (reactive)

- Imporat FormsModule para formularios de plantilla
- Formularios basados en plantillas (Template-diver)
> Los formularios basados en planatillas utilizan la sintaxis del template del HTML para contruir y validar formularios, La directiva ngForm e utiliza para crear un formulario y ngModel para enlazar datos vidireccionalmente.
> Angular gestiona el estado y la validacion automaticamente.
> Se utiliza la propiedad ngModel.Valid para verificar si un campo es valido
> Para los formularios reactivos hay que importar ReactiveFormsModule

- Formularios reactivos
> Los formularios reactivos de contruyen en el componente utilizando el servicio FormBuilder
> Los controles se definen explicitamente y se vinculan al formulario.

- Imporatacion de FormsModule y RaeactiveFormsModule
```typeScript
import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Products } from './products/products';
import { Contact } from './contact/contact';
import { ProductDetails } from './product-details/product-details';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Home,
    Products,
    Contact,
    ProductDetails
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,//Importacion para los formularios de tipo plantilla
    ReactiveFormsModule// Importacion para los formularios de tipo reactivo
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }

```

- En la paltilla de contanto podemos importar una de boostrap y empezar a modificar con el ngForm y agregando una funcion que se llame enviar, tabien le agregamos valores para que sean guardados en el .ts

```html
<div class="container">
    <!-- Formulario de contacto -->
     <!-- Este formulario utiliza ngModel para enlazar los datos del formulario con el modelo de datos -->
    <form *myform="ngForm" (ngSubmit)="enviar()" >
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <input type="email" class="form-control" id="name" aria-describedby="emailHelp" [([(ngModel)]="user.name")] required>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" [([(ngModel)]="user.email")] required>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>
```

- Te puede dar error en la pagina enviando, entonces tenemos que ponerle este parametro:
  
```html
<div class="container">
    <form #myFormulario="ngForm" (ngSubmit)="enviar()" >
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <input type="email" class="form-control" id="name"  [(ngModel)]="usuario.name" required [ngModelOptions]="{standalone: true}" ><!-- Con standalone deja de hacer el reclamo y nos deja seguir haciendo lo que estabams haciendo-->
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" [(ngModel)]="usuario.email" required [ngModelOptions]="{standalone: true}" >
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>
```

- En los ReactiveFormsModule se tienen que crear diferentes metodos de declaracion en el contact.ts
- Declaracion de formulario contacto con FormGroup
- Inicializamos un contructor para inciar el formulario reactivo con FormBuilder
- 
```typeScript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  //Decalaracion de un formulario reactivo con FormGroup (Sirve para agrupar controles)
  formularioContanto: FormGroup;

  //Reactive form inicializacion usa FormBuilder
  constructor( private form: FormBuilder) {
    this.formularioContanto = this.form.group({// crea un FormGroup que contiene varios FormControl Cada control (como nombre y email) se define como un array:['valor inicial', validaciones].
      nombre: ['', Validators.required],//Campo requerido y va dentro de un array porque es un FormControl y puede tener validaciones
      email: ['', [Validators.required, Validators.email]]//Campo requerido y con validacion de email es una array porque es un FormControl y puede tener validaciones
    })
  }

  //From Reactive 
  enviar() {
    console.log(this.formularioContanto)
    alert(`Gracias ${this.formularioContanto.value.nombre}, hemos recibido tu mensaje.`);
  }

}

```
- Y en el HTML podemos modificar todos estos detalles de esta manera, cambia un poco al otro, pero es por que estamos integrando un formulario reactivo

```html
<div class="container">
    <!-- Usamos Reactive Forms  con formGroup y declaramos la variable que creamos,la funcion de enviar sigue siendo igual -->
    <form  [formGroup]="formularioContanto" (ngSubmit)="enviar()" >
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <!--Decalramos el FormControlName con el campo 'nombre'-->
            <input type="email" class="form-control" id="name" formControlName="nombre" >
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <!--Declaramos el formControlName con el campo 'email'-->
            <input type="email" class="form-control" id="email" formControlName="email" >
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>

```
- Para el manejo de errores se tiene que tener esto en el .ts ya que manejamos los errores que nos muestra por consola

```typeScript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

 
  formularioContanto: FormGroup;

  
  constructor( private form: FormBuilder) {
    this.formularioContanto = this.form.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  /**
 * Verifica si un campo específico del formulario tiene un tipo determinado de error
 * y si ya fue tocado por el usuario (para evitar mostrar errores desde el inicio).
 * 
 * @param controlName - El nombre del campo dentro del formulario (ej: 'email', 'nombre').
 * @param errorType - El tipo de error que se quiere verificar (ej: 'required', 'email').
 * @returns `true` si el campo tiene el error especificado y ya fue tocado, `false` en caso contrario.
 */

  hasErrors(controlName: string, errorType: string){
    return this.formularioContanto.get(controlName)?.hasError(errorType) && this.formularioContanto.get(controlName)?.touched
  }




  enviar() {
    console.log(this.formularioContanto)
    alert(`Gracias ${this.formularioContanto.value.nombre}, hemos recibido tu mensaje.`);
  }


}


```

- Y en el HTML va de esta manera con el ngIf, creamos la funcion hasErrors con la direccion de formControlName 'nombre como primer parametro y el otro como el 'required' y que su otro del email sera required pero solo le ponemos 'email'

```html
<div class="container">
  <form [formGroup]="formularioContanto" (ngSubmit)="enviar()">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Name</label>
      <input type="text" class="form-control" id="name" formControlName="nombre">
      
      <!-- ⚠️ Muestra este mensaje si el campo 'nombre' fue tocado y tiene el error 'required' -->
      <div class="text-danger" *ngIf="hasErrors('nombre','required')">Campo Requerido</div>
    </div>

    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" formControlName="email">
      
      <!-- ⚠️ Muestra este mensaje si el campo 'email' fue tocado y tiene el error de formato -->
      <div class="text-danger" *ngIf="hasErrors('email','email')">Email inválido</div>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>

```

## Plantillas













