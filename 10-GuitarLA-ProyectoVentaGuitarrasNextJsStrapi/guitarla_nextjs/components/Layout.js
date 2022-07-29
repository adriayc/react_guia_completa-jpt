import Head from 'next/head'
// Importar componentes
import Header from './Header'
import Footer from './Footer'

const Layout = ({children, pagina, guitarra}) => {

  // console.log(guitarra)

  return (
    <div>
      <Head>
        <title>GuitarLA | {pagina}</title>
        <meta name="description" content="Sitio Web de venta de guitarras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        guitarra={guitarra}
      />

      {children}

      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  guitarra: null
}

export default Layout