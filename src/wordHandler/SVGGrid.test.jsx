/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import SVGGrid from './SVGGrid'
import { validateAnswer } from './createAnswer'
import { describe, expect } from 'vitest'

describe('testing if the grid is displaying correct colors', () => {
  it('renders colors correctly', () => {

    const keyPresses = [{char:'o', color: 'lightgrey'},{char: 't', color: 'lightgrey'},{char: 't', color: 'green'},{char: 'e', color: 'green'},{char: 'r', color: 'green'}]

    const validatedKeys = validateAnswer(keyPresses,'water')


    render(<SVGGrid letter={validatedKeys} maxAttempts={5} maxChar={5}/>)


    expect(screen.getByTestId('0-1')).toHaveAttribute('fill','lightgrey');
    expect(screen.getByTestId('0-2')).toHaveAttribute('fill','green')
  })
})

describe('Checking if the word is 5 characters long', () => {
  it('has 5 characters', () => {
    const keyPresses = [{char:'o', color: 'lightgrey'},{char: 't', color: 'lightgrey'},{char: 't', color: 'green'},{char: 'e', color: 'green'},{char: 'r', color: 'green'}]

    const validatedKeys = validateAnswer(keyPresses,'water')


    render(<SVGGrid letter={validatedKeys}/>)

    expect(validatedKeys.length).toBe(5);
  })
})