const{ContenedorMongo}=require ('../contenedores/ContenedorMongo.js')

class ProductosDaoMongo extends ContenedorMongo{
    constructor(){
        super('connectDB')
    }
}

module.exports = ProductosDaoMongo;