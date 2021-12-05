import React from "react"; //optional
import Tweet from "./Tweet";

function TweetList(props) {
  return (
    <article>
      <Tweet />
      <Tweet />
    </article>
  );
}

export default TweetList;
