import { render } from '@testing-library/react';

import SndlAppLib from './sndl-app-lib';

describe('SndlAppLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SndlAppLib />);
    expect(baseElement).toBeTruthy();
  });
});
