import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from 'react';

interface SuccessModalProviderInterface {
  isSuccessOpen: boolean;
  onCloseSuccess: () => void;
  onOpenSuccess: () => void;
}

const defaultValues: SuccessModalProviderInterface = {
  isSuccessOpen: false,
  onOpenSuccess: () => {},
  onCloseSuccess: () => {},
};

const SuccessModalContext =
  createContext<SuccessModalProviderInterface>(defaultValues);

function SuccessModalProvider({ children }: PropsWithChildren): JSX.Element {
  const [isSuccessOpen, setSuccessOpen] = useState(false);

  const onOpenSuccess = (): void => setSuccessOpen(true);
  const onCloseSuccess = (): void => setSuccessOpen(false);

  const value = useMemo(
    () => ({ isSuccessOpen, onOpenSuccess, onCloseSuccess }),
    [isSuccessOpen]
  );

  return (
    <SuccessModalContext.Provider value={value}>
      {children}
    </SuccessModalContext.Provider>
  );
}

export function useSuccessModal(): SuccessModalProviderInterface {
  return useContext(SuccessModalContext);
}

export default SuccessModalProvider;
