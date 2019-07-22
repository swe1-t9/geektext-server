import { Request } from 'express';

declare global {
  type Nullable<T> = T | null | undefined;
  type ID = string;
}

interface RequestWithContext extends Request {
  user?: { id: ID };
}

export { ID, Nullable, RequestWithContext };
