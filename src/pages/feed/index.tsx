import React from 'react';
import Sidebar from 'components/sidebar';
import FeedList from './feed-list';
import { FeedContainer } from './styles';

function FeedPage(): JSX.Element {
  return (
    <FeedContainer>
      <Sidebar />
      <FeedList />
    </FeedContainer>
  );
}

export default FeedPage;
