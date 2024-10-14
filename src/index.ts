import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import http from "http";

const PORT = 5000;
const app = express();

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());

const server = http.createServer(app);

server.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}/`);
});
