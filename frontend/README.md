# Frontend

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Architecture

The architecture of the application is based on the following principles:

- **Modularity**: The application is divided into modules, each module is responsible for a specific functionality.
- **Lazy loading**: The modules are loaded only when they are needed.
- **Components**: Each module is composed of components, each component is responsible for a specific functionality.
- **Services**: Each module is composed of services, each service is responsible for a specific functionality.
- **Models**: Each module is composed of models, each model is responsible for a specific functionality.
- **State**: Each module is composed of state, each state is responsible for a specific functionality.
- **Config**: Each module is composed of config, each config is responsible for a specific functionality.
- **Environments**: Each module is composed of environments, each environment is responsible for a specific functionality.
- **Routing**: Each module is composed of routing, each routing is responsible for a specific functionality.

```bash
src/
├── app/
│ ├── components/
│ ├── services/
│ ├── models/
│ ├── state/
│ ├── config/
│ └── environments/
└── ...
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

https://stackoverflow.com/questions/71718228/how-to-resolve-tailwind-and-bootstrap-conflicts-in-an-angular-project
https://www.npmjs.com/package/@fortawesome/angular-fontawesome

## Header component

```
src/
|-- app/
|   |-- header/
|   |   |-- header.component.html
|   |   |-- header.component.ts
|   |   |-- logo/
|   |   |   |-- logo.component.html
|   |   |   |-- logo.component.ts
|   |   |-- navigation/
|   |   |   |-- navigation.component.html
|   |   |   |-- navigation.component.ts
|   |   |-- mobile-menu/
|   |   |   |-- mobile-menu.component.html
|   |   |   |-- mobile-menu.component.ts
|   |   |-- dropdown-menu/
|   |   |   |-- dropdown-menu.component.html
|   |   |   |-- dropdown-menu.component.ts
|   |-- app.module.ts
|-- ...
```
