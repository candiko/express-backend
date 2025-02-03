import dotenv from "dotenv";
import app from "./app.js";

// Loading environment variables
dotenv.config();

const PORT = process.env.PORT || 3000;

// It listens...
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
