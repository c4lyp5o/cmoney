import { Spinner } from 'react-awesome-spinners'
import useSWR from 'swr'

import { Form, Submit, SelectField, NumberField } from '@redwoodjs/forms'

const fetcher = (url) => fetch(url).then((res) => res.json())

export const Loading = () => {
  return (
    <div>
      <Spinner />
    </div>
  )
}

export const Empty = () => <div>Empty</div>

export const Failure = ({ errorGettingCurrencies }) => (
  <div style={{ color: 'red' }}>Error: {errorGettingCurrencies.message}</div>
)

export const Success = ({ currencySupported }) => {
  const { currencySupported: data, errorGettingCurrencies: error } = useSWR(
    'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json',
    fetcher,
    {
      Suspense: true,
    }
  )
  return <div>{JSON.stringify(currencySupported)}</div>
}
