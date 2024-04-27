import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";

 console.log(blogData);

function App() {
  const {name, image, about, posts} = blogData;

  return (
    <div className="App">
      <Header name={name}/>
      <About image={image}  about={about}/>
      <Article />
      <ArticleList post={posts}/>
      {/* You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}
    </div>
  );
}

export default App;
