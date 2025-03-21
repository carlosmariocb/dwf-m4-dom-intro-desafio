const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const liEl = document.querySelector(".lista");
  liEl.replaceChildren();
  cosasQueAprendimos.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item.tema;
    if (item.class) {
      li.classList.add(item.class);
    }
    liEl.appendChild(li);
  });
}

main();
