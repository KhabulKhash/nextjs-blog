import { getAllPostIds } from "../../lib/posts";

export default function handler(req, res) {
    getAllPostIds()
    res.status(200).json({ text: 'Hello' });
  }