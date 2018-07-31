# Proyecto Final Common Core
## Preámbulo
El registro de visitantes en una empresa en América Latina es un proceso tedioso y manual. Lo común es que una persona esté en la recepción tomando nota - a veces con papel y lápiz - de cada visitante. Por razones de seguridad, usualmente piden a cada visitante dejar una identificación. Si vivimos en la era digital, ¿por qué seguimos registrando visitantes como si fuera 1985? ¿Qué tal si sustituimos a la persona en recepción por una tablet? ¿Qué tal si en lugar de pedir una identificación, tomamos una foto? 

## Introducción
En este proyecto la empresa de coworking donde opera Laboratoria en tu ciudad ha decidido contratarte a ti y a dos compañeras para reinventar su proceso de registro de visitantes. Con la entrada de [WeWork](https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwilrK_T5KjcAhWCj7MKHexzAEgYABAAGgJxbg&ohost=www.google.cl&cid=CAASE-RoAxXTp1Cd0ErxEHpPSGuF4Hk&sig=AOD64_38ykNPf0QRtI9n4CFtpQpth-MrNQ&q=&ved=0ahUKEwjswKvT5KjcAhVkU98KHUcYCeMQ0QwIJA&adurl=) al mercado latinoamericano, tienen mucha más competencia y necesitan invertir en tecnología para mejorar su servicio; el registro de visitantes es un primer acercamiento. Te dan la referencia de [Envoy](https://envoy.com/) en EEUU (un servicio que ofrece un sistema digital de registro de visitantes) y ustedes tienen que desarrollar una versión mínima viable (ver anexo I). 

## Proceso realización de la aplicación
Nuestro proceso para realizar la aplicación de registro de usuario. Fue investigando quién es nuestro cliente, y nuestros usuarios.
Nuestro cliente es iF Blanco, y para conocer más las necesidades de ellos se entrevistó a la administradora que es Pilar Pardo. Ella nos contó sobre lo que deseaba ver en el registro de los visitantes que ingresan a iF. También entrevistamos a la recepcionistas de iF y el portero, recepcionista de Mustakis, al encargado de la cafetería.
Para ver los insight de las entrevistas e investigación pueden ingresar a la carpeta UX en donde encontrarán  documentos, videos y fotografías.

### Nos enfocamos en 2 usuarios para el desarrollo de la aplicación:
**El usuario administrador**, y usuario visitante.
De acuerdo a las entrevistas que realizamos al usuario administrador en este caso Pilar, principalmente deseaba saber quienes de los que ingresaban a Laboratoria eran clientes que podían arrendar espacios u oficinas en iF. Tener más datos de ellos, ya sea el correo personal para poder ofrecer sus servicios. Las estadísticas que cuantas personas visitaron iF, de que comunas vienen, de qué empresa son, etc.

**El usuario visitante** es el que principalmente usará la aplicación y se registrará a través de un ipad o tablet. 
Para ir analizando y viendo el proceso de lo que quería el usuario ver en el registro, y que no le parecía. Realizamos test de usabilidad con el prototipo de alta fidelidad realizado en proto.io ([ver el prototipo de la aplicación](https://pr.to/4Y7UNG/)) La razón por la que usamos proto es que la interacción y las funciones son mas reales, como si estuviera hecho en código.
Puedes ver los videos acá [Test usabilidad con usuarios](https://drive.google.com/open?id=1f-Yp7WvS2NjzWAUNPdZqa3uKQBrjpMq7)

De acuerdo a estos test de usabilidad, fuimos desarrollando y cambiando ciertas páginas y botones del diseño. La estructura de los botones  **ir y volver** usados en la cabecera de cada página, nos mostró que algunos usuarios entrarán en confusión. Ya que la mirada usualmente se dirige hacia abajo. Por ello decidimos cambiarlos al final de cada página.
También nos arrojó que los usuarios deseaban ver más información, sobre lo que tenía que ir haciendo en cada paso. 
También  nos dieron feedback, de que les gustaría ver en la aplicación, y que le eliminarían de esta. Lo que nos dijeron es que eliminarían algunos pasos del registro, para que no sea tan largo.

De acuerdo a lo investigado y testeado con el prototipo las páginas que se eliminaron fueron:

![Pantalla2](/src/css/UX/capturaprototipopantalla(soy)) 


## Anexo I: Construyendo un MVP
Una modelo mental común para representar el desarrollo de productos es visualizarlo como una pirámide: el producto que construyes consiste en una serie de funcionalidades que le dan beneficios al usuario, los cuales le generan valor. El detalles está en que no todas las funcionalidades que creas le agregan la misma cantidad de valor al usuario. Es más, muchas funcionalidades le agregan cero valor. Son cosas que creemos que generan valor, pero que no terminan haciéndolo (recuerda que vivimos en un mundo incierto, donde no podemos predecir). Por lo tanto, al definir tu producto mínimo viable (MVP), tu misión es crear las mínimas funcionalidades que maximicen el valor que entregas. Menos es más ;)
![image](https://user-images.githubusercontent.com/7809496/43321432-d253abe8-9179-11e8-8d08-44a44db6ed0a.png)

