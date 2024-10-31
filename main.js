const express = require('express');
const swaggerConfig = require('./src/config/swagger.config.js');
require('dotenv').config();

async function main(){
    const app = express();

    const PORT = process.env.PORT;
    require('./src/config/mongoose.config.js');
    swaggerConfig(app);
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

main();