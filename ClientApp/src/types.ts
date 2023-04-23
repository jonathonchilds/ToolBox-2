import { CSSProperties } from "react";

export interface CSSStarsProps extends CSSProperties {
  "--rating": number;
}

export type ToolType = {
  id?: number;
  name: string;
  imageUrl: string;
  rent: boolean;
  rentPrice: number | null;
  borrow: boolean;
  purchase: boolean;
  purchasePrice: number | null;
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
  username: string;
  password: string;
};

export type LoginUserType = {
  email: string;
  password: string;
};

export type LoginSuccess = {
  token: string;
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
};
