# DataScience

## Uso de PYTHON

PYTHON es el lenguaje de programación elegido para automatizar todo este proceso dentro de una aplicacion la cúal accede mediante el uso de APIS de Google Cloud mas especifiacamente a las APIS de Google Drive y Google Sheets esto para poder contar con acceso a los datos recolectados mediante el formulario, de esta manera los capturamos y les damos uso dentro del programa creado en PTYHON permitiendole a este manejar los datos y lograr generar la grafica que nos enseña como se encuentran cada uno de los usuarios en cada area, a su vez genera otra grafica en donde vemos el promedio general de todas las respuestas esto con el fin de conocer las "Tendencias" de cada area por asi decirlo, ya por ultimo nos genera una tabla del promedio en si es la misma data del grafica mencioando anteriormente a diferencia de que esta se muestra en una tabla para tener mas clara la información.


## Aviso

Para el uso correcto de este programa, se necesitan las credenciales de al cuenta de Google Cloud, las cúales por motivos de seguridad no son compartidas en este repositorio, para obtenerlas debe contactarse con los dueños del proyecto o crear tu propio formulario y hacer el proceso de descarga del archivo JSON con las credenciales. **El archivo JSON debe ir en la carpeta raiz del proyecto**

## Instrucciones de instalacion con Docker
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>

docker build -t aroundlife-app .

docker run -it --rm aroundlife-app
