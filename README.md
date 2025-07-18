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
>Los  componenetes puden comunicarse a travez de las propiedades de entrada y salida. Un componente padre puede pasar datos a un componente hijo mediante la vinculacion de propiedades de entrada, y un componente hijo puede emitir eventos que el componente padre puede escuchar a travez de propiedades de salida

## Servicios

## Dependencias

## Plantillas

## Diretivas

## Enrutamiento











