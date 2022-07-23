import { render } from '@redwoodjs/testing/web'

import MakananPage from './MakananPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MakananPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MakananPage />)
    }).not.toThrow()
  })
})
