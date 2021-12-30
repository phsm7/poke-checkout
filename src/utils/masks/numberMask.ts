export const numberMask = (value: string) => {
  return value.replace(/\D/g, ''); // substitui qualquer caracter que nao seja numero por nada
};
