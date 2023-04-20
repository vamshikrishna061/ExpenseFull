const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const sequelize = require("./util/database");

const app = express();

const cors = require("cors");

const expenseRoutes = require("./routes/expense");

app.use(bodyParser.json());
app.use(cors());
app.use("/expense", expenseRoutes);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

sequelize
  .sync({ force: true })
  .then((result) => {
    console.log(result);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
