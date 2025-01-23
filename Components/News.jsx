import { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loader2 } from 'lucide-react';

function News({ category }) {
  // Destructure category directly from props
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  const API_KEY = import.meta.env.REACT_APP_NEWS_API_KEY;
  console.log(API_KEY);
  const resultNews = async () => {
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&apikey=c8a63926db16f6103d5f547d6fc80b80`;
    try {
      const data = await fetch(url);
      const parsedData = await data.json();
      console.log(parsedData);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    resultNews();
  }, [category]); // Reload when category changes

  const fetchData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${
      page + 1
    }&apiKey=c8a63926db16f6103d5f547d6fc80b80`;
    try {
      setPage(page + 1);
      const data = await fetch(url);
      const parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles));
    } catch (error) {
      console.error('Error fetching more news:', error);
    }
  };

  const fallbackImage =
    'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop';

  return (
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchData}
      hasMore={articles.length < totalResults}
      loader={
        <div className="flex justify-center items-center py-4">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        </div>
      }
      endMessage={
        <p className="text-center py-4 text-gray-600 font-medium">
          You have reached the end! ✨
        </p>
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 capitalize">
          {category === 'general' ? 'Top Headlines' : category} News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((element) => (
            <div key={element.url} className="h-full">
              <NewsItem
                sourceName={element.source.name}
                title={element.title}
                desc={element.description}
                imageURL={element.image || fallbackImage}
                newsUrl={element.source.url}
              />
            </div>
          ))}
        </div>
      </div>
    </InfiniteScroll>
  );
}

export default News;
