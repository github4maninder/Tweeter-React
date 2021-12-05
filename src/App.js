
import "./App.css";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import TweetList from "./components/TweetList";
import TweetForm from "./components/TweetForm";
import Tweet from "./components/Tweet";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <main className="container">
        <TweetForm />
        <TweetList />
      </main>
    </div>
  );
}

export default App;
