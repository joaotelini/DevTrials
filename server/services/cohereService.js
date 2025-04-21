import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

async function getQuestions(stack) {
  try {
    const response = await axios.post(
      "https://api.cohere.ai/generate",
      {
        prompt: `Me faça uma pergunta técnica sobre ${stack}`,
        max_tokens: 100,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.generations[0].text;
  } catch (error) {
    console.error("Erro ao gerar pergunta:", error.message);
    throw error;
  }
}

async function getFeedback(questions, answers) {
  try {
    const response = await axios.post(
      "https://api.cohere.ai/generate",
      {
        prompt: `Me faça um feedback sobre as respostas ${answers} para as perguntas ${questions}`,
        max_tokens: 100,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.generations[0].text;
  } catch (error) {
    console.error("Erro ao gerar feedback:", error.message);
    throw error;
  }
  
}

export { getQuestions, getFeedback };