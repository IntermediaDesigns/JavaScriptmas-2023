/** uncomment one of these **/
// import OpenAI from "openai" 
import { HfInference } from '@huggingface/inference'
import dotenv from 'dotenv';
dotenv.config();

const hfInference = new HfInference(process.env.HUGGINGFACE_API_KEY);

let isOpen = false;

document.getElementById('window-container').addEventListener('click', function () {
    /**
     * 🎄 Challenge:
     * 1. When clicked, the doors should open
     *    to reveal a festive joke.
     * 
     * 🎁 hint.md for help!
     **/
    if (isOpen) {
        // Close the doors
        document.querySelector('.left-door').style = "animation: left-close 0.3s forwards"
        document.querySelector('.right-door').style = "animation: right-close 0.3s forwards"
        document.querySelector('.joke-display').style = "animation: hide-joke 0.3s forwards"
        isOpen = false;
    } else {
        // Open the doors
        document.querySelector('.left-door').style = "animation: left-open 0.3s forwards"
        document.querySelector('.right-door').style = "animation: right-open 0.3s forwards"
        document.querySelector('.joke-display').style = "animation: display-joke 0.3s forwards"
    
    // Use the Hugging Face API to generate a festive joke
        hfInference.textGeneration({
            inputs: "Tell me a festive joke.",
            model: "HuggingFaceH4/zephyr-7b-beta",
        }).then(response => {
            // Display the joke
            document.querySelector('.joke-display').textContent = response.generated_text.trim();
        });
        isOpen = true;
    }
})