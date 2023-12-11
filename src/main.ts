import { getElementOrThrow, disableElement, enableElement } from "./ts/utils";
import { fetchRandomAdvice } from "./ts/advice";

async function main(): Promise<void> {
  const ADVICE = <HTMLQuoteElement>getElementOrThrow("#advice");
  const ADVICE_ID = <HTMLSpanElement>getElementOrThrow("#advice-id");
  const GENERATE_ADVICE_BUTTON = <HTMLButtonElement>(
    getElementOrThrow("#generate-advice")
  );

  const ENABLE_BUTTON_CLASS = ["button--primary"];
  const DISABLE_BUTTON_CLASS = ["button--disabled"];

  try {
    const { advice, id } = await fetchRandomAdvice();

    ADVICE.textContent = `“${advice}”`;
    ADVICE_ID.textContent = id.toString();
  } catch (error) {
    console.error(error);
  } finally {
    enableElement(GENERATE_ADVICE_BUTTON, {
      toAdd: ENABLE_BUTTON_CLASS,
      toRemove: DISABLE_BUTTON_CLASS,
    });
  }

  GENERATE_ADVICE_BUTTON.addEventListener("click", async function () {
    if (this.hasAttribute("disabled")) {
      return;
    }

    disableElement(this, {
      toAdd: DISABLE_BUTTON_CLASS,
      toRemove: ENABLE_BUTTON_CLASS,
    });

    try {
      const { advice, id } = await fetchRandomAdvice();

      ADVICE.textContent = `“${advice}”`;
      ADVICE_ID.textContent = id.toString();
    } catch (error) {
      console.error(error);
    } finally {
      enableElement(this, {
        toAdd: ENABLE_BUTTON_CLASS,
        toRemove: DISABLE_BUTTON_CLASS,
      });
    }
  });
}

main();
