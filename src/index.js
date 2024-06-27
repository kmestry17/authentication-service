import cors from "cors";
import express from "express";
import { json } from "body-parser";
import mongoose from "mongoose";
import consola from "consola";

// Import application constants
import { DB, PORT } from "./constants";

// Initialize express application
const app = express();

const main = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    consola.success("Connected to MongoDB...");

    // Start application listening to request on server
    app.listen(PORT, () => {
      consola.success(`Server running on port ${PORT}`);
    });
  } catch (error) {}
};

main();
