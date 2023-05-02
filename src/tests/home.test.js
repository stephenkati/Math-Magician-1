import renderer from 'react-test-renderer';
import Home from '../components/Home';

describe('test for home', () => {
  test('test if home matches', () => {
    const homeComponent = renderer
      .create(<Home />)
      .toJSON();
    expect(homeComponent).toMatchSnapshot();
  });
});
