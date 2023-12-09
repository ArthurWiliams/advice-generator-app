import { IAdvice, ISlip } from "./types";

export async function fetchRandomAdvice(): Promise<IAdvice> {
  try {
    const RESPONSE = await fetch("https://api.adviceslip.com/advice", {
      cache: "no-cache",
    });

    if (!RESPONSE.ok) {
      throw new Error(RESPONSE.statusText);
    }

    return (await (<Promise<ISlip>>RESPONSE.json())).slip;
  } catch (error) {
    throw error;
  }
}
