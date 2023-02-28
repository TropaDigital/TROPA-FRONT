import { ReactNode } from 'react';
import { Button } from './styles';

interface IPropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'primaryButton' | 'darkButton' | 'transparent';
  children: ReactNode;
}

export default function ButtonDefault({
  color,
  children,
  ...rest
}: IPropsButton) {
  return (
    <Button {...rest} color={color}>
      {children}
    </Button>
  );
}
