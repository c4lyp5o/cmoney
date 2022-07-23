import { render } from '@redwoodjs/testing/web'

import MainPage from './MainPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MainPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MainPage />)
    }).not.toThrow()
  })
})
