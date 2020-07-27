# SportsStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

<br>

ng new SportsStore --routing false --style css --skip-git --skip-tests
<br>
npm install bootstrap@4.4.1
<br>
npm install @fortawesome/fontawesome-free@5.12.1
<br>
npm install --save-dev json-server@0.16.0
<br>
npm install --save-dev jsonwebtoken@8.5.1
<br>
run moq serve: npm run json
<br>

angular.json:
...
styles": [
"src/styles.css",
"node_modules/bootstrap/dist/css/bootstrap.min.css",
"node_modules/@fortawesome/fontawesome-free/css/all.min.css"
<br>
package.json:
...
"e2e": "ng e2e",
"json": "json-server data.js -p 3500 -m authMiddleware.js"
<br>
ng add @angular/pwa
<br>
npm install --save-dev express@4.17.1
npm install --save-dev connect-history-api-fallback@1.6.0
npm install --save-dev https@1.0.0
<br>
node server.js
<br>
docker build . -t sportsstore -f Dockerfile
<br>
docker run -p 80:80 -p 443:443 sportsstore
