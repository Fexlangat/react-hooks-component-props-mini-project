
import React from "react";
import Article from "./Article";

function ArticleList({ articles, posts }) {
  const articlesData = articles || posts; 

  if (!articlesData || articlesData.length === 0) {

    return <main>No articles available</main>;
  }

  return (
    <main>
      {articlesData.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          date={article.date}
          preview={article.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;