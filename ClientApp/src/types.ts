import { CSSProperties } from "react";

export interface CSSStarsProps extends CSSProperties {
  "--rating": number;
}

export type ToolType = {
  id?: number;
  name: string;
  photoURL: string;
  rent: boolean;
  rentPrice: number | 0;
  borrow: boolean;
  purchase: boolean;
  purchasePrice: number | 0;
  userId: number | 0;
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
  user: UserType;
};

export type UploadResponse = { url: string };
