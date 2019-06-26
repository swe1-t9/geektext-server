declare global {
  type ID = string;
  type Nullable<T> = T | null | undefined;
}

export { ID, Nullable };
