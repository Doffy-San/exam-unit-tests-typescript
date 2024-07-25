import { isRangeAvailable, DateRange } from ".";


describe("isRangeAvailable", () => {
  const availableRange: DateRange = {
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-07-31')
  };

  it("should return true when the requested range is exactly the same as the available range", () => {
    const requestedRange: DateRange = {
      startDate: new Date('2024-07-01'),
      endDate: new Date('2024-07-31')
    };
    expect(isRangeAvailable(requestedRange, availableRange)).toBe(true);
  });

  it("should return true when the requested range is within the available range", () => {
    const requestedRange: DateRange = {
      startDate: new Date('2024-07-10'),
      endDate: new Date('2024-07-20')
    };
    expect(isRangeAvailable(requestedRange, availableRange)).toBe(true);
  });

  it("should return false when the requested range starts before the available range", () => {
    const requestedRange: DateRange = {
      startDate: new Date('2024-06-25'),
      endDate: new Date('2024-07-10')
    };
    expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
  });

  it("should return false when the requested range ends after the available range", () => {
    const requestedRange: DateRange = {
      startDate: new Date('2024-07-20'),
      endDate: new Date('2024-08-05')
    };
    expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
  });

  it("should return false when the requested range is completely outside the available range", () => {
    const requestedRange: DateRange = {
      startDate: new Date('2024-08-01'),
      endDate: new Date('2024-08-10')
    };
    expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
  });

  it("should return false when the requested range overlaps at the start of the available range", () => {
    const requestedRange: DateRange = {
      startDate: new Date('2024-06-25'),
      endDate: new Date('2024-07-05')
    };
    expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
  });

  it("should return false when the requested range overlaps at the end of the available range", () => {
    const requestedRange: DateRange = {
      startDate: new Date('2024-07-25'),
      endDate: new Date('2024-08-05')
    };
    expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
  });
});
