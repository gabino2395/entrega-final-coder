let productosDao
let CarritoDaoArchivo
switch (ruta) {
    case "txt":
        const{default:ProductosDaoArchivo}=await import('./productos/ProductosDaoArchivo.js')
        const{default:CarritoDaoArchivo}=await import('./carrito/CarritoDaoArchivo.js')

        productosDao= new ProductosDaoArchivo()
        carritoDao= new CarritoDaoArchivo()
        break;

        
        case "firebase":
            const{default:ProductosDaoFirebase}=await import('./productos/ProductosDaoFirebase.js')
            const{default:CarritoDaoFirebase}=await import('./carrito/CarritoDaoFirebase.js')
    
            
            productosDao= new ProductosDaoFirebase()
            carritoDao= new CarritoDaoFirebase()
            break;



            case "mongo":
            const{default:ProductosDaoMongo}=await import('./productos/ProductosDaoMongo.js')
            const{default:CarritoDaoMongo}=await import('./carrito/CarritoDaoMongo.js')
            productosDao= new ProductosDaoMongo()
            carritoDao= new CarritoDaoMongo()
            break;
    

    default:
        break;
}
module.exports={productosDao, CarritoDaoArchivo}