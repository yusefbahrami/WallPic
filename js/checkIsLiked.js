const LikeService = (buttunList) => {
  buttunList.forEach((button) => {
    let isLiked = false;
    button.addEventListener("click", (e) => {
      if (!isLiked) {
        isLiked = true;
        e.currentTarget.className = "fa-solid fa-heart";
      } else {
        isLiked = false;
        e.currentTarget.className = "fa-regular fa-heart";
      }
    });
  });
};
export default LikeService;
