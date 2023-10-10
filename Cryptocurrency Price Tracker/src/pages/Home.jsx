import React from "react";
import { Link } from "react-router-dom";
import homeStore from "../store/homeStore";
import btcIcon from "./image.png";

function Home() {
  const store = homeStore();
  React.useEffect(() => {
    store.fetchCoin();
  }, []);

  return (
    <div className="pt-2">
      <div className="flex bg-white/10 w-fit rounded mx-10 align-middle mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white/60 m-auto ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input
          type="text"
          value={store.query}
          onChange={(e) => store.setQuery(e)}
          className=" bg-transparent outline-none text-white/80 px-2 py-1"
        />
      </div>
      <h2 className=" text-white text-xl flex justify-center pb-3">Tranding Coins</h2>
      <div className="flex flex-wrap gap-2 justify-center">
        {store.coins.map((coin) => {
          return (
            <div key={coin.id} className=" w-fit">
              <Link to={`/${coin.id}`}>
                <div className="v bg-white/10 w-[280px] h-[150px] flex rounded-[10px] p-5 justify-between">
                  <div className=" flex flex-col justify-center">
                    <img src={coin.image} alt="" className=" m-auto h-[60px]" />
                    <div className=" text-sm text-center text-white font-semibold">
                      {coin.name}
                    </div>
                  </div>
                  <div className="flex flex-col h-5">
                    <div className="flex gap-x-1 text-white/80 font-semibold">
                      <img src={btcIcon} alt="" height="23" width="23" />
                      {coin.priceBtc}
                    </div>
                    <div className="flex justify-end text-white/40 font-bold text-sm">
                      ₹ {coin.priceInr}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
