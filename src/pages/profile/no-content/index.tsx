import React from 'react';
import { NoContentContainer, Icon, Title, Text } from './styles';

function NoContent(): JSX.Element {
  return (
    <NoContentContainer>
      <Icon />
      <Title>No content</Title>
      <Text>This user has not published any videos.</Text>
    </NoContentContainer>
  );
}

export default NoContent;
