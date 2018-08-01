# iF Visitor
![alt text](https://github.com/lyalatina/scl-2018-01-ProyectoFinalCore/blob/master/docs/src/img/ifVisitor-logo.png)


## Preámbulo
El registro de visitantes en una empresa en América Latina es un proceso tedioso y manual. Lo común es que una persona esté en la recepción tomando nota - a veces con papel y lápiz - de cada visitante. Por razones de seguridad, usualmente piden a cada visitante dejar una identificación. Si vivimos en la era digital, ¿por qué seguimos registrando visitantes como si fuera 1985? ¿Qué tal si sustituimos a la persona en recepción por una tablet? ¿Qué tal si en lugar de pedir una identificación, tomamos una foto? 

## Introducción

En este proyecto la empresa IF blanco coworking ha decidido reinventar su proceso de registro de visitantes. El problema es que su actual proceso de registro es en una planilla excel, pero cuando no está el notebook es en lápiz y papel. Este proceso de registro no da mucha información y seguridad sobre quienes son los que visitan iF Blanco, si son clientes (arriendo espacio) o visitantes.  
Hasta el momento el proceso de comunicación directo con la entrada, y el encargado de cada departamento de emprendimiento, es a través del grupo de Whatsapp llamado "Control de ingreso". 
La administración quiere incorporar otros métodos, además de tener el control de ingreso por Whatsapp, pueda implementarse algun aviso ya sea por correo, o notificación a los encargados de emprendimiento.
Nuestra solución a eso es modernizar y diseñar un proceso de registro que sea intuitivo, de valor a la empresa iF y seguridad.
Las funciones importantes que se implementarán serán, el registro de los visitantes, y el ingreso de visitantes frecuentes. La notificación que recibirá el encargado o encargados de emprendimiento a su celular.


### Proceso realización de la aplicación
Nuestro proceso para realizar la aplicación de registro de usuario. Fue investigando quién es nuestro cliente, y nuestros usuarios.
Nuestro cliente es iF Blanco, y para conocer más las necesidades de ellos se entrevistó a la administradora que es Pilar Pardo. Ella nos contó sobre lo que deseaba ver en el registro de los visitantes que ingresan a iF. También entrevistamos a la recepcionistas de iF y el portero, recepcionista de Mustakis, al encargado de la cafetería.
Para ver los insight de las entrevistas e investigación pueden ingresar a la carpeta UX en donde encontrarán  documentos, videos y fotografías.

### Nos enfocamos en 2 usuarios para el desarrollo de la aplicación:
**El usuario administrador**, y usuario visitante.
De acuerdo a las entrevistas que realizamos al usuario administrador en este caso Pilar, principalmente deseaba saber quienes de los que ingresaban a Laboratoria eran clientes que podían arrendar espacios u oficinas en iF. Tener más datos de ellos, ya sea el correo personal para poder ofrecer sus servicios. Las estadísticas que cuantas personas visitaron iF, de que comunas vienen, de qué empresa son, etc.

**El usuario visitante** es el que principalmente usará la aplicación y se registrará a través de un ipad o tablet. 

## **Diseño de Interfaz**
En el proceso de diseño hicimos un estudio de referencia a organizaciones tales como Envoy, Welkio, 
Para el diseño de interfaz primeramente se usó balsamiq para el prototipo de baja fidelidad [ver el prototipo de la aplicación](https://balsamiq.cloud/svqidzb/pgd5wr0)
Para ir analizando y viendo el proceso de lo que quería el usuario ver en el registro, y que no le parecía. Realizamos test de usabilidad con el prototipo de alta fidelidad realizado en proto.io ([ver el prototipo de la aplicación](https://pr.to/4Y7UNG/)) La razón por la que usamos proto es que la interacción y las funciones son mas reales, como si estuviera hecho en código.
Puedes ver los videos acá [Test usabilidad con usuarios](https://drive.google.com/open?id=1f-Yp7WvS2NjzWAUNPdZqa3uKQBrjpMq7)

De acuerdo a estos test de usabilidad, fuimos desarrollando y cambiando ciertas páginas y botones del diseño. La estructura de los botones  **ir y volver** usados en la cabecera de cada página, nos mostró que algunos usuarios entrarán en confusión. Ya que la mirada usualmente se dirige hacia abajo. Por ello decidimos cambiarlos al final de cada página.
También nos arrojó que los usuarios deseaban ver más información, sobre lo que tenía que ir haciendo en cada paso. 
También  nos dieron feedback, de que les gustaría ver en la aplicación, y que le eliminarían de esta. Lo que nos dijeron es que eliminarían algunos pasos del registro, para que no sea tan largo.
El feedback que nos dio la administradora con respecto a la aplicación, fue que al preguntar sobre si le gustaría que a los visitantes les sacaran una fotografía para identificarlos, dijo que no le parecía útil. Lo que más nos dejó en claro fue que, al momento de pedir los datos, recalcaramos la seguridad de estos. 
Para ello nuestro punto de diferencia es que al momento en que el visitante ingrese el rut, se pueda verificar que realmente es un rut que existe. Esto se realiza a través de la api rut.

Las pantallas de "soy" empresa o visita, la eliminamos porque despues en otra pantalla le pregunta al visitante el motivo por el cual va a iF.

![alt text](https://github.com/lyalatina/scl-2018-01-ProyectoFinalCore/blob/master/docs/src/UX/captura%20pantalla%20prototipo/captura%20prototipo%20pantalla%20soy.png)

En cuanto a diseño los botones estaban arriba, de acuerdo al feedback decidimos cambiarlos hacia abajo. (imagen diseño antes del feedback)

![alt text](https://github.com/lyalatina/scl-2018-01-ProyectoFinalCore/blob/master/docs/src/UX/captura%20pantalla%20prototipo/captura%20%20pantalla%20(registro).png)

En cuanto a la toma de fotografías, también decidimos eliminar esa pantalla porque no le daba valor a Pilar (administradora), en cuanto a lo que ella necesita de iF y su seguridad. A algunos usuarios tampoco les gusta que les tomen fotografías al momento de registrarse en el lugar.

![alt text](https://github.com/lyalatina/scl-2018-01-ProyectoFinalCore/blob/master/docs/src/UX/captura%20pantalla%20prototipo/captura%20pantalla%20(foto).png)





La paleta de colores utilizada fue la de iF Blanco. Colores usados Naranja, Negro, Blanco, Gris.


## **Planificación del proyecto**
Para la planificación del proyecto usamos Issues, Milestones y Trello.
Ver [Trello](https://trello.com/b/hkzR7h81/registro-de-visitantes)


## Anexo I: Construyendo un MVP
Una modelo mental común para representar el desarrollo de productos es visualizarlo como una pirámide: el producto que construyes consiste en una serie de funcionalidades que le dan beneficios al usuario, los cuales le generan valor. El detalles está en que no todas las funcionalidades que creas le agregan la misma cantidad de valor al usuario. Es más, muchas funcionalidades le agregan cero valor. Son cosas que creemos que generan valor, pero que no terminan haciéndolo (recuerda que vivimos en un mundo incierto, donde no podemos predecir). Por lo tanto, al definir tu producto mínimo viable (MVP), tu misión es crear las mínimas funcionalidades que maximicen el valor que entregas. Menos es más ;)
![image](https://user-images.githubusercontent.com/7809496/43321432-d253abe8-9179-11e8-8d08-44a44db6ed0a.png)

