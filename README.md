# React Clock

This is a fork of this clock app that includes deployments for Azure Kubernetes Service and Docker.


### App Service Deployment Method:

In Azure cloud shell:

```
git clone https://github.com/jaydestro/react-clock-basic.git

az group create  --name $NAME --location eastus

az network vnet create --name $nameVNET --resource-group $NAME  --subnet-name default

az acr create --resource-group $NAME--name $NAMEacr --sku Basic --admin-enabled true

az acr build  --registry $NAMEacr --image react-clock-basic:v1 .
```

Go to portal in Azure, create a new app service, select your resource group, pick linux, pick docker container, create a new service plan, select dev/test - click Docker

Drop down source, select Azure Container Registry.  Click the registry you created above then select the image name and version.

Click Review and create.  


A basic clock that displays the current date and time

Go **[here](http://react-clock-basic.drminnaar.me/)** for live demo.

Component Diagram
![](https://user-images.githubusercontent.com/33935506/34461456-35fcbde6-ee33-11e7-908e-bc7c74b8bbd2.png)

This project also demonstrates:

* a typcial React project layout structure
* babel setup and configuration
* webpack setup and configuration
* eslint setup and configuration
* SCSS setup and configuration

**Screenshots:**

... | ...
--- | ---
![](https://user-images.githubusercontent.com/33935506/33753477-2fa5b182-dbf0-11e7-8608-c69a8739b09e.PNG) | ![](https://user-images.githubusercontent.com/33935506/33753478-2fd901ae-dbf0-11e7-8d7f-c9ee49145c04.PNG)

---

## Developed With

* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [React](https://reactjs.org/) - A javascript library for building user interfaces
* [Babel](https://babeljs.io/) - A transpiler for javascript
* [Webpack](https://webpack.js.org/) - A module bundler
* [SCSS](http://sass-lang.com/) - A css metalanguage
* [Bootstrap 4](https://getbootstrap.com/) - Bootstrap is an open source toolkit for developing with HTML, CSS, and JS
* [Surge]: https://surge.sh/

---

## Related Projects

* [react-starter]

  A basic template that consists of the essential elements that are required to start building a React application

* [react-clicker]

  A basic React app that allows one to increase, decrease, or reset a counter

* [react-timer-basic]

  A basic timer that will start a countdown based on an input of time in seconds

* [react-timer-advanced]

   A basic countdown timer that offers an advanced UI experience

* [react-masterminds]

  A basic game of guessing a number with varying degrees of difficulty

* [react-movie-cards]

  A basic application that displays a list of movies as a list of cards

* [react-calculator-standard]

  A calculator that provides the essential arithmetic operations, an expression builder, and a complete history of all expressions

* [react-bitcoin-monitor]

  An app that monitors changes in the Bitcoin Price Index (BPI)

* [react-weather-standard]

  A weather application that displays the current weather, daily forecasts, and hourly forecasts based on your current geolocation

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The following software is required to be installed on your system:

* Node 12.x
* Npm 3.x

Type the following commands in the terminal to verify your node and npm versions

```bash
node -v
npm -v
```

### Install

Follow the following steps to get development environment running.

* Clone _'react-clock-basic'_ repository from GitHub

  ```bash
  git clone https://github.com/drminnaar/react-clock-basic.git
  ```

   _OR USING SSH_

  ```bash
  git clone git@github.com:drminnaar/react-clock-basic.git
  ```

* Install node modules

   ```bash
   cd react-clock-basic
   npm install
   npm dedupe
   ```

### Build

* Build application

  This command will also run ESLint as part of build process.

  ```bash
  npm run build
  ```

* Build application and start watching for changes

  This command will also run ESLint as part of build process.

  ```bash
  npm run build:watch
  ```

### Run ESlint

* Lint project using ESLint

  ```bash
  npm run lint
  ```

* Lint project using ESLint, and autofix

  ```bash
  npm run lint:fix
  ```

### Run

* Run start

  This will run the _'serve'_ npm task

  ```bash
  npm start
  ```

* Run webpack dev server

  ```bash
  npm run serve:dev
  ```

* Alternatively run live-server (simple development http server with live reload capability)

  ```bash
  npm run serve
  ```

---

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/drminnaar/react-clock-basic/tags).

## Authors

* **Douglas Minnaar** - *Initial work* - [drminnaar](https://github.com/drminnaar)

[react-starter]: https://github.com/drminnaar/react-starter
[react-clicker]: https://github.com/drminnaar/react-clicker
[react-clock-basic]: https://github.com/drminnaar/react-clock-basic
[react-timer-basic]: https://github.com/drminnaar/react-timer-basic
[react-timer-advanced]: https://github.com/drminnaar/react-timer-advanced
[react-masterminds]: https://github.com/drminnaar/react-masterminds
[react-movie-cards]: https://github.com/drminnaar/react-movie-cards
[react-calculator-standard]: https://github.com/drminnaar/react-calculator-standard
[react-bitcoin-monitor]: https://github.com/drminnaar/react-bitcoin-monitor
[react-weather-standard]: https://github.com/drminnaar/react-weather-standard
