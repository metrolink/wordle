/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import SVGGrid from '../src/svgExperimental'
import { expect } from 'vitest'

describe('SVGGrid', () => {
  it('renders the grid component', () => {
    render(<SVGGrid letter={['p','i','z','z','a']}/>)
    
    expect(screen.getAllByText('p')).toBeInTheDocument(); // prints out the jsx in the App component unto the command line
  })
})