import Cache from "../src/index";

describe(`Test In-Memory Cache`, () => {
  it(`must say jolzee`, () => {
    const cache = new Cache({
      defaultTimeToLiveMin: 20
    });
    cache.set("name", "jolzee");
    cache.get("name").then(val => {
      expect(val).toBe(`jolzee`);
    });
  });
});
