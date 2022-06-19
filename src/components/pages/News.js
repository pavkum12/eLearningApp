import React from "react";

import { Link } from "react-router-dom";

export default class News extends React.Component {
  state = {
    // title: "",
    // content: "",
    // description: "",
    // source: "",
    // url: "",
    // urlToImage: "",
    title: "",
    desc: "",
    news: "",
  };

  componentDidMount = () => {
    this.getNews();
  };

  getNews = async () => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const cureDate = date.getFullYear() + "-" + month + "-" + date.getDate();
    console.log(cureDate);
    var url =
      "https://newsapi.org/v2/everything?" +
      "q=movies&" +
      // "country=in&" +
      "from=" +
      cureDate +
      "&" +
      // "sortBy=popularity&" +
      "apiKey=d5d94eb01a3942ce83796487fe2e860c";

    var req = new Request(url);
    fetch(req)
      .then((response) => response.json())
      .then((articles) => articles["articles"])
      .then((articles) => {
        // console.log(articles);
        //news articles
        this.setState({ news: articles });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  displayNews = (news) => {
    console.log(news.length);
    if (!news.length) return null;

    return news.map((item) => {
      console.log(``);
      return (
        <div className="row">
          <div class="card text-center border-0">
            <div className="row">
              <img
                src={`${item.urlToImage}`}
                style={{ borderRadius: `3em`, width: `20em` }}
                className="card-img-top col-sm-4"
                alt="Card img top"
              />
              <div class="card-body border-0 col-sm-8" id={item._id}>
                <h3 class="card-title">{item.title}</h3>
                <p class="card-text">{item.description}</p>
              </div>
              <div className="card-footer border-0">
                <a
                  href={`${item.url}`}
                  class="btn-add-cource0"
                  style={{ paddingRight: `5em`, paddingLeft: `5em` }}
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light primary-gradient shadow">
            <Link className="nav-link brand " to="/">
              <i className="fa-solid fa-square-caret-left text-white"></i>
            </Link>
            <h4 className="text-white mx-auto">News</h4>
          </nav>
        </header>
        <div className="container">{this.displayNews(this.state.news)}</div>
      </div>
    );
  }
}
