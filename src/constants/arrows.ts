enum ARROWS {
  descending = "⯆",
  ascending = "⯅",
}

type SortOrder = keyof typeof ARROWS;
type ColumnName = "id" | "firstName" | "lastName" | "email" | "phone";

export type { SortOrder, ColumnName };
export { ARROWS };
