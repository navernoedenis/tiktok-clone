import React from 'react';
import SendIcon from '@mui/icons-material/SendRounded';
import { ShareButtonContainer } from './styles';

function ShareButton(): JSX.Element {
  return (
    <ShareButtonContainer>
      <SendIcon />
    </ShareButtonContainer>
  );
}

export default ShareButton;
