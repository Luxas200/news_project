import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Modal from '../components/PageComponents/Modal'
import { describe, expect } from 'vitest'

describe('Modal', () => {
    test('rendrs children when show is true', () => {
        render(
            <Modal show={true} onClose={()=> {}}>
                <p>Modal content</p>
            </Modal>

        )
        expect(screen.getByText(/modal content/i)).toBeInTheDocument();
    })
    
})