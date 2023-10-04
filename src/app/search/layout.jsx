import "../globals.css";
import SearchHeader from "@/components/searchHeader";

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
