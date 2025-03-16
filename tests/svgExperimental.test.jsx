/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import SVGGrid from '../src/svgExperimental'
import { expect } from 'vitest'

describe('testing if the grid is displaying correct colors', () => {
  it('renders colors correctly', () => {
    render(<SVGGrid letter={['p','i','z','z','a']}/>)
    
    expect(screen.getByTestId('0-2')).toHaveAttribute('fill','lightgrey');
    expect(screen.getByTestId('0-3')).toHaveAttribute('fill','lightgrey')
  })
})