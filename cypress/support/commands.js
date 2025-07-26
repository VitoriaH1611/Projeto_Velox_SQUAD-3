Cypress.Commands.add('gerarCpf', (comMascara = false) => {
  const rand = () => Math.floor(Math.random() * 9);
  const mod11 = (nums) => {
    const soma = nums.reduce((acc, val, i) => acc + val * ((nums.length + 1) - i), 0);
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  const nums = Array.from({ length: 9 }, rand);
  nums.push(mod11(nums));
  nums.push(mod11(nums));

  const cpf = nums.join('');

  if (comMascara) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  return cpf;
});