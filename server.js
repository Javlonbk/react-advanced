import express from "express";

const app = express();

app.use(express.json());

let currentUser = {
  id: "1",
  name: "Sarah Waters",
  age: 55,
  country: "United Kingdom",
  books: ["Fingersmith", "The Night Watch"],
};

let users = [
  {
    id: "1",
    name: "Sarah Waters",
    age: 55,
    country: "United Kingdom",
    books: ["Fingersmith", "The Night Watch"],
  },
  {
    id: "2",
    name: "Haruki Murakami",
    age: 71,
    country: "Japan",
    books: ["Norwegian Wood", "Kafka on the Shore"],
  },
  {
    id: "3",
    name: "Chimamanda Ngozi Adichie",
    age: 43,
    country: "Nigeria",
    books: ["Half of a Yellow Sun", "Americanah"],
  },
];

let books = [
  {
    id: "1",
    name: "To Kill a Mockingbird",
    pages: 281,
    author: "Harper Lee", // corrected from 'title' to 'author'
    price: 12.99,
  },
  {
    id: "2",
    name: "The Catcher in the Rye",
    pages: 224,
    author: "J.D. Salinger", // corrected from 'title' to 'author'
    price: 9.99,
  },
  {
    id: "3",
    name: "The Little Prince",
    pages: 85,
    author: "Antoine de Saint-Exupéry", // corrected from 'title' to 'author'
    price: 7.99,
  },
];

app.get("/current-user", (req, res) => res.json(currentUser));

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

app.get("/users", (req, res) => res.json(users));

app.post("/users/:id", (req, res) => { // changed from POST to PUT
  const { id } = req.params;
  const { user: editedUser } = req.body;

  let userIndex = users.findIndex((user) => user.id === id);

  if (userIndex !== -1) {
    users[userIndex] = editedUser;
    if (currentUser.id === id) {
      currentUser = editedUser;
    }
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

app.get("/books", (req, res) => res.json(books));

app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  const book = books.find((book) => book.id === id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

const SERVER_PORT = 9090;
app.listen(SERVER_PORT, () =>
  console.log(`Server is listening on port: ${SERVER_PORT}`)
);
