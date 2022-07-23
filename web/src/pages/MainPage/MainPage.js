import { Spinner } from 'react-awesome-spinners'
import useSWR from 'swr'

import { MetaTags } from '@redwoodjs/web'

const fetcher = (url) => fetch(url).then((res) => res.json())

const MainPage = () => {
  const { data, error } = useSWR(
    'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json',
    fetcher,
    {
      Suspense: true,
    }
  )

  if (!data)
    return (
      <div>
        <Spinner />
      </div>
    )

  if (error) return <div>Failed to load</div>

  return (
    <>
      <MetaTags title="Main" description="Main page" />
      <p>Free money conversion service</p>
      <p className="text-center">
        Conversion support: {Object.keys(data).length} currencies
      </p>
      <select>
        <option>Please choose..</option>
        {Object.keys(data).map((k, index) => (
          <option key={index} value={k}>
            {k} ({data[k].symbol})
          </option>
        ))}
      </select>
    </>
  )
}

export default MainPage
