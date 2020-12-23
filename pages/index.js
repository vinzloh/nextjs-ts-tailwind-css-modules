import Head from 'next/head'
import Button from 'components/Button'

export default function Home() {
  return (
    <div data-container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button />
      </main>
    </div>
  )
}
