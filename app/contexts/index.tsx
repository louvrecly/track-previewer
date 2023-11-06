'use client';

import { ReactNode } from 'react';
import SearchProvider from './search';

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider = ({ children }: ContextProviderProps) => {
  return <SearchProvider>{children}</SearchProvider>;
};

export default ContextProvider;
