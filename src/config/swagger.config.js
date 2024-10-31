const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

function swaggerConfig(app){
    const swaggerDocument = swaggerJsDoc({
        swaggerDefinition:{
            info: {
                title: "Advertisement Application",
                description: "Uploading & watching advertisements",
                version: "1.0.0",
                contact: {
                    name: "Amirhossein Olyanasabnarab"
                }
            }
        },
        apis: []
    });
    
    const swagger = swaggerUi.setup(swaggerDocument, {})

    app.use("/", swaggerUi.serve, swagger);
}

module.exports = swaggerConfig