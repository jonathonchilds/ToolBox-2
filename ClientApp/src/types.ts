import { CSSProperties } from "react";

export interface CSSStarsProps extends CSSProperties {
  "--rating": number;
}

export type ToolType = {
  id: number;
  name: string;
  price: number;
  owner: string;
  imageUrl: string;
  isAvailable: boolean;
  rent: boolean;
  borrow: boolean;
  purchase: boolean;
};
