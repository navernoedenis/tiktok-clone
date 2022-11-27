import { useEffect, useMemo, ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

function Portal({ children }: PortalProps): JSX.Element {
  const node = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    const parent = document.body;
    parent.appendChild(node);

    return () => {
      parent.removeChild(node);
    };
  }, [node]);

  return ReactDOM.createPortal(children, node);
}

export default Portal;
