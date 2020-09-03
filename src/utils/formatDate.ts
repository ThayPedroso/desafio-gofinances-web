function formatDate(value: Date): string {
  const d = new Date(value);
  return `${`00${d.getDate()}`.slice(-2)}/${`00${d.getMonth() + 1}`.slice(
    -2,
  )}/${d.getFullYear()}`;
}

export default formatDate;
