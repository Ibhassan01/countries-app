import { ChevronDown } from "lucide-react";
import { useState } from "react";
// import { Country } from "@/types/country";

const REGIONS = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

interface FilterRegionProps {
    onFilter: (region: string) => void;
    selectedRegion: string
}
const RegionFilter = ({ onFilter, selectedRegion }: FilterRegionProps) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="relative w-52 text-sm">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between rounded-md bg-app-element px-6 py-4 shadow-md text-app-text transition-all"
            >
                <span>
                    {selectedRegion || "Filter by Region"}
                </span>
                <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            {isOpen && (
                <ul className="absolute left-0 top-full z-10 mt-1 w-full rounded-md bg-app-element py-2 shadow-lg animate-in fade-in slide-in-from-top-1"
                >
                    <li
                        onClick={() => { onFilter(''); setIsOpen(false) }}
                        className="cursor-pointer px-6 py-2 hover:bg-app-bg text-app-text"
                    >
                        All Regions
                    </li>
                    {REGIONS.map((region) => (
                        <li key={region}
                            onClick={() => { onFilter(region); setIsOpen(false) }}
                            className="cursor-pointer px-6 py-2 hover:bg-app-bg text-app-text transition-colors"
                        >
                            {region}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default RegionFilter;