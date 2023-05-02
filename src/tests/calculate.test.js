import calculate from '../logic/calculate';

describe('test for calculate js file', () => {
  test('when equals button is clicked', () => {
    const output = calculate({
      total: '3',
      next: '2',
      operation: '+',
    }, '=');
    expect(output.total).toBe('5');
  });
  test('when AC button is clicked', () => {
    const output = calculate({
      total: '6',
      next: '2',
      operation: '',
    }, 'AC');
    expect(output.total).toEqual(null);
  });
});
