type SortOrder = "descending" | "ascending";
type ColumnName = "id" | "firstName" | "lastName" | "email" | "phone";
interface IPainationState {
  start: number;
  end: number;
  page: number;
}

export type { SortOrder, ColumnName, IPainationState };
