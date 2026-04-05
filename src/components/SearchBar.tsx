import { Search } from "lucide-react";

interface searchBarProps {
    onSearch: (value: string) => void
}

const SeacrchBar = ({ onSearch }: searchBarProps) => {
    return (
        <div className="relative w-full md:max-w-120">
            <Search
                className="absolute left-8 top-1/2 -translate-y-1/2 text-app-input"
                size={18}
            />
            <input
                type="text"
                placeholder="Search for a country ...."
                onChange={(e) => onSearch(e.target.value)}
                aria-label="Search for a country"
                className="w-full rounded-md border-none bg-app-element py-4 pl-20 pr-8 text-sm text-app-text shadow-md outline-none placeholder:text-app-input focus:ring-2 focus:ring-app-input/20 transition-all"
            />
        </div>
    );
}

export default SeacrchBar;