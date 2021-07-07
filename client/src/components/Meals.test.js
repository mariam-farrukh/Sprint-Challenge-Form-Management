import React from 'react';
import { render} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Meal from './Meals.js';

describe('<Meal />', () => {
    it('renders Meal data without crashing', () => {
        const mealData = [
            {name: 'brisket', course: 'main' },
            {name: 'potato salad', course: 'side'},
            {name: 'mac n cheese', course: 'side' },
            {name: 'soup', course: 'app'}
        ];
        const comp = render(<Meal object={mealData}/>)
    });
});