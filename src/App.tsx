import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { useCountries } from "./hooks/useCountries";
import SearchBar from "./components/SearchBar";
import RegionFilter from "./components/RegionFilter";
import { CountryCard } from "./components/CountryCard";

const App = () => {
  const { countries, isLoading } = useCountries();
  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState('')

  const filteredCountries = (countries || []).filter((country) => {
    const matchesSearch = country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRegion = region === "" || country.region === region;
    return matchesRegion && matchesSearch
  });

  return (
    <div className="min-h-screen bg-app-bg text-app-text transition-colors duration-300">
      <NavBar />

      <main className="px-4 py-8 md:px-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-12">
          <SearchBar onSearch={setSearchTerm} />
          <RegionFilter onFilter={setRegion} selectedRegion={region} />
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-xl animate-pulse">Loading countries...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-18 px-4 md:px-0">
            {filteredCountries.map((country) => (
              <CountryCard key={country.cca3} country={country} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;