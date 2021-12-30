export default function desmaskPhone(value: string) {
  return value
    .replace('(', '')
    .replace(')', '')
    .replace(' ', '')
    .replace('-', '');
}
