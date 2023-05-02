import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

describe('tests for calculator js component', () => {
  test('test to check if calculator matches snapshot', () => {
    const calculatorComponent = renderer
      .create(<Calculator />)
      .toJSON();
    expect(calculatorComponent).toMatchSnapshot();
  });
});
