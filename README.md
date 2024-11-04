# vue-apex

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Application Architecture

- This application uses Vue 3 along with TypeScript
- Starting point for the application is index.html which uses main.ts as the initial file for vue js
- All the sample data and css related files stored in `src/assets`
- All the routes stored under `src/router/index.ts`
- `App.vue` is the main vue file
- `registerPlugins` under `src/plugins/index.ts` is where we are registering all the plugins used in the app
- We are using `pinia` for state management
- We are also using `vuetify` and `primevue` for components
- All the state variables can be stored under `src/stores`
- All the views are created under `src/views`

### Assumptions made

```
The data will be coming directly from backend in a json format, which can be directly consumed by the frontend to show the charts
```

### Performance Choices:

> Ques: What strategies would you use in Vue.js or React to manage state and prevent unnecessary re-renders?

> Ans: We are using pinia for state management which will help in managing state and as to prevent unnecessary re-renders there are techniques like using computed properties, lazy loading of components i.e. splitting components into chunks rather than creating a one big file, we can also use v-memo to update only the selected component skipping the ones that are unaffected by that changes in the component.

---

> Ques: Discuss strategies to minimize API calls and manage state effectively

> Ans: We can create persisted states which will help in maintaining the data in the state instead of calling the APIs again.

---

> Ques: How would you handle large datasets in the frontend without compromising user experience?

> Ans: We can use pagination to call get the data only when needed, we can also add lazy loading and use server side filters, sorting, grouping etc.

### Live Data Implementation:

> Ques: Describe how you would implement real-time data updates from the backend to the frontend.

> Ans: This can be achieved by either using a socket or by calling some backend service at certain time interval
