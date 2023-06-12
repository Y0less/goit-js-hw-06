const itemCategories = document.querySelectorAll(".item");

console.log("Number of categories: ", itemCategories.length);

itemCategories.forEach((item) => {
  console.log(`
Category: ${item.firstElementChild.textContent}
Elments: ${item.lastElementChild.children.length}
`);
});
