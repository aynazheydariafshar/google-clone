import ImageSearchResult from "@/components/imageSearchResult";
import Link from "next/link";

export default async function ImageSearch({ searchParams }) {
  const startIndex = searchParams.start || "1";
  await new Promise((resolve) => setTimeout(resolve, 100));
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
  );

  if (!response.ok) throw new Error("have problem");
  const data = await response.json();
  const results = data.items;
  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl p-4">No Results Find</h1>
        <p className="text-lg">
          Try searching for something else or go back to the homepage
        </p>
        <Link className="text-blue-500 " href="/">
          HOME
        </Link>
      </div>
    );
  }
  return <>{results && <ImageSearchResult results={data} />}</>;
}
