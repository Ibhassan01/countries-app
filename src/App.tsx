import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { useCountries } from "./hooks/useCountries";
import SearchBar from "./components/SearchBar";

const App = () => {
  const { countries, isLoading } = useCountries();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCountries = (countries || []).filter((country) => 
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-app-bg text-app-text transition-colors duration-300">
      <NavBar />
      
      <main className="px-4 py-8 md:px-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-12">
          <SearchBar onSearch={setSearchTerm} />
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
             <p className="text-xl animate-pulse">Loading countries...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {filteredCountries.map((country) => (
              <div key={country.cca3} className="bg-app-el p-4 rounded shadow">
                {country.name.common}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;