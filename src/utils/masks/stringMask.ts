export const stringMask = (value: string) => {
  return value.replace(/[0-9]/g, ''); // substitui qualquer caracter que seja numero por nada
};
