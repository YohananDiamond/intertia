# intertia

A simple one-file JS library for basic HTML slides.

Currently a heavy WIP but I don't intend to make it feature full, so the
concept is already almost done.

## Installation

1. Download [intertia.js](intertia.js)

2. Put it alongside your desired HTML file

3. Add the following code inside `<head>`:

  ```html
  <script src="intertia.js"></script>
  <script>
    window.addEventListener("load", () => {
        intertia.prepare({
            slides_div_id: "section-slides",
            buttons_div_id: "buttons",
        });
    });
  </script>
  ```

4. And this simple example wherever you want:

  ```html
  <div id="buttons">
  </div>
  <div id="section-slides">
      <div class="slide" data-slide-title="Super mario bros 3">
          <p>hello, my bame is 5555555555</p>
      </div>
      <div class="slide" data-slide-title="ajfo">
          <p>wahoo 9</p>
      </div>
  </div>
  ```

<!-- I just came up with the name "intertia". I was tryna type inertia
but accidentally typo'd and it sounds cool so I'm gonna keep it -->
