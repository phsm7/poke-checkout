export function GetFromSession(key: string) {
  const value = sessionStorage.getItem(key);
  return value;
}
export function SaveInSession(key: string, value: string) {
  sessionStorage.setItem(key, value);
  return value;
}
