const{ContenedorMongo}=require ('../../contenedores/ContenedorMongo.js')

class CarritoDaoMongo extends ContenedorMongo{
    constructor(){
        super('../productos.txt')
    }
}

module.exports = CarritoDaoMongo;