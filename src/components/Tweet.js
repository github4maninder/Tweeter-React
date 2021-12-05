import React from "react"; //optional

function Tweet() {
  const tweet = {
    avatar: "https://i.imgur.com/73hZDYK.png",
    firstName: "Isaac",
    lastName: "Newton",
    handle: "@SirIsaac",
    body: "If I have seen further it is by standing on the shoulders of giants",
    age: "10 days ago",
  };

  return (
    <section className="tweets">
      <article class="tweet">
        <header class="tweet--header">
          <img class="tweet--avatar" src={tweet.avatar} alt="" />
          <h2 class="tweet--name">{tweet.lastName}</h2>
          <small class="tweet--handle">{tweet.handle}</small>
        </header>

        <div class="tweet--body">
          <p>{tweet.body}</p>
        </div>

        <footer class="tweet--footer">
          <small class="footer--age">
            {tweet.age}
            <small>
              <span class="footer--actions">
                <a href={() => false}>
                  <i class="fa fa-flag"></i>
                </a>
                <a href={() => false}>
                  <i class="fa fa-retweet"></i>
                </a>
                <a href={() => false}>
                  <i class="fa fa-heart"></i>
                </a>
              </span>
            </small>
          </small>
        </footer>
      </article>
    </section>
  );
}

export default Tweet;