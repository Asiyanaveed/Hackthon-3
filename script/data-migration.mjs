import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  apiVersion: '2021-08-31',
});
// npm install axios .... npm install dotenv
// Function to upload an image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const filename = imageUrl.split('/').pop() || `image_${Date.now()}.jpg`;
    const asset = await client.assets.upload('image', buffer, { filename });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error.message);
    return null;
  }
}

// Function to migrate data
export async function importData() {
  try {
    console.log('Starting data migration...');

    // Fetch data from API
    const apiUrl = 'https://template-03-api.vercel.app/api/products';
    const response = await axios.get(apiUrl);
    const products = response.data.data;

    console.log("❤")

    console.log('Products fetched successfully:', products);

    // Iterate over products and upload to Sanity
    for (const product of products) {
      try {
        console.log(`Processing product: ${product.productName}`);

        // Upload product image
        let imageRef = null;
        if (product.image) {
          imageRef = await uploadImageToSanity(product.image);
        }

        // Create Sanity product object
        const sanityProduct = {
          _type: 'product',
          productName: product.productName,
          category: product.category,
          price: product.price,
          inventory: product.inventory,
          colors: product.colors || [], // Default to an empty array if undefined
          status: product.status,
          description: product.description,
          image: imageRef
            ? {
                _type: 'image',
                asset: {
                  _type: 'reference',
                  _ref: imageRef,
                },
              }
            : undefined,
        };

        // Upload product to Sanity
        await client.create(sanityProduct);
        console.log(`Product created successfully: ${product.productName}`);
      } catch (err) {
        console.error(
          `Error processing product: ${product.productName}`,
          err.response?.data || err.message
        );
      }
    }

    console.log('Data migration completed successfully!');
  } catch (error) {
    console.error('Error during data migration:', error.message);
  }
}

// Start the migration process
importData();