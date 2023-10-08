// "use client";
export default async function WebPage({ searchParams }) {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );
  const data = await response.json();
  const results = data.items;
  return <>{results && results.map((item) => <h1>{item.title}</h1>)}</>;
}
