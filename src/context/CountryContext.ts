import { createContext } from "react";
import { Country } from "@/types/country";

interface CountryContexType {
    countries: Country[];
    isLoading: boolean;
    error: string | null
}

export const CountryContext = createContext<CountryContexType | undefined>(undefined)