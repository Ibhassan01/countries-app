export interface Country {
    flags: {
        png: string;
        svg: string;
        alt: string;
    };
    name: {
        common: string;
        official: string;
        nativeName: Record<string,{
            official: string;
            common: string;
        } >
    };
    currencies?: Record<string, {
        name: string;
        symbol: string
    }>;
    languages?: Record<string, string>;
    tld: string[]
    cca3: string;
    capital? : string[];
    region: string;
    subregion: string;
    population: number;
    borders?: string[];
}