const express = require('express')
const { getProducts, postProduct, putProduct, deleteProduct, deleteAllProducts, errorRoute } = require('../controllers/productos.controller.js')
// const { getProducts, postProduct, putProduct, deleteProduct, deleteAllProducts, errorRoute } = require('../controllers/productoFirebase.js')
// const { getProducts, postProduct, putProduct, deleteProduct, deleteAllProducts, errorRoute } = require('../controllers/productoMongo.js')
const { Router } = express

const routerProductos = Router()



routerProductos.get('/', getProducts)

routerProductos.post('/', postProduct)

routerProductos.put('/:id', putProduct)

routerProductos.delete('/:id', deleteProduct)

routerProductos.delete('/', deleteAllProducts)

routerProductos.get('*', errorRoute)


module.exports = routerProductos
