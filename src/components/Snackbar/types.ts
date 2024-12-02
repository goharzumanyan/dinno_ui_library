import type { TButtonPropTypes } from '../Button/types'

export type TSnackbarTypes = 'success' | 'error' | 'warning' | 'information'

export interface TToastProps {
  duration?: number
  type?: TSnackbarTypes
  toastId: number | string
  closeSnackbar?: (id: number | string) => void
  text: string | JSX.Element
  actionProps?: TButtonPropTypes
}
export interface TSnackbarProps extends IFormCompProps {
  duration?: number
  position:
    | 'top-center'
    | 'top-right'
    | 'top-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'bottom-left'
}
