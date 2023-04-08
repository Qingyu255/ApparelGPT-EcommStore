import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
const openai = new OpenAIApi(configuration)


export default async function handler(req, res) {
    try {
        const { prompt } = req.body
        const aiResponse = await openai.createImage({
            prompt,
            n: 1,
            size: "512x512",
            response_format: "b64_json",
        })

        const image = aiResponse.data.data[0].b64_json
        res.status(200).json({photo: image})
    } catch (error) {
        console.log(error)
        res.status(500).send(error?.response.data.error.message)
    }
}