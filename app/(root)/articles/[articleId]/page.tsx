import Link from "next/link";

interface Article {
  title: string;
  description: string;
  url: string;
}

interface NewsApiResponse {
  articles: Article[];
}

export default async function NewsArticles({
  params,
  searchParams,
}: {
  params: { articleId: string };
  searchParams?: { lang?: "en" | "es" | "fr" };
}) {
  const { articleId } = params;
  const lang = searchParams?.lang || "en";

  try {
    // Fetch the article from the Next.js API route
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
    if (!apiKey) throw new Error("Missing API key");

    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${articleId}&language=${lang}&apiKey=${apiKey}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.statusText}`);
    }

    const data: NewsApiResponse = await response.json();

    return (
      <div className="max-w-4xl mx-auto p-6  shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center dark:text-white text-gray-800 mb-6">
          News Articles for <span className="text-blue-600">{articleId}</span>
        </h1>

        {data.articles?.length ? (
          <div className="space-y-6">
            {data.articles.map((article, index) => (
              <div
                key={index}
                className="p-5 border rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition-shadow"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {article.title}
                </h2>
                <p className="text-gray-700 mb-3">{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-500 hover:text-blue-700 font-medium"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No articles found.</p>
        )}

        <p className="text-center mt-6 text-gray-700">
          Reading in <span className="font-semibold">{lang.toUpperCase()}</span>
        </p>

        <div className="flex justify-center gap-4 mt-4">
          {["en", "es", "fr"].map((locale) => (
            <Link
              key={locale}
              href={`/articles/${articleId}?lang=${locale}`}
              className={`px-4 py-2 rounded-lg font-semibold text-white transition 
              ${
                lang === locale
                  ? "bg-blue-600"
                  : "bg-gray-500 hover:bg-gray-700"
              }`}
            >
              {locale.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="text-center text-red-600 font-medium mt-10">
        Error: {(error as Error).message}
      </div>
    );
  }
}
