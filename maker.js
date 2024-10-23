createLink = () => {
  let linkButton = document.createElement("button");
  linkButton.textContent = "Check My WordSearch";

  showLink = () => {
    window.location.href = "https://example.com"; // 나중에 path로 바꿔야 함!
  };

  linkButton.addEventListener("click", showLink);

  let submitDiv = document.querySelector(".submit");
  submitDiv.appendChild(linkButton);
};
