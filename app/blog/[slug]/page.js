"use client";

import { useEffect, useState } from "react";
import { personalData } from "@/utils/data/personal-data";

async function fetchBlog(slug) {
  const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}

export default function BlogDetails({ params }) {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const slug = params.slug;

    async function loadBlog() {
      try {
        const data = await fetchBlog(slug);
        setBlog(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadBlog();
  }, [params.slug]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {/* Render blog details */}
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      {/* Add more details here */}
    </div>
  );
}
