import { toast } from 'react-toastify'

const BASE_CONFIG = {
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
}

const TOAST_CONFIG = {
  position: 'top-right',
  autoClose: 2000,
  ...BASE_CONFIG,
}

const TOAST_ERROR_CONFIG = {
  position: 'top-right',
  autoClose: 3000,
  ...BASE_CONFIG,
}

export const notify = (message) => {
  toast.success(message, TOAST_CONFIG)
  toast.clearWaitingQueue()
}
export const notifyError = (message) => {
  toast.error(message, TOAST_ERROR_CONFIG)
  toast.clearWaitingQueue()
}
