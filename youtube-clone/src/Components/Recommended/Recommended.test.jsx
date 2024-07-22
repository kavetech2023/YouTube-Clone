import React from 'react';
import { render } from '@testing-library/react';
import Recommended from './Recommended';

describe('Recommended Component', () => {
    it('renders without crashing', () => {
        render(<Recommended />);
    });

    it('renders the correct category ID', () => {
        const categoryId = '0';
        const { getByText } = render(<Recommended categoryId={categoryId} />);
        expect(getByText(`Category ID: ${categoryId}`)).toBeInTheDocument();
    });

    it('renders a link to the category page', () => {
        const categoryId = '21';
        const { getByText } = render(<Recommended categoryId={categoryId} />);
        const linkElement = getByText('Go to Category');
        expect(linkElement).toBeInTheDocument();
        expect(linkElement.getAttribute('href')).toBe(`/category/${categoryId}`);
    });
});