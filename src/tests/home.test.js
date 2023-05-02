import renderer from 'react-test-renderer';
import Home from '../components/home';

describe('test for home', () => {
  test('test if home matches', () => {
    const homeComponent = renderer
      .create(<Home />)
      .toJSON();
    expect(homeComponent).toMatchSnapshot();
  });
});
