const toggleMode = () => {
  const toggleBtn = document.getElementById("toggleDark");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("darkMode");
  });
};

export default toggleMode;
