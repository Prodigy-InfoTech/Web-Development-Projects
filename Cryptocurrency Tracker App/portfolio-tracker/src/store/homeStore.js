import axios from "axios";
import { create } from "zustand";
import debounce from "../helper/debounce";

const homeStore = create((set) => ({
    coins: [],
    tranding: [],
    query: '',

    setQuery: (e)=>{
        set({query: e.target.value})
        homeStore.getState().searchCoins()
    },

    searchCoins: debounce( async ()=> {
        const {query, tranding} = homeStore.getState()
        if(query.length > 2) {
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/search?query=${query}`
        )

        const coins = res.data.coins.map((coin)=> {
            return{
                name: coin.name,
                image: coin.large,
                id: coin.id
            }
        })

        set({coins})
        console.log(res)
    } else{
        set({coins: tranding})
    }
    }, 500),

  fetchCoin: async ()=>{
    const [res, btcRes] = await Promise.all([
      axios.get("https://api.coingecko.com/api/v3/search/trending"),
      axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr")
    ]);

    const btcPrice = btcRes.data.bitcoin.inr;
    // console.log(res.data.coins)

    const coins = res.data.coins.map((coin)=> {
        return {
            name: coin.item.name,
            image: coin.item.small,
            id: coin.item.id,
            priceBtc: coin.item.price_btc.toFixed(10),
            priceInr: (coin.item.price_btc * btcPrice).toFixed(6)
        }
    })
    // console.log(coins)
    set({coins, tranding: coins})
  }
}))

export default homeStore;
