createLink = () => {
  let linkButton = document.createElement("button");
  linkButton.textContent = "Check My WordSearch";

  linkButton.classList.add("link-button");

  showLink = () => {
    window.location.href = "https://example.com"; // 나중에 path로 바꿔야 함!
  };

  linkButton.addEventListener("click", showLink);

  let buttonWrapper = document.createElement("div");
  buttonWrapper.classList.add("link-wrapper");
  buttonWrapper.appendChild(linkButton);

  let submitDiv = document.querySelector(".submit");
  submitDiv.insertAdjacentElement("afterend", buttonWrapper);
};
