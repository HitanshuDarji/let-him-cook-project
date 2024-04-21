"use client";
import SearchResults from "./search-results/searchResults";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-8 bg-orange-100">
      <SearchResults />
    </main>
  );
}
