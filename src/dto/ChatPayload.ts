import { ChatCompletionRequestMessage } from 'openai';
export interface ChatPayload {
  conversations: ChatCompletionRequestMessage[];
}
