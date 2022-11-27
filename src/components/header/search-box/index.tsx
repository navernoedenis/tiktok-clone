import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import debounce from 'lodash.debounce';

import { User } from 'types/user';

import UserService from 'services/user';
import SearchResult from './search-results';

import ClearIcon from './icons/clear';
import LoadingIcon from './icons/loading';
import SearchIcon from './icons/search';

import {
  Form,
  IconContainer,
  SearchBoxContainer,
  SearchButton,
  SearchInput,
} from './styles';

function SearchBox(): JSX.Element {
  const location = useLocation();
  const searchRef = useRef<HTMLInputElement | null>(null);

  const [query, setQuery] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState<User[]>([]);

  const searchUsers = useCallback(async (q: string): Promise<void> => {
    setLoading(true);

    try {
      const users = await UserService.findMany(q);
      setResults(users);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const clearSearchInput = (): void => {
    setQuery('');
    searchRef.current?.focus();
  };

  const debouncedSearchUsers = useMemo(
    () => debounce(searchUsers, 500),
    [searchUsers]
  );

  useEffect(() => {
    setQuery('');
    setResults([]);
  }, [location.pathname]);

  useEffect(() => {
    if (query.trim().length) {
      void debouncedSearchUsers(query);
    }
  }, [query, debouncedSearchUsers]);

  return (
    <SearchBoxContainer>
      <Form component="form" onSubmit={(event) => event.preventDefault()}>
        <SearchInput
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search accounts and videos"
          ref={searchRef}
          value={query}
        />

        <IconContainer>
          {query && !isLoading && <ClearIcon onClick={clearSearchInput} />}
          {isLoading && <LoadingIcon />}
        </IconContainer>

        <SearchButton>
          <SearchIcon />
        </SearchButton>
      </Form>

      <SearchResult query={query} results={results} />
    </SearchBoxContainer>
  );
}

export default SearchBox;
