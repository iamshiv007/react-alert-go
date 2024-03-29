export type AlertType = 'success' | 'error' | 'warning';
export type Position =
  | 'top-right'
  | 'top-left'
  | 'top-center'
  | 'bottom-right'
  | 'bottom-left'
  | 'bottom-center';

export interface AlertProps {
  id: number;
  message: string;
  type?: AlertType;
}
