import products from "./products.json";

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            res.status(200).json(products)
            break;
        case 'POST':

            break;
        case 'PUT':

            break;
        case 'DELETE':

            break;
        default:
            res.status(405).end(); // Method Not Allowed
            break;
    }
}