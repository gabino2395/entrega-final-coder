const { response } = require('express')
// const { Contenedor } = require('../../productos/contenedor.js')
// const contenedor = new Contenedor('./DB/carrito.txt')
// const CarritoDaoArchivo=require('../daos/carrito/CarritoDaoArchivo.js')
const CarritoDaoArchivo=require('../daos/index.js')

const carritoDaoArchivo= new CarritoDaoArchivo()

const getCartProductById = async (req, res= response) => {
    const { id } = req.params;
	const carritoById = await carritoDaoArchivo.getById(parseInt(id));
	listaProductos = carritoById.productos;
	res.json(listaProductos);
}
const getCartById= async (req, res) => {
	const { id } = req.params;
	const carrito = await contenedor.getById(parseInt(id));
	// res.json({ carrito });
	res.render("carritos", {
		titulo: `Carrito ${id}`,
		tiempo: carrito.timestamp,
		list: carrito.productos,
		listExist: true,
		carrito: true
	});
}


const postCart = async (req, res= response) => {
	const idCarrito = await contenedor.save(req.body);
	res.json({ message: "Producto guardado en carrito", idCarrito });
    }

const postCartProductById =async (req, res) => {
	const { id } = req.params;
	const objCarrito = req.body;
	console.log(objCarrito);
	carritoByID = await contenedor.addProductToCart(id, objCarrito);
	res.json({ message: "Producto guardado", carritoByID })
}




const deleteCartProductById = async (req, res= response) => {
    const { idCart, idProduct } = req.params;
	await carritoDaoArchivo.deleteProductById(parseInt(idCart), parseInt(idProduct));
}

const errorRoute =async (req, res) => {
	res.json({
		error: -2,
		description: "Ruta no implementada"
	});
}



module.exports = {
    getCartById,
    postCart,
  
  
    getCartProductById ,
    postCartProductById,
    deleteCartProductById,
    errorRoute  
}
