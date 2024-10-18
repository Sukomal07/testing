import express from 'express'
import { z } from 'zod'
import { client } from './db'

export const app = express();
app.use(express.json());

const parseInput = z.object({
    a: z.number(),
    b: z.number()
})

app.post("/sum", async (req, res) => {
    const { success, error } = parseInput.safeParse(req.body)

    if (!success) {
        res.status(400).json({
            message: error.message
        })
    }

    const ans = req.body.a + req.body.b

    await client.sum.create({
        data: {
            a: req.body.a,
            b: req.body.b,
            ans
        }
    })

    res.status(200).json({
        ans
    })
})