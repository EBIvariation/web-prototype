// @ts-ignore
import React from "react";
import {render, screen} from '@testing-library/react';
import Footer from '../components/Footer/Footer.tsx';
import '@testing-library/jest-dom';

jest.mock('../components/Elixir/ElixirBanner', () => () => <div data-testid="elixir-banner"></div>);
jest.mock('../components/Footer/model/FooterData.tsx', () => ({
    getEVAFooterColumnsData: jest.fn(),
    getEVAFooterHeadingData: jest.fn()
}));

const mockedColumnsData = [
    {
        columnHeading: {url: 'http://example.com', text: 'Column Heading 1'},
        columnContent: [
            {url: 'http://example.com/item1', text: 'Item 1'},
            {url: 'http://example.com/item2', text: 'Item 2'}
        ]
    },
    {
        columnHeading: {url: 'http://example.com', text: 'Column Heading 2'},
        columnContent: [
            {url: 'http://example.com/item3', text: 'Item 3'},
            {url: 'http://example.com/item4', text: 'Item 4'}
        ]
    }
];

const mockedHeadingData = {
    mainHeading: {url: 'http://example.com/main', text: 'Main Heading'},
    subHeading: {url: 'http://example.com/sub', text: 'Sub Heading'}
};

describe('Footer component', () => {
    beforeAll(() => {
        require('../components/Footer/model/FooterData.tsx').getEVAFooterColumnsData.mockReturnValue(mockedColumnsData);
        require('../components/Footer/model/FooterData.tsx').getEVAFooterHeadingData.mockReturnValue(mockedHeadingData);
    });

    test('renders the ElixirBanner component', () => {
        render(<Footer/>);
        expect(screen.getByTestId('elixir-banner')).toBeInTheDocument();

        // Assert main heading and sub heading
        const mainHeadingLink = screen.getByRole('link', { name: "" });
        expect(mainHeadingLink).toHaveAttribute('href', 'http://example.com/main');
        expect(screen.getByText('Sub Heading')).toBeInTheDocument();

        // Assert footer data (text and links)
        expect(screen.getByText('Column Heading 1')).toBeInTheDocument();
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
        expect(screen.getByText('Column Heading 2')).toBeInTheDocument();
        expect(screen.getByText('Item 3')).toBeInTheDocument();
        expect(screen.getByText('Item 4')).toBeInTheDocument();

        // Assert footer meta
        expect(screen.getByText('EMBL-EBI, Wellcome Genome Campus, Hinxton, Cambridgeshire, CB10 1SD, UK.')).toBeInTheDocument();
        expect(screen.getByText('Tel: +44 (0)1223 49 44 44')).toBeInTheDocument();
        expect(screen.getByText('Full Contact Details')).toBeInTheDocument();
        expect(screen.getByText(/Copyright/)).toBeInTheDocument();
        expect(screen.getByText('European Molecular Biology Laboratory')).toBeInTheDocument();
        expect(screen.getByText('Terms of use')).toBeInTheDocument();

    });
});
