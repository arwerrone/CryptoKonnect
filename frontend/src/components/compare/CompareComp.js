
import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
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
var rerender1 = true, rerender2 = true
var prev1 = "0", prev2 = "0"

const CompareComp = props => {
    const [coin, setCoin] = useState([])
    const [coin1, setCoin1] = useState([])
    const [coin2, setCoin2] = useState([])
    const [state, setState] = useState([])
    const [state2, setState2] = useState([])

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/list`).then((res) => {
            setCoin(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    //function SetWindow1(selectedcoin) {
    const SetWindow1 = (selectedcoin) => {
        console.log("Calling API")
        useEffect(() => {
            axios.get(`https://api.coingecko.com/api/v3/coins/${selectedcoin}`).then((res) => {
                console.log("In API");
                setCoin1(res.data);
            }).catch((error) => {
                console.log(error)
            })
        }, [])
        console.log("In API");
    }

    //function SetWindow2(selectedcoin){
    function SetWindow2(selectedcoin) {
        useEffect(() => {
            axios.get(`https://api.coingecko.com/api/v3/coins/${selectedcoin}`).then((res) => {
                setCoin2(res.data)
                //console.log(res.data)
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
                        {renderSelectedCoin1(state2.selectedCoin2)}
                    </div>
                </div>

            </div>
        </>
    )



    function renderSelectedCoin1(selectedcoin) {

        if (selectedcoin !== "0" && selectedcoin) {

            console.log(selectedcoin)
            //console.log(props.crypto.map)

            if (prev1 !== selectedcoin) {
                prev1 = selectedcoin
                rerender1 = true
            }

            if (rerender1) {
                rerender1 = false
                console.log("setting window")
                SetWindow1(selectedcoin)

            }



        }

    }


}




export default CompareComp;