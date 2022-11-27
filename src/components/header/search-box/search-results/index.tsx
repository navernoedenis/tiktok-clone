import React from 'react';
import { User } from 'types/user';
import SearchResult from '../search-result';
import { Hint, SearchResultContainer, Subtitle } from './styles';

interface SearchResultsProps {
  query: string;
  results: User[];
}

function SearchResults({
  query,
  results,
}: SearchResultsProps): JSX.Element | null {
  if (!query || !results.length) return null;

  return (
    <SearchResultContainer>
      <Subtitle>Accounts</Subtitle>
      {results.map((result) => (
        <SearchResult key={result.uid} result={result} />
      ))}
      <Hint>View all results for &quot;{query}&quot;</Hint>
    </SearchResultContainer>
  );
}

export default SearchResults;
