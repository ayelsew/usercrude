# usercrude

Avaliação de conhecimentos VueJS/HTML/CSS

## Configurando firebase/firestore
Renomeie o arquivo db-exemple.js e configure as credências do firebase

```
mv src/db-exemple.js  src/db.js
```

## Point the name of domain firebase to localhost (For use with SSL without stay deploing firebase) 
### On Linux
Add the follow line on hosts   
`127.0.0.1  <domain of your appfirebase>`   
```
sudo nano /ete/hosts
```
Edit `vue.config.js` add your firebase domain on "public" propertie of devServer

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
