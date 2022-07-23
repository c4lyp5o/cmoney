import { Link, routes } from '@redwoodjs/router'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <header className="text-center">
        <h1>
          <Link to={routes.main()}>CMoney</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.main()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default DefaultLayout
