import { PersistanceService } from "src/shared/services/persistance/persistance.service";

interface StorageMock extends Storage {
  entities: { [key: string]: string };
}

const localStorageMock: StorageMock = {
  entities: {},
  getItem(key: string): string | null {
    if (key in this.entities) return this.entities[key];

    return null;
  },
  setItem(key: string, value: string): void {
    this.entities[key] = value;
  },

  length: 0,
  removeItem() {},
  clear() {},
  key(): string | null {
    return null;
  },
};

test("Set and get persistance data in/from storage", () => {
  const persistanceStorageForTests = new PersistanceService(localStorageMock);

  persistanceStorageForTests.set("data", { foo: "bar" });

  const value = persistanceStorageForTests.get("data");

  expect(value.foo).toBe("bar");
});
