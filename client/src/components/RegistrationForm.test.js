import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import FormikRegistrationForm from './RegistrationForm.js';
import { subtract } from "./RegistrationForm.js";

describe('<FormikRegistrationForm />', () => {
    it('Registration form renders without crashing', () => {
        render(<FormikRegistrationForm />);
    });
    it("submit button click", () => {
        const { getByText } = render(<FormikRegistrationForm />);
        const buttonClick = getByText(/submit/i)
        fireEvent.click(buttonClick);
        getByText(/meals/i);
    });
    it('renders Meal title without crashing', () => {
        const wrapper = render(
          <h1>Meals</h1>
        );
        const element = wrapper.queryByText(/meals/i);
        expect(element).toBeTruthy();
    });
    test("subtract function", () => {
        expect(subtract(2, 1)).toBe(1);
        expect(subtract(1, 7)).toEqual(-6);
        expect(subtract(5, 2)).toBe(3);
    });
})