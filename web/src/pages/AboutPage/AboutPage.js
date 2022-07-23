import { useState } from 'react'

import { TextField, Form } from '@redwoodjs/forms'
// import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  const Data = [
    'Kacang',
    'Kacang panjang',
    'Kacang hijau',
    'Kacang merah',
    'Kacang kuning',
  ]
  const [pressedKey, setPressedKey] = useState(0)
  const handleChange = (e) => {
    setPressedKey(e.target.value)
    if (pressedKey >= Data.length - 1) {
      alert('You have reached the end of the list')
      e.target.value = 0
      setPressedKey(0)
    }
    console.log(e.target.value)
  }
  return (
    <>
      <MetaTags title="About" description="About page" />

      <h1>Page Makanan</h1>

      <p>ini adalah page makanan. Sila isi number</p>
      <Form>
        <TextField name="number" onChange={handleChange} />
      </Form>
      <p>The number is {pressedKey}</p>
      <p>Makanan yang saya dapat ialah {Data[pressedKey]}</p>
    </>
  )
}

export default AboutPage
