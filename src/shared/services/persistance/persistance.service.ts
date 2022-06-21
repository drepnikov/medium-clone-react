export class PersistanceService {
  constructor(private storage: Storage) {}

  set(key: string, data: any) {
    try {
      this.storage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error("Error saving to localStorage");
    }
  }

  get(key: string): any {
    try {
      const data = this.storage.getItem(key);

      return data && JSON.parse(data);
    } catch (e) {
      console.error("Error getting data from localStorage");

      return null;
    }
  }
}

export const persistanceService = new PersistanceService(localStorage);
