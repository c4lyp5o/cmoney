import { useState, useRef } from 'react'

import { Spinner } from 'react-awesome-spinners'
import useSWR from 'swr'

import { Form, Submit, SelectField, NumberField } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

const fetcher = (url) => fetch(url).then((res) => res.json())

const MainPage = () => {
  const { data, error } = useSWR(
    'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json',
    fetcher
  )
  const [exRate, setExRate] = useState(0)
  const [total, setTotal] = useState(0)
  const [change, setChange] = useState(0)
  const to = useRef(0)
  const from = useRef(0)

  const onSelection = (e) => {
    if (from.current === 0 || to.current === 0) {
      console.log('no from curr')
      // setErrorMsg('Please select both currencies')
      return
    }
    to.current = e.target.value
    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from.current}/${to.current}.json`
    fetcher(url).then((res) => {
      setExRate(Object.values(res)[1])
    })
  }

  const onSubmit = (data) => {
    // console.log(data)
    setTotal(data.from * exRate)
  }

  const reset = () => {
    setTotal(0)
    setChange(0)
    setExRate(0)
    // setErrorMsg('')
    to.current = 0
    from.current = 0
  }

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
      <p className="text-center">Free money conversion service</p>
      <p className="text-center">
        Conversion support: {Object.keys(data).length} currencies
      </p>
      <Form onSubmit={onSubmit}>
        <div className="bg-slate-500 text-center">
          <div>
            <SelectField
              name="currFrom"
              onChange={(e) => {
                // setErrorMsg('')
                from.current = e.target.value
                onSelection(e)
              }}
              value={from.current}
              required
            >
              <option value="0">Please choose..</option>
              {Object.keys(data).map((k, index) => (
                <option key={index} value={k}>
                  {k} - {data[k]}
                </option>
              ))}
            </SelectField>
            <NumberField name="from" value={change} />
          </div>
          <div>
            <SelectField
              name="currTo"
              onChange={(e) => {
                to.current = e.target.value
                onSelection(e)
              }}
              value={to.current}
              required
            >
              <option>Please choose..</option>
              {Object.keys(data).map((k, index) => (
                <option key={index} value={k}>
                  {k} - {data[k]}
                </option>
              ))}
            </SelectField>
            <NumberField name="to" value={total} />
            {/* {errorMsg && <div className="text-danger">{errorMsg}</div>} */}
            {exRate > 0 && (
              <div>{`Exchange rate for ${from.current} to ${
                to.current
              } is ${exRate} for ${new Date()}`}</div>
            )}
          </div>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
            onClick={reset}
          >
            Reset
          </button>
          <Submit className="inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">
            Convert
          </Submit>
        </div>
      </Form>
    </>
  )
}

export default MainPage
