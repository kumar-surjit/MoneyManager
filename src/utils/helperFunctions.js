export function getDate(date) {
  const options = {year: '2-digit', month: '2-digit', day: '2-digit'};
  return date.toLocaleDateString('en-IN', options);
}

export function formatStringToDate(date) {
  console.log(typeof date);
  let tempDate = new Date(date);
  console.log(tempDate);
  return getDate(tempDate);
}

export function regexTest(data, pattern) {
  let regex = new RegExp(pattern);
  return regex.test(data);
}
