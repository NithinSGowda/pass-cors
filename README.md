# **imageproxy**
**A simple proxy to load CORS blocked images**  

Must be used in an express server environment

```console
$ npm install imageproxy
```

<br/>

## Server Side
```javascript

//Boilerplate
const express = require('express')
const app = express()


//Main
const imageproxy = require('imageproxy')
app.use('/imageproxy', imageproxy);  //You can customise the route name


//Boilerplate
app.listen(process.env.PORT||8080)


```
<br/>
<br/>

## Client Side
<br/>

Before 
```html
<img src="https://corsblockedimage.com/proxy.png">
```

After
```html
<img src="/imageproxy?url='https://corsblockedimage.com/proxy.png'">
```


<br/>
<br/>
Thats how easy it is to load a CORS blocked images on your frontend