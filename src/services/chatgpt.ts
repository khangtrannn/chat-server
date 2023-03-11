import { Configuration, CreateChatCompletionResponse, OpenAIApi } from "openai";

const chatgpt = (function () {
  const openai = new OpenAIApi(
    new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    })
  );

  const chatCompletion = async (
    message: string
  ): Promise<CreateChatCompletionResponse> => {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    });

    return response.data;
  };

  return {
    chatCompletion,
  };
})();

export default chatgpt;
