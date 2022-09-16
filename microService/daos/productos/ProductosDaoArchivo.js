const{ContenedorArchivo}=require ('../../contenedores/ContenedorArchivo')

class ProductosDaoArchivo extends ContenedorArchivo{
    constructor(){
        super('../DB/productos.txt')
    }
}

module.exports = ProductosDaoArchivo;