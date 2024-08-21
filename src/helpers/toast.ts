// src/helpers/toast.ts
import { toast } from 'react-toastify';

// Definir o tipo para a mensagem
type ToastMessage = string;

function messageError(message: ToastMessage): void {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    theme: 'colored',
    closeOnClick: true,
    pauseOnHover: false
  });
}

function messageSuccess(message: ToastMessage): void {
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    theme: 'colored',
    closeOnClick: true,
    pauseOnHover: false
  });
}

// Exportar funções individualmente
export { messageError, messageSuccess };
