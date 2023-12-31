import { OpenAI } from "langchain/llms/openai";

export const run = async () => {
  // temperature controls how random/creative the response is. It ranges from 0(deterministic) to 1(max creativity)
  const model = new OpenAI({ temperature: 0.1 });

  // const res = await model.call("What is the capital city of France?");
  const res = await model.call("What would be a good meal to prepare that is similar to Spaghetti Carbonara?");
  console.log({ res });
  //output: "Paris"
};
