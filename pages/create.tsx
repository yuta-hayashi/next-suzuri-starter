import Head from 'next/head'
import { useState } from 'react'
import { useLoggedinOnlyPage } from '../hooks/useLoggedInOnlyPage'

export default function Create() {
  const { session, status } = useLoggedinOnlyPage()
  const [file, setFile] = useState('')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [response, setResponse] = useState('')

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader()
      reader.onload = () => {
        setFile(reader.result as string)
      }
      reader.readAsDataURL(event.target.files[0])
    }
  }

  const handleCreateMaterialButton = async () => {
    const params = {
      texture: file,
      title: title,
      price: price,
      products: [
        {
          itemId: 1,
        },
      ],
    }
    const res = await fetch('https://suzuri.jp/api/v1/materials', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
    setResponse(await res.json())
  }
  return (
    <>
      <Head>
        <title>Try API Page</title>
      </Head>
      {status === 'loading' ? (
        <p>Loading or not authenticated...</p>
      ) : (
        <div>
          <h1>Create Material</h1>
          <label>title</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
          <label>price</label>
          <input
            type="number"
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <label>material</label>
          <input
            type="file"
            onChange={onFileChange}
            accept="image/png, image/jpeg"
          />
          <img src={file} width="500px" />
          <button onClick={handleCreateMaterialButton}>Create Material</button>
          <p>{JSON.stringify(response)}</p>
        </div>
      )}
    </>
  )
}
