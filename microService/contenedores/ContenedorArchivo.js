const fs = require('fs')
class ContenedorArchivo {
    constructor(ruta) {
        this.ruta = ruta
    }

    async #readFileFunction(ruta) {
        let archivo = await fs.promises.readFile(ruta, 'utf-8')
        let archivoParseado = await JSON.parse(archivo)
        return archivoParseado
    }

    async save(obj) { // [].length = 0 => false , pread ...[] o {} -> copio al contenido
        try {
            let dataArch = await this.#readFileFunction(this.ruta) // dataArchParse[dataArchParse.length - 1].id + 1 -> ultimo elemento 
            if (dataArch.length) {
                await fs.promises.writeFile(this.ruta, JSON.stringify([...dataArch, { ...obj, id: dataArch[dataArch.length - 1].id + 1 }], null, 2))
            } else {
                await fs.promises.writeFile(this.ruta, JSON.stringify([{ ...obj, id: 1 }], null, 2))
            }
            console.log(`El archivo tiene el id: ${dataArch[dataArch.length - 1].id + 1}`)
        } catch (error) {
            console.log(error)
        }

    }
    async updeteById(obj) { // [].length = 0 => false , pread ...[] o {} -> copio al contenido
        try {
            let dataArch = await this.#readFileFunction(this.ruta)// Array con los productos [{},{este es pos 1},{}]
            const objIndex = dataArch.findIndex(prod => prod.id === obj.id) // -1 o la posicion del objeto
            if (objIndex !== -1) {
                // Existe
                // o se puede usar -> dataArch.splice( objIndex, 1, obj )
                dataArch[objIndex] = obj // => array[1] -> {} 
                await fs.promises.writeFile(this.ruta, JSON.stringify(dataArch, null, 2))
                return { msg: 'actualizado el producto' }
            } else {
                // no existe
                return { error: 'no existe el producto' }
            }
        } catch (error) {
            console.log(error)
        }

    }

    async getProductRamdom() {
        try {
            let dataArch = await this.#readFileFunction(this.ruta)
            let random = Math.floor(Math.random() * dataArch.length)
            return dataArch[random]
        } catch (error) {
            console.log(error)
        }
    }

    //traer producto por id
    async getById(id) {
        try {
            let dataArch = await this.#readFileFunction(this.ruta)
            let producto = dataArch.find(producto => producto.id === id)
            if (producto) {
                console.log(producto)
            } else {
                console.log('No se encontro el producto')
            }
        } catch (error) {
            console.log(error)
        }
    }

    //traer todos los productos
    async getAll() {
        try {
            let dataArch = await this.#readFileFunction(this.ruta)
            if (dataArch.length) {
                return dataArch
            } else {
                return null
            }
        } catch (error) {
            console.log(error)
        }
    }

    // eliminar producto por id
    async delete(id) {
        let dataArch = await this.#readFileFunction(this.ruta)// leer y concertir a objeto
        let producto = dataArch.find(prod => prod.id === id)
        if (producto) {
            const dataArchParseFiltrado = dataArch.filter(prod => prod.id !== id)
            await fs.promises.writeFile(this.ruta, JSON.stringify(dataArchParseFiltrado, null, 2), 'utf-8')
            console.log('Producto eliminado')
        } else {
            console.log('no existe el producto')
        }
    }

    // eliminar todos los productos
    async deleteAll() {
        await fs.promises.writeFile(this.ruta, JSON.stringify([], null, 2), 'utf-8')
    }
}

module.exports = { ContenedorArchivo }