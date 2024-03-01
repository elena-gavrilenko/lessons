// export function shuffle(arr1, arr2) {
//   arr1.reduce((acc, el, i) => {
//     acc.push(el, arr2[i]);
//     return acc;
//   }, []);
// }

export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const getPagesArray = (totalCount, limit) => {
  let result = [];
  for (let i = 0; i < totalCount; i++) {
    result.push(i + 1);
  }
  return result;
};
