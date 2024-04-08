const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const router = express.Router();
const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

router.use(express.json());

router.post("/chat", async (req, res) => {
    const prompt = req.body.messages[0].content;
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4",
            model: "gpt-4",
            messages: [
                {
                    "role": "user",
                     content: prompt
                }
            ],
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        console.log(response.choices[0].message);
        res.send(response.choices[0].message)
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router;