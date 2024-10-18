import { describe, expect, it, vi } from "vitest"
import request from "supertest"
import { app } from ".."

vi.mock('../db')

describe('POST /sum', () => {
    it('should add two numbers', async () => {
        const res = await request(app).post('/sum').send({
            a: 1,
            b: 2
        })

        expect(res.status).toBe(200)
        expect(res.body.ans).toBe(3)
    })
})