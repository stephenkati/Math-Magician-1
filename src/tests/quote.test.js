import renderer from 'react-test-renderer';
import FetchQuote from '../api/Quote';

describe('test if quote matches snapshot', () => {
  test('test if quote is a match', () => {
    const quoteComponent = renderer
      .create(<FetchQuote />)
      .toJSON();
    expect(quoteComponent).toMatchSnapshot();
  });
});
