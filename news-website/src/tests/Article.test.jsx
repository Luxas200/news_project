import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Article from '../components/ArticleComponents/Article'
import { expect } from 'vitest'

describe('Article Component', () => {
    test('renders title and content', () => {
        render(
            <MemoryRouter>
                <Article id={1} title='Test Title' content='Test Content' />
            </MemoryRouter>
        );
        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByText('Test Content')).toBeInTheDocument()
    })
})
    test('contains a "Read More" link with the correct URL', () => {
        render(
            <MemoryRouter>
                <Article id={1} title='Test Title' content='Test Content' />
            </MemoryRouter>
        );
        const readMoreLink = screen.getByText(/read more/i);
        expect(readMoreLink.getAttribute('href')).toBe('/articles/1')
    })