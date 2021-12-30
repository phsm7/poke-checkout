export const phoneMask = (value: string) => {
  return value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{0})(\d)/, '$1($2') // inicia o texto com (
    .replace(/(\d{2})(\d)/, '$1)$2') // fecha o ) depois de 2 digitos
    .replace(/(\d{5})(\d{1,2})/, '$1-$2') // após 5 digitos ele poe o -
    .replace(/(-\d{4})\d+?$/, '$1'); // não deixa escrever mais nada após 4 dígitos depois do -
};
