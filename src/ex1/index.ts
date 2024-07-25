export type DateRange = {
  startDate: Date;
  endDate: Date;
};

export function isRangeAvailable(
  requestedRange: DateRange,
  availableRange: DateRange
): boolean {
  return (
    requestedRange.startDate >= availableRange.startDate &&
    requestedRange.endDate <= availableRange.endDate
  );
}

