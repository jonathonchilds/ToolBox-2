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
  email: string;
  zipCode: string;
  isContractor: boolean;
  username: string;
  password: string;
};
