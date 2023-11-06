'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

type SearchContextValues = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

const initialValue: SearchContextValues = {
  query: '',
  setQuery: () => null,
};

export const SearchContext = createContext<SearchContextValues>(initialValue);

interface SearchProviderProps {
  children: ReactNode;
}

const SearchProvider = ({ children }: SearchProviderProps) => {
  const [query, setQuery] = useState('');

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
