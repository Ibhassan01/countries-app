import { Country } from "@/types/country";
import { Link } from "react-router-dom";

interface CountryCardProps {
  country: Country;
}

export const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <Link to={`/country/${country.cca3}`}>
        <article className="flex flex-col h-full overflow-hidden rounded-md bg-app-element shadow-sm transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
      <div className="aspect-16/10 w-full overflow-hidden">
        <img 
          src={country.flags.svg} 
          alt={country.flags.alt || `Flag of ${country.name.common}`} 
          className="h-full w-full object-cover"
          loading="lazy" 
        />
      </div>

      <div className="p-7 pb-10 flex flex-col gap-4">
        <h2 className="text-lg font-extrabold text-app-text leading-tight">
          {country.name.common}
        </h2>
        
        <div className="flex flex-col gap-1.5 text-sm">
          <p className="text-app-text">
            <span className="font-semibold">Population:</span>{" "}
            <span className="font-light opacity-90">
              {country.population.toLocaleString()}
            </span>
          </p>
          <p className="text-app-text">
            <span className="font-semibold">Region:</span>{" "}
            <span className="font-light opacity-90">{country.region}</span>
          </p>
          <p className="text-app-text">
            <span className="font-semibold">Capital:</span>{" "}
            <span className="font-light opacity-90">
              {country.capital?.[0] || "N/A"}
            </span>
          </p>
        </div>
      </div>
    </article>
    </Link>
  );
};