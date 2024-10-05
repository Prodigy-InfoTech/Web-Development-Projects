import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function WatchListPrice({stock}){
    return(
        <div className="stockPercent d-flex">
                
        <div className={stock.isDown ? "red" : "green"}>{stock.randomNumber}</div>
        {
            stock.isDown ? (
                <KeyboardArrowDownIcon className="red" />
            ) : (
                <KeyboardArrowUpIcon className="green" />
            )
        }
        <span className={(stock.isDown ? "red " : "green ")+"small mt-1 ms-2"}>{stock.percentageDifference}</span>
    </div>
    )
}