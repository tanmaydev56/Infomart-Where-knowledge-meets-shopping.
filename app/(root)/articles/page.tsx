"use client";

import Link from "next/link";
import React, { useState } from "react";

const ArticlesPage = () => {
  const [topic, setTopic] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center gap-6 p-10 ">
      {/* Heading */}
      <h1 className="text-4xl font-bold dark:text-white text-gray-900">Articles</h1>

      {/* Input Field */}
      <div className="w-full max-w-md">
        <label htmlFor="topic" className="text-lg font-medium dark:text-white text-gray-700">
          Enter the article topic you want to see:
        </label>
        <input
          id="topic"
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Type a topic..."
          className="mt-2 w-full border border-gray-300 rounded-md p-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Article Links (Dynamic based on user input) */}
      {topic && (
        <div className="flex flex-col gap-4">
          {[
            { lang: "en", label: "Read in English" },
            { lang: "fr", label: "Read in French" },
            { lang: "es", label: "Read in Spanish" },
          ].map(({ lang, label }) => (
            <Link
              key={lang}
              href={`/articles/${encodeURIComponent(topic)}?lang=${lang}`}
              className="bg-black text-white w-56 h-12 flex justify-center items-center rounded-full text-lg font-medium transition hover:bg-gray-800"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticlesPage;
