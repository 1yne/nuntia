import { connection, connect } from "mongoose";
import "dotenv/config"

export async function handle({ event, resolve }) {
  console.log(connection.readyState)
  if (connection.readyState === 1) {
    const response = await resolve(event);
    return response;
  } else if (connection.readyState === 0) {
    const mongoURI = process.env.DB_URI.replace("<password>", encodeURIComponent(process.env.DB_PASSWORD))
    await connect(mongoURI, {
      keepAlive: true,
    })
    const response = await resolve(event);
    return response;
  }
}