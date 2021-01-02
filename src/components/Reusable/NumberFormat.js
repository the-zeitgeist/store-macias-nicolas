const NumberFormart = ({ number, separator, distance }) => {
  if (!number || Number.isNaN(number)) { return <></> }

  const splitBy = separator || ',';
  const splitEach = distance || 3;
  const result = number.toString().split('').reverse().reduce((acc, num, i, _this) => {
    const position = i + 1;
    const includesSeparator = ((position % splitEach) === 0) && position < _this.length;
    const newValue = `${includesSeparator ? splitBy : ''}${num}`
    return [newValue, ...acc]
  }, []).join('');

  return <>{result}</>
}

export default NumberFormart