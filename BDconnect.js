const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Подключение к базе данных MongoDB
mongoose.connect("mongodb://localhost:27017/achievements", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const Achievement = mongoose.model("Achievement", {
  title: String,
  description: String,
  dateAchieved: Date,
  category: String,
});

app.use(bodyParser.json());

// Обработчик для сохранения данных из формы
app.post("/submit_form", (req, res) => {
  const newAchievement = new Achievement({
    title: req.body.achievement_title,
    description: req.body.description,
    dateAchieved: req.body.date_achieved,
    category: req.body.category,
  });

  newAchievement
    .save()
    .then(() => {
      res.status(201).json({ message: "Достижение успешно сохранено" });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
