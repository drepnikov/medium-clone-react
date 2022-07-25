class UtilsService {
  static createRange(start: number, end: number) {
    let range = [];

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    return range;
  }
}

export { UtilsService };
