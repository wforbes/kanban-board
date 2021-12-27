# kanban-board

Following the (somewhat aged) Vue.js tutorial found on auth0.com to build a kanban board.
Found here: [https://auth0.com/blog/vuejs-kanban-board-the-development-process/](https://auth0.com/blog/vuejs-kanban-board-the-development-process/)

For simplicity, I used ```vue create kanban-board``` to begin the project, but tried to stick to all other points outlined in the tutorial. This resulted in having to use the vue.config.js in order to register the tutorials suggested service worker library and disregard the registerServiceWorker feature of the 'vue create' template. This diverged from the tutorial where it modifies it's webpack config file. This implementation also differs where the static assets used for the PWA portion of the tutorial is located in the root directory, but here it's located in the public folder to simplify the vue.config changes needed.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
