import React from 'react'
import loading3 from './loading3.gif'

// export class Spinner extends Component {
  // render() {
  
    // convert it into function based component
    const Spinner = ()=>{
    return (
      <div className="text-center">
        <img className="my-3" src={loading3} alt="loading" />
      </div>
    )
  // }
}

export default Spinner