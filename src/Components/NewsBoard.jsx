import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const currentDate = new Date().toISOString().split('T')[0];

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&from=${currentDate}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles))
            .catch(error => console.error("Error fetching news:", error));
    }, [category]);

    return (
        <div>
            {articles.length > 0 ? (
                articles.map((news, index) => (
                    <NewsItem 
                        key={index} 
                        author={news.author}
                        title={news.title} 
                        description={news.description} 
                        src={news.urlToImage} 
                        url={news.url} 
                        date={news.publishedAt} 
                    />
                ))
            ) : (
                <p>No articles found.</p>
            )}
        </div>
    );
};

export default NewsBoard;
