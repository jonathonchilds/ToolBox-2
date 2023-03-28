import { CSSProperties } from "react";

export interface CSSStarsProps extends CSSProperties {
  "--rating": number;
}

export type ToolType = {
  id: number | undefined;
  name: string;
  price: number | null;
  owner: string;
  imageUrl: string;
  isAvailable: boolean;
  rent: boolean;
  borrow: boolean;
  purchase: boolean;
};
