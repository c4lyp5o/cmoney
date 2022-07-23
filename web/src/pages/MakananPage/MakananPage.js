import { useState } from 'react'

import { TextField, Form } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const Data = {
  1: 'Kacang',
  2: 'Kacang panjang',
  3: 'Kacang hijau',
  4: 'Kacang merah',
  5: 'Kacang kuning',
}

const MakananPage = () => {
  const [pressedKey, setPressedKey] = useState('')
  return (
    <>
      <MetaTags title="Makanan" description="Makanan page" />

      <h1>MakananPage</h1>

      <p>
        Find me in
        <code>./web/src/pages/MakananPage/MakananPage.js</code>
      </p>

      <h1>Page Makanan</h1>

      <p>ini adalah page makanan. Sila isi number</p>
      <TextField name="number" />
    </>
  )
}

export default MakananPage
