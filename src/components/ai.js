import OpenAI from "openai"
const openai = new OpenAI({
    apiKey: import.meta.env['VITE_GPT_API_KEY'],
    dangerouslyAllowBrowser: true
})

const SYSTEM_PROMPT="You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page"

export async function getRecipeFromChefGPT(ingredientsArr) {
    const ingredientsStr = ingredientsArr.join(", ")

    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "developer", content: SYSTEM_PROMPT },
            {role: "user", content: `I have ${ingredientsStr}. Please give me a recipe you'd recommend I make!`}
        ],
        max_tokens: 1024,
    });
    return completion.choices[0].message.content
}