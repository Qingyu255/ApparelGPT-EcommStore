import { surpriseMePrompts } from "../public/constants/surpriseMePrompts"

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPrompt = surpriseMePrompts[randomIndex]

    // so that we don't get repeated prompts
    if (randomPrompt == prompt) {
        return getRandomPrompt(prompt)
    }

    return randomPrompt
}