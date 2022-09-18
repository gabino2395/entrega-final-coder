const { response } = require('express')


const ProductosDaoArchivo=require('../daos/index.js')

const productoDaoArchivo = new ProductosDaoArchivo()

const getProducts = async (req, res = response) => {
    const productos = await productoDaoArchivo.getAll()
    res.json({
        productos
    })
}

const getProductById = async (req, res = response) => {
    const { id } = req.params
    const producto = await productoDaoArchivo.getById(id)
    res.json({
        producto
    })
}

const postProduct = async (req, res = response) => {
    const { title, price, thumbnail } = req.body
    if (title && price && thumbnail) {
        const producto = await productoDaoArchivo.save({ title, price, thumbnail })
        res.json({
            msg: 'producto guardado',
            producto
        })
    }
}

// put product
const putProduct = async (req, res = response) => {
    const id = parseInt(req.params.id)
    const { title, price, thumbnail } = req.body
    if (title && price && thumbnail) {
        const producto = await productoDaoArchivo.updeteById({ id, title, price, thumbnail })
        res.json({
            msg: 'producto actualizado',
            producto
        })
    }
}

// delete product
const deleteProduct = async (req, res = response) => {
    const id = parseInt(req.params.id)
    const producto = await productoDaoArchivo.deleteById(id)
    res.json({
        msg: 'producto eliminado',
        producto
    })
}

// delete all products
const deleteAllProducts = async (req, res = response) => {
    const productos = await productoDaoArchivo.deleteAll()
    res.json({
        msg: 'todos los productos eliminados',
        productos
    })
}

const errorRoute = async (req, res) => {
    res.json({
        error: -2,
        description: "Ruta no implementada"
    });
}



module.exports = {
    getProducts,
    getProductById,
    postProduct,
    putProduct,
    deleteProduct,
    deleteAllProducts,
    errorRoute
}







