const{ContenedorFirebase}=require ('../../contenedores/ContenedorFirebase.js')

class CarritoDaoFirebase extends ContenedorFirebase{
    constructor(){
        super('../productos.txt')
    }
}

module.exports = CarritoDaoFirebase;