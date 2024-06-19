export const dynamic = "force-dynamic";
import WebSearchResult from "@/components/webSearchResult";
import Link from "next/link";

export default async function WebPage({ searchParams }) {
  const startIndex = searchParams.start || "1";
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`
    );

    if (!response.ok) {
      console.error("Error fetching data:", response.statusText);
      throw new Error("have problem");
    }

    const data = await response.json();
    const results = data.items;

    if (!results) {
      return (
        <div className="flex flex-col justify-center items-center pt-10">
          <h1 className="text-3xl p-4">No Results Found</h1>
          <p className="text-lg">
            Try searching for something else or go back to the homepage
          </p>
          <Link className="text-blue-500" href="/">
            HOME
          </Link>
        </div>
      );
    }

    return <>{results && <WebSearchResult results={data} />}</>;
  } catch (error) {
    console.error("An error occurred during fetch:", error);
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl p-4">An error occurred</h1>
        <p className="text-lg">
          There was an issue fetching the search results. Please try again
          later.
        </p>
        <Link className="text-blue-500" href="/">
          HOME
        </Link>
      </div>
    );
  }
}
