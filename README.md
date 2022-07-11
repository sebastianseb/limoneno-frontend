![limoneno](https://github.com/LemontechSA/limoneno/blob/master/frontend/src/assets/png/limoneno.png?raw=true)

***LET IA training tool***

## Comienzo

Limoneno es una herramienta para asistir el proceso de entrenamiento de modelos de machine learning, especificamente relacionado al uso de CNN ***(Convolutional neural networks)***, diseñada para efectuar y gestionar un trabajo colaborativo a la hora de abordar proyectos de entrenamiento y clasificacion de modelos.

Limoneno permite la gestión de usuarios y proyectos de forma que puede utilizarse para asignar cargas de trabajo y medir el avance de un pool de personas dedicadas al trabajo de clasificación.

Asi mismo integra la posibilidad de efectuar clasificación multiesquema, permitiendo en la misma identificación de un elemento del datatset, integrar mas de un tipo de identificación para agilizar y disminuir el tiempo en la generación de los elementos necesarios para el entrenamiento de un modelo IA.

## Dependencias

- Install Nodejs and NPM
```bash
# In Debian based linux
sudo apt-get install nodejs npm
# In RHEL based linux
sudo yum install nodejs
# In mac
brew install node
```
- Install yarn
```bash
# In linux
sudo npm install yarn -g
# In mac
brew install yarn
```

## Entorno de desarrollo

La app está construida con una arquitectura Cliente - Servidor, separando de esta forma la lógica de backend y frontend.

### Frontend

Para el entorno de frontend fue utilizado React, usando como lenguaje Typescript y el proyecto base CRA. Para comenzar  desplegando la app en frontend es necesario efectuar los siguientes pasos.

```bash
# Install yarn
cd frontend
yarn start
```

Posterior a esto la app debe estar desplegada y lista para efectuar labores de desarrollo. Para ingresar debes utilizar los siguiente datos:

```
email: admin@lemontech.com
password: 12345678
```

**Recuerda agregar información extra al README, si efectuaste una modificación al entorno**

## Deploy

La app esta pensada para ser desplegada a traves de un proceso de integración continua utilizando AWS Code Pipeline

TO DO
