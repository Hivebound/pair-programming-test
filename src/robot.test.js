import { foo } from "./robot";

describe("Warehouse Robot", () => {
  it("should run demo test", () => {
    const result = foo();

    expect(result).toEqual(true);
  });
});
