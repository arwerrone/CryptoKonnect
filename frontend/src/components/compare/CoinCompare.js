import axios from 'axios'
import { useEffect, useState } from 'react';

export const CoinCompare = () => {

    const [coin, setCoin] = useState({})




    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/list`)
            .then(res => {
                //coinList = res.data.items.map((item) => {
                setCoin(res.data.items.map((item) => {

                    return {
                        "id": item.id,
                        "name": item.name
                    }
                }))
            }).catch(err => { console.log('Coin compare error', err) })
    }, [])

return(coin)

}


export default CoinCompare