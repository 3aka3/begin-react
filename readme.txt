дополнительно см
https://medium.com/@danilosilvadev/webpack-react-redux-babel-config-in-10-minutes-4ad8c4abc8b2
1)
For dev build: 
>npm run build:dev
And for prod mode:
>npm run build:dist
2)
Add this at the body in index.html inside dist/build:
  <div id="root"></div>

в итоге
>npm start