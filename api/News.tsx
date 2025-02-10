"use server";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query, lang } = req.query;
  const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

  if (!API_KEY) {
    return res.status(500).json({ error: "API key not found" });
  }

  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&language=${lang}&sortBy=publishedAt&apiKey=${API_KEY}`
    );
    const data = await response.json();

    if (response.ok) {
      res.status(200).json(data);
    } else {
      res.status(500).json({ error: data.message });
    }
  } catch (error) {
    res.status(500).json({ error: `Error fetching news: ${error}` });
  }
}
