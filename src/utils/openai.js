import { GoogleGenAI } from "@google/genai";
import { OPEN_AI_KEY } from "./constants";

export const ai = new GoogleGenAI({
  apiKey:OPEN_AI_KEY ,
});
