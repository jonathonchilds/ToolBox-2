import { CSSProperties } from "react";

export interface CSSStarsProps extends CSSProperties {
  "--rating": number;
}

export type ToolType = {
  id?: number;
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

export type UserType = {
  id?: number;
  firstName: string;
  lastName: string;
  zipCode?: number;
  isContractor: boolean;
  userName: string;
  password: string;
};
