import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from 'react';

interface DiscardModalProviderInterface {
  isDiscardOpen: boolean;
  onCloseDiscard: () => void;
  onOpenDiscard: () => void;
}

const defaultValues: DiscardModalProviderInterface = {
  isDiscardOpen: false,
  onOpenDiscard: () => {},
  onCloseDiscard: () => {},
};

const DiscardModalContext =
  createContext<DiscardModalProviderInterface>(defaultValues);

function DiscardModalProvider({ children }: PropsWithChildren): JSX.Element {
  const [isDiscardOpen, setDiscardOpen] = useState(false);

  const onOpenDiscard = (): void => setDiscardOpen(true);
  const onCloseDiscard = (): void => setDiscardOpen(false);

  const value = useMemo(
    () => ({ isDiscardOpen, onOpenDiscard, onCloseDiscard }),
    [isDiscardOpen]
  );

  return (
    <DiscardModalContext.Provider value={value}>
      {children}
    </DiscardModalContext.Provider>
  );
}

export function useDiscardModal(): DiscardModalProviderInterface {
  return useContext(DiscardModalContext);
}

export default DiscardModalProvider;
