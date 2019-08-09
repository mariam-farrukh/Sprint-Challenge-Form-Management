import React from 'react';
import { render} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Data from './Data.js';

describe('<Data />', () => {
    it('Data renders without crashing', () => {
        render(<Data />);
    });
    it('renders Meal title without crashing', () => {
        const wrapper = render(
        <h1>Meals</h1>
        );
        const element = wrapper.queryByText(/meals/i);
        expect(element).toBeTruthy();
    });
});