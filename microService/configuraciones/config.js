const mongoose = require('mongoose');


export const connectDB = async () => {
    try {
        // const url = 'mongodb://localhost:27017/ecommerce';
        const url = 'mongodb+srv://gabo2395:lebron23JAMES@cluster0.78xslog.mongodb.net/?retryWrites=true&w=majority';

        await mongoose.connect(url, {
            //para que los usuarios puedan usar el analziador anterior si encuetran un error en el analziador nuevo.
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });
        console.log('mongoDB connected')
    } catch (error) {
        console.log(error)
    }

}
export const firebase = () => {

    var admin = require("firebase-admin");

    var serviceAccount = require("./backend-coderhouse-b8e7b-firebase-adminsdk-qvwmn-d65fe25ded.json");

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

module.exports = { connectDB, firebase }