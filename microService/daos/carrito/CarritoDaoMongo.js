const{ContenedorMongo}=require ('../../contenedores/ContenedorMongo.js')
const cart =require('../../models/cartModelMongo.js')
class CarritoDaoMongo extends ContenedorMongo{
    constructor(){
        super(cart)
    }
}

module.exports = CarritoDaoMongo;