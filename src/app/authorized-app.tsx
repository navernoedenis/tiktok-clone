import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from 'components/header';

import FeedPage from 'pages/feed';
import InboxPage from 'pages/inbox';
import MessagesPage from 'pages/messages';
import ProfilePage from 'pages/profile';
import UploadPage from 'pages/upload';
import VideoPostModalPage from 'pages/video-post/modal';
import VideoPostPage from 'pages/video-post';

import { Main } from './theme';

function AuthorizedApp(): JSX.Element {
  const location = useLocation();
  const prevLocation = useRef(location);

  const isModalPage =
    !!location.state?.modal && prevLocation.current !== location;

  useEffect(() => {
    if (!isModalPage) {
      prevLocation.current = location;
    }
  }, [prevLocation, location, isModalPage]);

  return (
    <>
      <Header />
      <Main component="main">
        <Routes location={isModalPage ? prevLocation.current : location}>
          <Route index element={<FeedPage />} />
          <Route path="upload" element={<UploadPage />} />
          <Route path=":username/video/:postId" element={<VideoPostPage />} />
          <Route path=":username" element={<ProfilePage />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="inbox" element={<InboxPage />} />
        </Routes>
        {isModalPage && (
          <Routes>
            <Route
              path=":username/video/:postId"
              element={<VideoPostModalPage />}
            />
          </Routes>
        )}
      </Main>
    </>
  );
}

export default AuthorizedApp;
