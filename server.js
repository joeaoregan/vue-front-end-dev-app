const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
app = express();
app.use(serveStatic(path.join(__dirname, "dist")));
const port = process.env.PORT || 3000;
console.log(`Server is running on http://localhost:${port}`);
app.listen(port);
