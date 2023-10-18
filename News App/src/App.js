import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'

import { 
    BrowserRouter,
    Route,
    Routes, 
} from "react-router-dom";

    // convert it into function based components
// export default class App extends Component {

const App = ()=>{

  const pageSize = 5
  const apiKey = process.env.REACT_APP_NEWS_API
  
  // state = {
  //   progress: 0
  // }

  const [progress, setProgress] = useState(0)

  // setProgress = async (progress) =>{
  //   this.setState({progress: progress})
  // }

  // render method first compile js and render html written below on screen
  // render() {
    return (
      <div>
        <BrowserRouter>

          <NavBar />

          <LoadingBar
            height={2}
            color='#f11946'
            progress={progress}
         />

          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"> </News>}></Route>
            <Route exact path="/Business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"> </News>}></Route>
            <Route exact path="/Entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"> </News>}></Route>
            <Route exact path="/General" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"> </News>}></Route>
            <Route exact path="/Health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"> </News>}></Route>
            <Route exact path="/Science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"> </News>}></Route>
            <Route exact path="/Sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"> </News>}></Route>
            <Route exact path="/Technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"> </News>}></Route>
          </Routes>

        </BrowserRouter>
      </div>
    );
  }
// }

export default App