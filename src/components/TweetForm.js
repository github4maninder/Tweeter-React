import React from "react"; //optional

function TweetForm() {
  const hummingText = "What are you humming about?";
  return (
    <section className="newtweet">
      <form
        method="post"
        action="/tweets"
        class="newtweet__form"
        onClick={(event) => event.preventDefault()}
      >
        <textarea
          class="form__textarea"
          name="text"
          placeholder={hummingText}
        ></textarea>
        <input
          type="submit"
          value="Tweet"
          class="form__input"
          onClick={(event) => event.preventDefault()}
        />
        <span class="form__counter">140</span>
      </form>
    </section>
  );
}

export default TweetForm;
