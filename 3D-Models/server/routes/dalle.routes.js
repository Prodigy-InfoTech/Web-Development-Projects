import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration } from 'openai';
import { OpenAIApi } from 'openai';

dotenv.config();
const router = express.Router();

const OPENAI_API_KEY=process.env.OPENAI_KEY
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
  // Authorization: `Bearer ${OPENAI_API_KEY}`
});
// console.log(process.env.OPENAI_KEY);
const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" })
})

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ message: "Prompt is missing in the request body." });
    }

    const response = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json'
    });

    const images = response.data.data[0].url;
    console.log(images);
    res.status(200).json({ photo: images });
  } catch (error) {
    // console.log(error);
    res.status(500).json({ error: error,message: "Something went wrong" })
  }
})

export default router;
