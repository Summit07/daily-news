import React, { Component } from "react";
import NewsItem from "../NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

// business entertainment general health science sports technology

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    catagory: "health",
  };
  static propTypes = {
    counrty: PropTypes.string,
    pageSize: PropTypes.number,
    catagory: PropTypes.string,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.catagory
    )}- Daily Dose`;
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&catagory=${this.props.catagory}&apiKey=93880a8c47cf42999224b0b92d5feabe&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
    // let url = `https://newsapi.org/v2/top-headlines?country=us&catagory=${this.props.catagory}&apiKey=93880a8c47cf42999224b0b92d5feabe&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parseData = await data.json();
    // this.setState({
    //   articles: parseData.articles,
    //   totalResults: parseData.totalResults,
    //   loading: false,
    // });
  }

  handleNext = async () => {
    console.log("hanledNext");
    // if (
    //   !this.state.page + 1 >
    //   Math.ceil(this.state.totalResults / this.state.pageSize)
    // ) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=us&catagory=${this.props.catagory}&apiKey=93880a8c47cf42999224b0b92d5feabe&page=${
    //     this.state.page + 1
    //   }&pageSize=${this.props.pageSize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parseData = await data.json();
    //   this.setState({
    //     articles: parseData.articles,
    //     page: this.state.page + 1,
    //     loading: false,
    //   });
    // }
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  handlePrevious = async () => {
    console.log("handlePrevious");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&catagory=${this.props.catagory}&apiKey=93880a8c47cf42999224b0b92d5feabe&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parseData = await data.json();
    // this.setState({
    //   articles: parseData.articles,
    //   page: this.state.page - 1,
    //   loading: false,
    // });
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  render() {
    return (
      <div className="container my-3  ">
        <h1 className="text-center" style={{ marginTop: "90px" }}>
          Daily News Dose! on {this.capitalizeFirstLetter(this.props.catagory)}
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row my-4">
          {this.state.articles.map((e) => {
            return (
              <div className="col-md-4 ">
                <NewsItem
                  key={e.source.id}
                  title={e.title ? e.title.slice(0, 40) : ""}
                  description={e.description ? e.description.slice(0, 100) : ""}
                  imageUrl={e.urlToImage}
                  newsUrl={e.url}
                  author={e.author}
                  date={e.publishedAt}
                  more={e.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between ">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={this.handlePrevious}
          >
            &larr;Previous
          </button>

          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-secondary"
            onClick={this.handleNext}
          >
            Next&rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
