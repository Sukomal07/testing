import express from "express"
import { z } from "zod"

export const app = express();

app.use(express.json());

const sumInput = z.object({
    a: z.number(),
    b: z.number()
})

app.post("/sum", (req, res) => {
    const body = req.body;
    const parseResponse = sumInput.safeParse(body)

    if (!parseResponse.success) {
        res.status(411).json({
            message: "Invalid input"
        })
    }

    const ans = body.a + body.b

    res.status(200).json({ ans })
})