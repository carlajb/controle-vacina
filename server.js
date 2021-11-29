require("dotenv").config();
const app = require("./src/app");
//const port = 5000;

const port = process.env.PORT || 5000;

app.listen(port, () =>{
    console.log(`Servidor esta rodando na ${port}`);
});