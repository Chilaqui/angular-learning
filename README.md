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



## Plantillas













