const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files from the project root and the public folder so css/ and images/ are available
app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, "public")));

// Configure EJS view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Floral Design" });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
