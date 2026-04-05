import React, { ReactNode, useEffect, useState } from 'react'
import { Country } from '@/types/country'
import localData from '@/data.json'
import { CountryContext } from './CountryContext'


const FIELDS = 'name,flags,population,region,subregion,capital,tld,currencies,languages,cca3'

export const CountryProvider = ({ children }: { children: ReactNode }) => {
    const [countries, setCountries] = useState<Country[]>([])
    const [isLoading, setIsLoadig] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                setIsLoadig(true)
                const response = await fetch(`https://restcountries.com/v3.1/all?fields=${FIELDS}`)
                if (!response.ok) throw new Error('Failed to fetch API')
                const data = await response.json() as Country[]
                setCountries(data)
            } catch (error) {
                console.warn('Switching to local data', error);
                setCountries(localData as unknown as Country[])
                setError('Offline mode')
            } finally {
                setIsLoadig(false)
            }
        }
        fetchCountries()
    }, [])

    return (
        <CountryContext.Provider value={{ countries, isLoading, error }}>
            {children}
        </CountryContext.Provider>
    )
}