import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {

  // //props types
  // static defaultProps = {
  //   country: "in",
  //   pageSize: 5,
  //   category: "general"
  // }

  // static propsTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string
  // }


  // convert it into function based components
  const News = (props)=>{

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)


  // capitalize function
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // 1st constructor - its runs sabse phle
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     articles: [],
  //     loading: true,
  //     page:1,
  //     totalResults: 0
  //   };
  //   document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsApp`;
  // }

  const updateNews = async () =>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  // 3rd componentDidMount is run after the render method run or run at last
  // ye hi api se news lekar ayega maam
  // componentDidMount = async()=>{
  //   updateNews();
  // }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsApp`;
    updateNews();
    //eslint-disable-next-line
  }, [])
  

  // const handlePreviousClick = async ()=>{
  //   setPage(page - 1);
  //   updateNews();
  // }

  // const handleNextClick = async ()=>{
  //   setPage(page + 1);
  //   updateNews();
  // }


  // setPage is asynchronous fn therefore it takes some ms time to change page but url is fetch fastly therefore we manually do it in url then setPage = page + 1
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

  // 2nd then render runs
  // render() {
    
    return (
      <>
        <h1 className="text-center" style={{margin: '35px 0px', marginTop: '90px'}}>NewsApp - Top Headlines</h1>

          {/* loading GIF */}
          {loading && <Spinner/>}

          {/* Infinite scroll */}
          < InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
          >

            <div className="container">
                  <div className="row">
                    {/* {!this.state.loading && this.state.articles.map((element) => { */}
                    {articles.map((element) => {
                      return <div className="col-md-4" key={element.url}>
                        <NewsItem
                          // title={element.title?element.title.slice(0,45):""}
                          // description={element.description?element.description.slice(0,70):""}
                          title={element.title?element.title:""}
                          description={element.description?element.description:""}
                          imageUrl={element.urlToImage}
                          newsUrl={element.url}
                          author={element.author}
                          date={element.publishedAt}
                          source={element.source.name}
                        />
                      </div>;
                    })}
                  </div>
            </div>
            </InfiniteScroll>

            {/* Previous and next buttons */}
            {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div> */}
      </>
    );
  }
// }

News.defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general"
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News;
