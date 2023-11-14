import sharp from 'sharp';
const fs = import('fs/promises'); 

async function convertToWebP() {
  for (let i = 1; i <= 50; i++) {
    const inputFileName = `data/Recette${String(i).padStart(2, '0')}.webp`;
    const outputFileName = `Recette${String(i).padStart(2, '0')}.webp`;

    try {
      await sharp(inputFileName)
        .resize(400)
        .toFile(outputFileName);
      
      console.log(`Conversion de ${inputFileName} terminée.`);
    } catch (err) {
      console.error(`Une erreur est survenue lors de la conversion de ${inputFileName}:`, err);
    }
  }
}

convertToWebP();