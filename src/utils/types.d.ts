declare global {
  type ID = string | number;
  type Nullable<T> = T | null | undefined;
}

export { ID, Nullable };
