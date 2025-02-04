import React from 'react'

import { useEffect, useState } from "react";



function NewsSection() {
    const [news, setNews] = useState([]);

    useEffect(() => {
      fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=86e1477501d8452fa53e4e2ded41df57")
        .then(response => response.json())
        .then(data => setNews(data.articles))
        .catch(error => console.error("Error fetching news:", error));
    }, []);
    
  return (
    <div>
        <br />
        <h2 class="liveNews">Live News</h2>
      <ul class="newsul">
        {news.slice(0, 5).map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
              <p>{article.description}</p>
              <img src={article.urlToImage} alt="" id='liveImage' />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NewsSection
