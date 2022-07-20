import Head from 'next/head'
// Importar componentes
import Header from './Header'
import Footer from './Footer'

const Layout = ({children, pagina}) => {
  return (
    <div>
      <Head>
        <title>GuitarLA | {pagina}</title>
        <meta name="description" content="Sitio Web de venta de guitarras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <h1>Desde Layout</h1>
      {children}

      <Footer />
    </div>
  )
}

export default Layout