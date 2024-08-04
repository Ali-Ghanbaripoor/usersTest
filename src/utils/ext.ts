/**
 *  Deep Copy 2D List
 *
 * By this function you can have full copy from list a to list b.
 *
 * ATTENTION: I DON'T LIKE USING THIS WAY, I WILL CONVERT IT TO EXTENSION.
 *
 * @param list
 * @returns {T[][]}
 */
export function deepCopy2DArray<T>(list: T[][]): T[][] {
  const copy: T[][] = [];

  for (let i = 0; i < list.length; i++) {
    const row: T[] = [];

    for (let j = 0; j < list[i].length; j++) row.push(list[i][j]);

    copy.push(row);
  }

  return copy;
}
