import { HfInference } from '@huggingface/inference';

const dialogModal = document.getElementById('dialog-modal');
const imageContainer = document.getElementById('image-container');
const form = document.getElementById('formContainer');

const hf = new HfInference("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");

/** show dialog on load **/
dialogModal.show();

async function submitButton(event) {
  event.preventDefault();

  dialogModal.close(); 

  const prompt = document.getElementById('user-input').value;
  
  const loadingIndicator = document.createElement('div');
  loadingIndicator.className = 'loading-indicator';
  loadingIndicator.textContent = '...Loading Image';
  imageContainer.appendChild(loadingIndicator);

  try {
    const response = await hf.textToImage({
      model: 'stabilityai/stable-diffusion-2',
      inputs: prompt,
    });

    const imageUrl = await blobToBase64(response);

    imageContainer.removeChild(loadingIndicator);
    imageContainer.querySelector('img').src = imageUrl;

    // Show the regenerate button after the image is generated
    document.getElementById('regenerate-button').style.display = 'block';

    // Generate alt text for the image
    generateAltText(imageUrl);

  } catch (error) {
    console.error('Error generating image:', error);
  }
}

async function generateAltText(imageUrl) {
   
   const imageData = await (await fetch(imageUrl)).blob();
        const res = await hf.imageToText({
            data : imageData,
            model: "Salesforce/blip-image-captioning-base"
        })
        const altText = res.generated_text;
        renderImage(imageUrl, altText); 
}

function renderImage(imageUrl, altText) {
    console.log(altText)
    const imageContainer = document.getElementById('image-container')
    imageContainer.innerHTML = ''
    const image = document.createElement('img')
    image.src = imageUrl
    image.alt = altText
    imageContainer.appendChild(image)
}

const regenerateButton = document.getElementById('regenerate-button');
regenerateButton.addEventListener('click', regeneratePrompt);

function regeneratePrompt() {
  // Clear the previous input
  document.getElementById('user-input').value = '';

  // Hide the regenerate button
  document.getElementById('regenerate-button').style.display = 'none';

  // Show the dialog modal
  dialogModal.show();
}

form.addEventListener('submit', submitButton); 

async function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
