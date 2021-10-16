const listCategories = document.querySelector("#categories");
const listItems = [...listCategories.children];
console.log(`Number of categories:${listItems.length}`);
listItems.forEach((element) => {
  const title = element.querySelector("h2");
  console.log(`Category: ${title.textContent}`);
  const item = element.querySelectorAll("li");
  console.log(`Elements: ${item.length}`);
});
