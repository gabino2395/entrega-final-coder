const { Router } = require("express")
const { getCartProductById, getCartById, postCart, putCart, postCartProductById, deleteCartProductById, errorRoute } = require("../controllers/carrito.controller")


// const { getCartProductById, getCartById, postCart, putCart, postCartProductById, deleteCartProductById, errorRoute } = require("../controllers/carritoFirebase")
// const { getCartProductById, getCartById, postCart, putCart, postCartProductById, deleteCartProductById, errorRoute } = require("../controllers/carritoMongo")
const routerCarrito = Router()


routerCarrito.get('/:id/productos', getCartProductById)
routerCarrito.get('/:id/', getCartById)
routerCarrito.post('/', postCart)
routerCarrito.post('/:id/productos', postCartProductById)

// routerCarrito.put('/', putCart)
routerCarrito.delete('/', deleteCartProductById)
routerCarrito.get('*', errorRoute)


module.exports = routerCarrito
