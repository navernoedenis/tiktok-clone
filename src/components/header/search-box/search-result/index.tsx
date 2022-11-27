import React from 'react';
import { User } from 'types/user';
import {
  Avatar,
  Description,
  DisplayName,
  SearchResultContainer,
  Username,
} from './styles';

interface SearchResultProps {
  result: User;
}

function SearchResult({ result }: SearchResultProps): JSX.Element {
  return (
    <SearchResultContainer to={`/${result.username}`}>
      <Avatar src={result.photoURL} />
      <Description>
        <Username>{result.username.slice(1)}</Username>
        <DisplayName>{result.displayName}</DisplayName>
      </Description>
    </SearchResultContainer>
  );
}

export default SearchResult;
