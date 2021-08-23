
const express = require('express')
const cors = require('cors')



class server {

    constructor() {

        this.app = express()
        this.port = process.env.PORT;
        this.userPath = '/api/user';

        //midelwares

        this.middleware();

        //Rutas de mi aplicacion
        this.routes();
    }

    middleware() {

        //CORS
        this.app.use( cors() );

        //Parseo y lectura de Body
        this.app.use( express.json() );

        //directorio publico
        this.app.use( express.static ('public'));
    }

    routes() {
       
       this.app.use(this.userPath , require('../routes/user'));
    }

    listen() {
    
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        }
        )
    }

}

module.exports = server;