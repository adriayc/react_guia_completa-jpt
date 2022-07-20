import Head from 'next/head'

const Layout = ({children, pagina}) => {
  return (
    <div>
      <Head>
        <title>GuitarLA | {pagina}</title>
        <meta name="description" content="Sitio Web de venta de guitarras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <h1>Desde Layout</h1>
      {children}
    </div>
  )
}

export default Layout