const likeHeart = document.querySelectorAll(".fa-heart");

likeHeart.forEach((button) => {
  let isLiked = false;
  button.addEventListener("click", (e) => {
    console.log(e.currentTarget.className);
    if (!isLiked) {
      isLiked = true;
      e.currentTarget.className = "fa-solid fa-heart";
    } else {
      isLiked = false;
      e.currentTarget.className = "fa-regular fa-heart";
    }
  });
});
