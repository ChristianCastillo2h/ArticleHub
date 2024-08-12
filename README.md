Article Hub <Backend>
---------------------
npm install express

Express, es un framework de aplicaciones web de código abierto para Node.js. 
Se utiliza para crear aplicaciones web rápidas, flexibles y escalables.
Proporciona una forma sencilla de crear servidores web y manejar solicitudes HTTP.

Características clave de Express.js son:

Manejo de solicitudes y respuestas: proporciona una forma sencilla de manejar solicitudes HTTP y enviar respuestas.
Rutas: permite definir rutas para manejar solicitudes específicas. Las rutas se pueden definir utilizando métodos como get, post, put, delete, etc.
Middleware: admite middleware, que son funciones que se ejecutan entre la solicitud y la respuesta. Los middleware pueden ser utilizados para autenticar usuarios, validar datos, etc.
Plantillas: admite plantillas para renderizar vistas. Algunas de las plantillas más populares son Jade, EJS y Handlebars.
Compatibilidad con bases de datos: se puede utilizar con una variedad de bases de datos, incluyendo MongoDB, MySQL, PostgreSQL, etc.
 --------------------
npm install dotenv

Dotenv es una biblioteca de Node.js que permite cargar variables de entorno desde un archivo .env en el directorio raíz de un proyecto. 
Esto permite a los desarrolladores mantener las variables de entorno separadas del código y evitar exponer información sensible, como claves de API o credenciales de bases de datos.

Un archivo .env es un archivo de texto que contiene pares de clave-valor, donde cada línea tiene el formato VARIABLE=valor. Por ejemplo:

DB_HOST=localhost
DB_USER=myuser
DB_PASSWORD=mypassword
API_KEY=miapikey

Dotenv carga estas variables de entorno en el objeto process.env de Node.js, de modo que puedan ser accesadas en el código como process.env.DB_HOST, process.env.DB_USER, etc.
--------------------
npm install cors

¿Qué es CORS?

CORS (Cross-Origin Resource Sharing) es un mecanismo que permite a los navegadores web realizar solicitudes a servidores web que se encuentran en un dominio diferente al del sitio web que se está visitando.
Esto es necesario porque, por motivos de seguridad, los navegadores web no permiten que un sitio web realice solicitudes a otro sitio web que se encuentra en un dominio diferente.

¿Qué hace el paquete cors?

El paquete cors es un middleware que se puede utilizar en aplicaciones de Node.js para habilitar CORS. Esto significa que, cuando se utiliza el paquete cors, se permite a los navegadores web realizar solicitudes a la aplicación de Node.js desde cualquier dominio.

---------------------

JSON Web Token (JWT) es un estándar abierto para la creación de tokens de acceso que se pueden utilizar para autenticar y autorizar a usuarios en aplicaciones web y móviles. Un token JWT es un string compacto y seguro que contiene información sobre el usuario y su sesión, y que se puede verificar y validar en el servidor.

Un token JWT típico consta de tres partes:

Header: contiene el algoritmo de firma y el tipo de token (JWT).
Payload: contiene la información del usuario y la sesión, como el ID de usuario, el nombre de usuario, el correo electrónico, etc.
Firma: es la firma digital del token, que se genera utilizando un algoritmo de firma como HMAC SHA256 o RSA.
El proceso de creación de un token JWT es el siguiente:

El servidor crea un objeto JSON que contiene la información del usuario y la sesión.
El servidor codifica el objeto JSON en Base64.
El servidor crea una firma digital del objeto codificado utilizando un algoritmo de firma.
El servidor concatena el header, el payload y la firma para crear el token JWT.
El proceso de verificación de un token JWT es el siguiente:

El cliente envía el token JWT al servidor en la solicitud.
El servidor verifica la firma digital del token utilizando el algoritmo de firma correspondiente.
Si la firma es válida, el servidor decodifica el payload y verifica la información del usuario y la sesión.
Si la información es válida, el servidor autoriza al usuario a acceder a los recursos solicitados.
--------------------------
Beared Token 

¿Qué es el token beared?

Un token de portador es un tipo de credencial de seguridad que se utiliza para acceder a las API de forma segura. Es un token que funciona como prueba de autenticación y permite al portador (la entidad que presenta el token) acceder a recursos o puntos finales protegidos. En otras palabras, es una forma de autenticar y autorizar las solicitudes de API.

------------------------
Angular CLI (Command Line Interface) es una herramienta de línea de comandos que se utiliza para crear, desarrollar y mantener aplicaciones Angular de manera eficiente. Fue creada por el equipo de Angular para simplificar el proceso de desarrollo y mejorar la productividad de los desarrolladores.

Con Angular CLI, puedes realizar tareas como:

Crear un nuevo proyecto Angular: La CLI te permite crear un nuevo proyecto Angular con una estructura de directorios y archivos básica, lista para empezar a desarrollar.
Generar componentes y servicios: Puedes generar componentes y servicios automáticamente con la CLI, lo que te ahorra tiempo y reduce la cantidad de código que debes escribir.
Compilar y ejecutar la aplicación: La CLI te permite compilar y ejecutar tu aplicación Angular en un servidor de desarrollo local, lo que te permite probar y depurar tu aplicación de manera rápida.
Realizar pruebas unitarias y de integración: La CLI incluye herramientas para realizar pruebas unitarias y de integración, lo que te ayuda a asegurarte de que tu aplicación sea estable y funcione correctamente.
Actualizar dependencias y librerías: La CLI te permite actualizar las dependencias y librerías de tu proyecto de manera automática, lo que te mantiene al día con las últimas versiones y mejoras.
Crear y gestionar módulos: La CLI te permite crear y gestionar módulos en tu aplicación Angular, lo que te ayuda a organizar y estructurar tu código de manera efectiva.
Generar documentación: La CLI te permite generar documentación para tu aplicación Angular, lo que te ayuda a documentar tus componentes y servicios de manera automática.
Algunos de los comandos más comunes de Angular CLI son:


ng new: Crea un nuevo proyecto Angular.
ng generate: Genera un componente, servicio o módulo.
ng serve: Compila y ejecuta la aplicación en un servidor de desarrollo local.
ng test: Realiza pruebas unitarias y de integración.
ng update: Actualiza dependencias y librerías.
ng build: Compila la aplicación para producción.
-------------------------
Angular Material

ng add @angular/material -> para instalarlo 

Angular Material es una biblioteca de componentes de interfaz de usuario (UI) para Angular, que proporciona una serie de componentes y herramientas para crear aplicaciones web con un diseño moderno y atractivo. Fue creado por el equipo de Angular en colaboración con Google, y se basa en el lenguaje de diseño de Material Design de Google.

Angular Material ofrece una variedad de componentes y herramientas para crear interfaces de usuario, incluyendo:

Componentes de interfaz de usuario: Angular Material proporciona una serie de componentes de interfaz de usuario, como botones, formularios, tablas, gráficos, etc.
Diseño responsivo: Los componentes de Angular Material están diseñados para ser responsivos, lo que significa que se adaptan automáticamente a diferentes tamaños de pantalla y dispositivos.
----------------------------
Angular Flex Layout

npm i -s @angular/flex-layout -> para instalarlo

---------------------------
Ng-ui-loader es una biblioteca de terceros popular para Angular que ofrece una forma personalizable y flexible de mostrar indicadores de carga, indicadores y barras de progreso en su aplicación. No es parte de la biblioteca oficial de Angular Material, pero se suele usar junto con Angular Material para ofrecer un conjunto más completo de componentes de interfaz de usuario.

Ng-ui-loader ofrece una variedad de funciones, entre las que se incluyen:

Indicadores de carga personalizables : puedes elegir entre una variedad de indicadores de carga prediseñados, como indicadores giratorios, barras de progreso y más.

---------------------------
npm install quill@1.x @types/quill@1.x ngx-quill

ngx-quill es un módulo Angular para el editor de texto enriquecido Quill. Proporciona un conjunto de componentes que le permiten integrar fácilmente el editor Quill en su aplicación Angular. Quill es un editor WYSIWYG gratuito y de código abierto creado para la web moderna. Con su arquitectura modular y API expresiva, es completamente personalizable para adaptarse a cualquier necesidad. ngx-quill es un contenedor de Quill, lo que facilita su uso en aplicaciones Angular.
