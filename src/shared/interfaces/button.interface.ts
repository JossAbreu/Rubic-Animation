type ColorKey = "default" | "primary" | "transparent";

export interface Button {
  ButtonText: string;
  ButtonColor?: ColorKey;
  ButtonClass?: string;
}
