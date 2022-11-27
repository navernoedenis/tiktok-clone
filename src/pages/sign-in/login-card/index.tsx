import React from 'react';
import { LoginCardContainer, IconWrapper, Title } from './styles';

interface LoginCardProps {
  icon?: JSX.Element;
  title: string;
  onClick?: () => Promise<void>;
}

function LoginCard({ icon, title, onClick }: LoginCardProps): JSX.Element {
  return (
    <LoginCardContainer
      className={onClick ? '' : 'no-available'}
      onClick={onClick}
    >
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <Title>{title}</Title>
    </LoginCardContainer>
  );
}

LoginCard.defaultProps = {
  icon: undefined,
  onClick: undefined,
};

export default LoginCard;
