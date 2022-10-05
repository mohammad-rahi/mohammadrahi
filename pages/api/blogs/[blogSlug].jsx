import blogs from "./blogs.json";

export default function handler(req, res) {
    const { blogSlug } = req.query;
    res.status(200).json(blogs.find(blog => blog.slug === blogSlug))
}