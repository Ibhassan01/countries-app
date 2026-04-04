import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useCountries } from "../hooks/useCountries";
import { ArrowLeft } from "lucide-react";

export const CountryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { countries } = useCountries();

  const country = countries?.find((c) => c.cca3 === id);

  if (!country) return <div className="py-20 text-center">Country not found</div>;

  const nativeName = country.name.nativeName 
    ? Object.values(country.name.nativeName)[0].common 
    : country.name.common;

  const currencies = country.currencies 
    ? Object.values(country.currencies).map(c => c.name).join(", ") 
    : "N/A";

  const languages = country.languages 
    ? Object.values(country.languages).join(", ") 
    : "N/A";

  return (
    <div className="py-10 animate-in fade-in duration-500">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 px-8 py-2 mb-16 rounded-md bg-app-element shadow-md text-app-text transition-transform hover:scale-105"
      >
        <ArrowLeft size={18} /> Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="w-full">
          <img 
            src={country.flags.svg} 
            alt={country.name.common} 
            className="w-cover shadow-lg rounded-sm object-cover" 
          />
        </div>
        
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl font-extrabold">{country.name.common}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4">
            <div className="flex flex-col gap-3 text-sm">
              <p><span className="font-semibold">Native Name:</span> {nativeName}</p>
              <p><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>
              <p><span className="font-semibold">Region:</span> {country.region}</p>
              <p><span className="font-semibold">Sub Region:</span> {country.subregion || "N/A"}</p>
              <p><span className="font-semibold">Capital:</span> {country.capital?.[0] || "N/A"}</p>
            </div>

            <div className="flex flex-col gap-3 text-sm">
              <p><span className="font-semibold">Top Level Domain:</span> {country.tld?.[0] || 'N/A'}</p>
              <p><span className="font-semibold">Currencies:</span> {currencies}</p>
              <p><span className="font-semibold">Languages:</span> {languages}</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 mt-4 items-start lg:items-center">
            <h3 className="font-semibold whitespace-nowrap">Border Countries:</h3>
            <div className="flex flex-wrap gap-2">
              {country.borders?.length ? (
                country.borders.map((border) => (
                  <Link 
                    key={border} 
                    to={`/country/${border}`}
                    className="px-6 py-1 text-xs rounded-sm bg-app-element shadow-sm border border-transparent hover:border-app-input transition-colors"
                  >
                    {border}
                  </Link>
                ))
              ) : (
                <span className="text-sm opacity-70">None</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};