const express = require('express')
const routerCarrito = require('./microService/routes/carrito.route.js')
const routerProductos = require('./microService/routes/productos.route.js')


const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use( express.urlencoded({ extended: true }) )


app.use('/api/productos', routerProductos)
app.use('/api/carrito', routerCarrito)


app.listen(4000, err => {
    if (err) throw err
    console.log('Server running on port 4000')
})

