import dotenv from "dotenv";
dotenv.config();

import { server } from "./server.js";
import { consoleStyle } from "./constants.js";

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(
    `%cServer is running on ${PORT}\nURL:http://localhost:${PORT}`,
    consoleStyle
  );
});
