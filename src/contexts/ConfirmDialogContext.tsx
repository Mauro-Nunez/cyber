import { createContext, useContext, ReactNode } from 'react';
import { ConfirmDialog } from '../components/ui/ConfirmDialog';
import { useConfirmDialog } from '../hooks/useConfirmDialog';

interface ConfirmDialogOptions {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  type?: 'danger' | 'warning' | 'info';
}

interface ConfirmDialogContextType {
  open: (options: ConfirmDialogOptions) => Promise<boolean>;
}

const ConfirmDialogContext = createContext<ConfirmDialogContextType | null>(null);

export function ConfirmDialogProvider({ children }: { children: ReactNode }) {
  const { state, open: openDialog, close } = useConfirmDialog();

  const open = (options: ConfirmDialogOptions) => {
    return new Promise<boolean>((resolve) => {
      openDialog({
        ...options,
        onConfirm: () => {
          close();
          resolve(true);
        },
        onCancel: () => {
          close();
          resolve(false);
        },
      });
    });
  };

  return (
    <ConfirmDialogContext.Provider value={{ open }}>
      {children}
      <ConfirmDialog
        isOpen={state.isOpen}
        onClose={close}
        onConfirm={() => state.onConfirm?.()}
        onCancel={() => state.onCancel?.()}
        title={state.title}
        message={state.message}
        confirmText={state.confirmText}
        cancelText={state.cancelText}
        type={state.type}
      />
    </ConfirmDialogContext.Provider>
  );
}

export function useConfirm() {
  const context = useContext(ConfirmDialogContext);
  if (!context) {
    throw new Error('useConfirm must be used within a ConfirmDialogProvider');
  }
  return context;
} 