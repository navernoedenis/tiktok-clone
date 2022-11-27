import React from 'react';
import LoadingImage from './loading.gif';
import { LoaderContainer } from './styles';

function Loader(): JSX.Element {
  return (
    <LoaderContainer>
      <img src={LoadingImage} alt="img" />
    </LoaderContainer>
  );
}

export default Loader;
