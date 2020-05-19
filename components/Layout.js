import Head from 'next/head'

import Header from './Header'

const Layout = ({children}) => (
    <>
        <Head>
            <title>Coin Prices</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
        </Head>
        <Header/>
        <div className="container">
            {children}
        </div>
    </>
)

export default Layout