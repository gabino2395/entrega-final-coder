const{ContenedorArchivo}=require ('../../contenedores/ContenedorArchivo.js')

class CarritoDaoArchivo extends ContenedorArchivo{
    constructor(){
        super('../DB/carrito.txt')
    }
    async deleteProductByID(idCart, idProduct) {
		try {
			let dataArchivo = await this.readFileFunction(this.ruta);
			let carrito = dataArchivo.find(carrito => carrito.id === idCart);
			let producto = carrito.productos.find(
				producto => producto.id === idProduct
			);
			console.log(producto);
			if (carrito) {
				let productosFiltrados = carrito.productos.filter(
					producto => producto.id !== idProduct
				);
				carrito.productos = productosFiltrados;
				await this.updateById(idCart, carrito);
				console.log("Producto eliminado");
			} else {
				console.log("No se encontró el Carrito");
			}
		} catch (error) {
			console.log("No existe el id", error);
		}
	}

    //añadir producto a carrito
	async addProductToCart(idCart, product) {
		try {
			const carritoById = await this.getById(parseInt(idCart));
			let timestamp = Date.now();
			if (carritoById.productos.length) {
				let productToAdd = {
					id: carritoById.products[carritoById.productos.length - 1].id + 1,
					timestamp,
					...product
				};
				carritoById.producto.push(productToAdd);
				await this.updateById(parseInt(idCart), carritoById);
				let idProduct =
					carritoById.productos[carritoById.productos.length - 1].id;
				console.log(`El producto agregado tiene el ID: ${idProduct}`);
				return idProduct;
			} else {
				let productToAdd = { id: 1, timestamp, ...product };
				carritoById.productos.push(productToAdd);
				await this.updateById(parseInt(idCart), carritoById);

				console.log(`El producto agregado tiene el ID: 1`);
				return 1;
			}
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = CarritoDaoArchivo;