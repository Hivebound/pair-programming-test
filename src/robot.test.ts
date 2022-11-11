import { moveRobot } from "./robot";

describe("Warehouse Robot", () => {
  it("should run demo test", () => {
    const result = moveRobot();

    expect(result).toEqual(true);
  });
});
