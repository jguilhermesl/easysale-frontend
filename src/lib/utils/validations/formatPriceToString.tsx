export const formatPriceToStringBR = (number) => {
  if (!number) return '';
  const cleanedValue = number.replace(/[^\d.,]/g, '');
  const parts = cleanedValue.split(/[.,]/);
  const integerPart = parts[0] || '0';
  const decimalPart = parts[1] || '';

  const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  if (decimalPart.length > 0) {
    return `R$ ${formattedIntegerPart},${decimalPart}`;
  } else {
    return `R$ ${formattedIntegerPart}`;
  }
};