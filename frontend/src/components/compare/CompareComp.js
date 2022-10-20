
import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { ReactDOM } from 'react-dom';
import { Sparklines, SparklinesLine } from 'react-sparklines';



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
var rerender1 = true, rerender2 = true
var prev1 = "0", prev2 = "0"

const CompareComp = props => {
    const [coin, setCoin] = useState([])
    const [coin1, setCoin1] = useState([])
    const [coin2, setCoin2] = useState([])
    const [state, setState] = useState([])
    const [state2, setState2] = useState([])

    let coinListUrl = `https://api.coingecko.com/api/v3/coins/list`;
    let singleCoinUrl = `https://api.coingecko.com/api/v3/coins/`;

    useEffect(() => {
        console.log("coin list grabbing");
        axios.get(coinListUrl).then((res) => {
            setCoin(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    //function SetWindow1(selectedcoin) {
    const SetWindow1 = (selectedcoin) => {
        console.log("Calling API");
        axios.get(singleCoinUrl + selectedcoin).then((res) => {
            console.log("In API");
            setCoin1(res.data);

        }).catch((error) => {
            console.log(error)
        })
    }

    const SetWindow2 = (selectedcoin) => {
        console.log("Calling API");
        axios.get(singleCoinUrl + selectedcoin).then((res) => {
            console.log("In API");
            setCoin2(res.data);

        }).catch((error) => {
            console.log(error)
        })
    }

    //function SetWindow2(selectedcoin){
    function SetWindow22(selectedcoin) {
        useEffect(() => {
            axios.get(`https://api.coingecko.com/api/v3/coins/${selectedcoin}`).then((res) => {
                setCoin2(res.data)
            }).catch((error) => {
                console.log(error)
            })
        }, [])
    }//

    return (
        <>
            <div>
                <div>
                    <h1>Comparisons </h1>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <select id="coin1" onChange={(e => { setState({ selectedCoin1: e.target.value }) })}>
                            <option key="0" value="0">---Select Coin 1---</option>
                            {coin.map((coinget) => (
                                <option key={coinget.id} value={coinget.id}>
                                    {coinget.name}
                                </option>
                            ))
                            }
                        </select>
                        {renderSelectedCoin1(state.selectedCoin1)}
                        {console.log("printing data")}    
                        <thead>
                            <tr className="border-b border-t">
                                <th>Name</th>
                                <th>Price(CAD)</th>
                                <th>24h</th>
                                <th>24h Volume</th>
                                <th>Market</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{coin1.name}</td>
                                <td>${coin1.market_data.current_price.cad}</td>
                                <td>{coin1.market_data.price_change_percentage_24h}%</td>
                                <td>${coin1.market_data.market_cap.cad}</td>
                                <td>${coin1.market_data.total_volume.cad}</td>
                            </tr>
                        </tbody>
                    </div>

                    <div className="col-sm-6">
                        <select id="coin2" onChange={(e => { setState2({ selectedCoin2: e.target.value }) })}>
                            <option key="0" value="0">---Select Coin 2---</option>
                            {coin.map((coinget) => (
                                <option key={coinget.id} value={coinget.id}>
                                    {coinget.name}
                                </option>
                            ))
                            }
                        </select>
                        {renderSelectedCoin2(state2.selectedCoin2)}
                    
                        <thead>
                            <tr className="border-b border-t">
                                <th>Name</th>
                                <th>Price(CAD)</th>
                                <th>24h</th>
                                <th>24h Volume</th>
                                <th>Market</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{coin2.name}</td>
                                <td>${coin2.market_data.current_price.cad}</td>
                                <td>{coin2.market_data.price_change_percentage_24h}%</td>
                                <td>${coin2.market_data.market_cap.cad}</td>
                                <td>${coin2.market_data.total_volume.cad}</td>
                            </tr>
                        </tbody>
                    </div>
                </div>
            </div>
        </>
    )


    function renderSelectedCoin1(selectedcoin1) {
        if (selectedcoin1 !== "0" && selectedcoin1) {
            console.log("1 this is " + selectedcoin1)
            //console.log(props.crypto.map)

            if (prev1 !== selectedcoin1) {
                prev1 = selectedcoin1
                console.log("coin copied");
                rerender1 = true
            }

            if (rerender1) {
                rerender1 = false
                console.log("setting window")
                SetWindow1(selectedcoin1)
            }
        }
    }

    function renderSelectedCoin2(selectedcoin2) {
        if (selectedcoin2 !== "0" && selectedcoin2) {
            console.log("2 this is " + selectedcoin2)
            //console.log(props.crypto.map)

            if (prev2 !== selectedcoin2) {
                prev2 = selectedcoin2
                console.log("coin copied");
                rerender2 = true
            }

            if (rerender2) {
                rerender2 = false
                console.log("setting window")
                SetWindow2(selectedcoin2)
            }
        }
    }
}

export default CompareComp;