import database from "../../../../infra/database.js";

async function status(resquest, response) {
  const result = await database.query("SELECT 1+1 as sum;");
  console.log(result.rows);
  response
    .status(200)
    .json({ message: "Vamos continuar progredindo, todos os dias!" });
}

export default status;
