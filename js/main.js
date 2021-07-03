// add span for flicker effect
function splitTitle() {
  const title = document.getElementById("title");
  title.innerHTML =
    '<span class="fast-flicker">R</span>esu<span class="flicker">m</span>e&nbsp;Bu<span class="fast-flicker">i</span>ld<span class="flicker">e</span>r';
}
splitTitle();

function flipCard() {
    const card = document.querySelector(".card__inner");

  card.addEventListener("click", function (e) {

      card.classList.toggle("is-flipped");
  });
}
flipCard();
