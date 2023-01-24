const express = require('express');

// app setUp
const app = express();


// listing on Port 4000
app.listen(PORT,() => {
    console.log(`listing on port ${PORT}`);
})