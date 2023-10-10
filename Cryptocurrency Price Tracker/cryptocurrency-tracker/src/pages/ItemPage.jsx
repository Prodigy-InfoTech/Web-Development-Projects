import React from "react";
import iteamStore from "../store/itemStore";
import { useParams } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,

} from "recharts";
import CoinInfoContainer from "../components/CoinInfoContainer";

const gData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function ItemPage() {
  const store = iteamStore();
  const params = useParams();


  React.useEffect(() => {
    store.fetchdata(params.id);

  }, []);
  console.log(store)

  return (
    <div className="px-5 pt-3 pb-10">
      {store.resData ? (
        <div className="flex flex-col gap-5 justify-center align-middle text-white">
          <header className="flex align-middle gap-3">
            <img src={store.resData.image.large} alt="" className="h-[60px]" />
            <h2 className="text-center my-auto text-3xl font-semibold">
              {store.resData.name} ({store.resData.symbol})
            </h2>
          </header>
          <AreaChart
            width={600}
            height={400}
            data={store.graphData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="Date" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Price"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
          <div className=" flex flex-col justify-center align-middle m-auto gap-2">
            <CoinInfoContainer
              titleName={"Current Price"}
              data={store.resData.market_data.current_price.inr}
              price={true}
            />
            <CoinInfoContainer
              titleName={"Market cap rank"}
              data={store.resData.market_data.market_cap_rank}
            />
            <CoinInfoContainer
              titleName={"Max price in 24h"}
              data={store.resData.market_data.high_24h.inr}
              price={true}
            />
            <CoinInfoContainer
              titleName={"Min price in 24h"}
              data={store.resData.market_data.low_24h.inr}
              price={true}
            />
            <CoinInfoContainer
              titleName={"Market cap"}
              data={store.resData.market_data.market_cap.inr}
            />
            <CoinInfoContainer
              titleName={"Price change in 24h"}
              data={store.resData.market_data.price_change_24h_in_currency.inr}
              price={true}
            />
            <CoinInfoContainer
              titleName={"Price change in 1 year"}
              data={
                store.resData.market_data.price_change_percentage_1y_in_currency
                  .inr
              }
              price={true}
            />
            <CoinInfoContainer
              titleName={"Circulating supply"}
              data={store.resData.market_data.circulating_supply}
            />
          </div>
        </div>
      ) : (
        <div className="m-auto flex mt-12">
          <div
            class="inline-block h-12 w-12 text-white/70 animate-spin rounded-full border-4 border-solid border-current m-auto border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemPage;
