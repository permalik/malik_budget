import dotenv from "dotenv";
import express, {Express, Request, Response} from "express";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send("Express server + TS is running now...");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`)
})