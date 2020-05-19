import { useEffect, useState } from "react"

import Http from '../helper/http'
import Layout from './../components/Layout'
import Prices from '../components/Prices'

const Index = () => {
    const [coins, setCoins] = useState([])
    const getCoins = async () => {
        const data = await Http.getCoins()
        setCoins(data.coins)
    }
    useEffect(() => {
        getCoins()
    }, [])

    return (
        <Layout>
            <h1>Top 30 Ranked Coins</h1>
            <Prices coins={coins}/>
        </Layout>
    )
}

// Index.getInitialProps = async () => {
//     const data = await Http.getCoins()
//     return data
// }

export default Index