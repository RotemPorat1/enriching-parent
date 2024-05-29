export interface ButtonContext {
  id: string;
  url: string;
  toolTip?: string;
  action: () => void;
}
