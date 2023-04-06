import { CSSProperties } from "react";

export interface CSSStarsProps extends CSSProperties {
  "--rating": number;
}

export type ToolType = {
  id: number | undefined;
  name: string;
  imageUrl: string;
  rent: boolean;
  rentPrice: number;
  borrow: boolean;
  borrowPrice: number;
  purchase: boolean;
  purchasePrice: number;
};

export type APIError = {
  errors: Record<string, string[]>;
  status: number;
  title: string;
  traceId: string;
  type: string;
};
