import { config } from 'dotenv'

config();

const urlBase: string = process.env['URL_BASE']!;
const pathProduct: string = process.env['URI_PRODUCT']!;
const pathCategory: string = process.env['URI_CATEGORY']!;
const pathNewProduct: string = process.env['URI_NEW_PRODUCT']!;
const pathBrand: string = process.env['PATH_BRAND']!;
const pathNewBrand: string = process.env['PATH_NEW_BRAND']!;

export const environment = {
    URL_BASE: urlBase,
    URI_PRODUCT: pathProduct,
    URI_CATEGORY: pathCategory,
    URI_NEW_PRODUCT: pathNewProduct,
    PATH_BRAND: pathBrand,
    PATH_NEW_BRAND: pathNewBrand
};
