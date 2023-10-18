import Link from "next/link";
import Parser from "html-react-parser";
import PaginationButtons from "./paginationButtons";

export default function WebSearchResult({ results }) {
  return (
    <div className="w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl=[5%]">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items.map((item) => (
        <div key={item.link} className="mb-8 max-w-xl">
          <div className="group flex flex-col">
            <Link className="text-sm truncate" href={item.link}>
              {item.formattedUrl}
            </Link>
            <Link
              className="group-hover:underline decoration-blue-800 truncate font-medium text-blue-800"
              href={item.link}
            >
              {item.title}
            </Link>
          </div>
          <p className="text-gray-600">{Parser(item.htmlSnippet)}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
}
