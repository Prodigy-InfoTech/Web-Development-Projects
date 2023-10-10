import React from 'react'

function CoinInfoContainer({titleName, data, price}) {
  return (
    <div className=" bg-white/5 w-[360px] sm:w-[420px] flex justify-between text-sm sm:text-base py-2 px-3 rounded">
      <h2>{titleName}</h2>
      <span>
        {data}
        {price && " INR"}
      </span>
    </div>
  );
}

export default CoinInfoContainer