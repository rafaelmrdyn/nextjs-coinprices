import Http from '../helper/http'
import Layout from './../components/Layout'
import Prices from '../components/Prices'

const Index = ({coins}) => {

    return (
        <Layout>
            <h1>Top 30 Ranked Coins</h1>
            <Prices coins={coins}/>
        </Layout>
    )
}

Index.getInitialProps = async () => {
    const {coins} = await Http.getCoins()
    return {
        coins
    }
}

export default Index