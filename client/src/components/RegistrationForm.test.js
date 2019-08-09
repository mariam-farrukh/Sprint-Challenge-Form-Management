import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import FormikRegistrationForm from './RegistrationForm.js';

describe('<FormikRegistrationForm />', () => {
    it('renders without crashing', () => {
        render(<FormikRegistrationForm />);
    });
    it("submit button click", () => {
        const { getByText } = render(<FormikRegistrationForm />);
        const submitBtn = getByText(/submit/i)
    });
})