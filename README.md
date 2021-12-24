# kanban-board

Following the (somewhat aged) Vue.js tutorial found on auth0.com to build a kanban board.
Found here: [https://auth0.com/blog/vuejs-kanban-board-the-development-process/](https://auth0.com/blog/vuejs-kanban-board-the-development-process/)

For simplicity, I used ```vue create kanban-board``` to begin the project, but tried to stick to all other points outlined in the tutorial

Since I'm picky, I've left comment notes of where things are done a little wrong... but overall, it's a good tutorial at first glance. For instance:
- The items object doesn't seem structured well... why an object with an array inside? why not just an array?
- You shouldn't modify the vuex state with a mutation directly from a component, use getters instead
- The mapState done in Backlog.vue could be simplified by using mapGetters.. if getters were used


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
