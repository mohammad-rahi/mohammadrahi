import blogs from './blogs.json';

export default function handler(req, res) {
    res.status(200).json(blogs)
}