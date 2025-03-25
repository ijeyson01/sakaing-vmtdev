const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

var pathEnvironment = '';

if(process.env.production == true){
    pathEnvironment = './src/environments/environment.prod.ts'
} else {
    pathEnvironment = './src/environments/environment.development.ts'
}

const envConfig = `
export const environment = {
    URL_BASE:'${process.env.URL_BASE}',
    URI_PRODUCT:'${process.env.URI_PRODUCT}',
    URI_CATEGORY:'${process.env.URI_CATEGORY}',
    URI_NEW_PRODUCT:'${process.env.URI_NEW_PRODUCT}',
    PATH_BRAND:'${process.env.PATH_BRAND}',
    PATH_NEW_BRAND:'${process.env.PATH_NEW_BRAND}',
};
`;

fs.writeFileSync(pathEnvironment, envConfig);