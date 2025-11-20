import { Client } from "pg";

async function query(queryObject) {
  // "client password must be a string" - isso aconteceu pois o Client não estava configurado.
  const client = new Client({
    // psql --host=localhost --username=postgres --port=5432
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD, // objeto javascript
  });
  await client.connect();
  const result = await client.query(queryObject);
  await client.end();

  return result;
}

export default {
  query: query,
};
