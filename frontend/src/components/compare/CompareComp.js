
import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react';
import { ReactDOM } from 'react-dom';

//import CoinCompare from './CoinCompare'

// const CompareComp = ({coinCompare}) => {
//     const [setCoin, selectedCoin] = useState([]);

//     const addToCompare = (item) => {
//         setCoin((selectedCoin)=>{
//             setCoin((selectedCoin) => [...selectedCoin, item])
//         })
//     }

//     const removeFromCompare = (item) => {
//         const filteredItems = selectedCoin.filter((coinCompare)=> coinCompare.id !== item.id)
//         setCoin((selectedCoin)=>filteredItems)
//     }


//     return (
//         <div>
//             <div>
//                 <h1>Comparisons </h1>
//             </div>

//         </div>
//     )
// }



// export default  CompareComp;



// class CoinList extends React.Component {
//     generateList() {
//         useEffect(()=>{
//         axios.get(`https://api.coingecko.com/api/v3/coins/list`)
//             .then(res => {
//                 coinList = res.data.items.map((item) => {
//                     return {
//                         "id": item.id,
//                         "name": item.name
//                     }
//                 })
//             }).catch(err => { console.log('Coin compare error', err) })
//         })
//         return coinList
//     }
// }
// let coinList = CoinList.generateList()


//let coinList;
// const [coin, setCoin] = useState({})

// class CoinList extends React.Component {

//     generateList(){
//     useEffect(() => {
//         axios.get(`https://api.coingecko.com/api/v3/coins/list`)
//             .then(res => {
//                 // const data = res.data.items.map((item) => {
//                 //     return {
//                 //         "id": item.id,
//                 //         "name": item.name
//                 //     }
//                 // })
//                 // coinList = data
//                 setCoin(res.data)
//             }).catch(err => { console.log('Coin compare error', err) })
//     }, [])
// }
//     //return coinList

// }




// class CoinDropdown extends React.Component {
//     render() {
//         return (
//             <select>
//                 {this.coinList.map(list => (
//                     <option key={list} value={list}>
//                         {list}
//                     </option>
//                 ))}
//             </select>
//         )
//     }

// }


// class CompareComp extends React.Component {

//     render() {
//         //coinList = CoinList()
//         return (
//             <div>
//                 <div>
//                     <h1>Comparisons </h1>
//                 </div>
//                 <select>
//                     {coinList.map(list => (
//                         <option key={list} value={list}>
//                             {list}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//         )
//     }
// }

function CompareComp() {
    const [coin, setCoin] = useState([])
    const [state, setState] = useState([])

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/list`).then((res) => {
            setCoin(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <>
            <div>
                <div>
                    <h1>Comparisons </h1>
                </div>

                <table>
                    <select id="coin1" onChange={(e => { setState({ selectedCoin: e.target.value }) })}>
                        <option key="0" value="0">---Select Coin 1---</option>
                        {coin.map((coinget) => (
                            <option key={coinget.id} value={coinget.id}>
                                {coinget.name}
                            </option>
                        ))
                        }
                    </select>
                    <select id="coin2">
                        <option key="0" value="0">---Select Coin 2---</option>

                        {coin.map((coinget) => (
                            <option key={coinget.id} value={coinget.id}>
                                {coinget.name}
                            </option>
                        ))
                        }
                    </select>
                </table>
                {renderSelectedCoin1(state.selectedCoin)}
                <table>

                </table>

            </div>
        </>
    )

    function renderSelectedCoin1(selectedcoin) {

        if (selectedcoin !== "0") {

            
            return (
                selectedcoin
            )

        }

    }


}




export default CompareComp;