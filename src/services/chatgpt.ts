import { ChatCompletionRequestMessage, Configuration, CreateChatCompletionRequest, CreateChatCompletionResponse, OpenAIApi } from "openai";

const chatgpt = (function () {
  const openai = new OpenAIApi(
    new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    })
  );

  const chatCompletion = async (
    messages: ChatCompletionRequestMessage[]
  ): Promise<CreateChatCompletionResponse> => {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
    });

    return response.data;
  };

  return {
    chatCompletion,
  };
})();

export default chatgpt;
