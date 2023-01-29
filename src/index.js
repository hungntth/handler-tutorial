const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT;
const versionNode = process.versions.node;

app.listen(port, () => {
    console.log(`server run http://localhost:${port}`);
    console.log(`With version node ${versionNode}`);
})