
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";
  todos.forEach((task, index) => {
    const div = document.createElement("div");
    div.className = "todo-item";
    div.innerHTML = `
      <span>${task}</span>
      <button onclick="deleteTodo(${index})">X</button>
    `;
    todoList.appendChild(div);
  });
}

function addTodo() {
  const input = document.getElementById("todoInput");
  const task = input.value.trim();
  if (task) {
    todos.push(task);
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
    renderTodos();
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

renderTodos();

/* ======== Product Listing Logic ======== */
const products = [
  { name: "Laptop", category: "tech", price: 800, rating: 4.5 },
  { name: "Smartphone", category: "tech", price: 500, rating: 4.2 },
  { name: "T-Shirt", category: "fashion", price: 20, rating: 4.0 },
  { name: "Jeans", category: "fashion", price: 40, rating: 4.3 },
  { name: "Headphones", category: "tech", price: 60, rating: 4.1 }
];

function renderProducts() {
  let filtered = [...products];
  const category = document.getElementById("categoryFilter").value;
  const sort = document.getElementById("sortBy").value;

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === "price") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  const productList = document.getElementById("productList");
  productList.innerHTML = "";
  filtered.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h4>${p.name}</h4>
      <p>Category: ${p.category}</p>
      <p>Price: $${p.price}</p>
      <p>Rating: ${p.rating}</p>
    `;
    productList.appendChild(div);
  });
}

document.getElementById("categoryFilter").addEventListener("change", renderProducts);
document.getElementById("sortBy").addEventListener("change", renderProducts);

renderProducts();
