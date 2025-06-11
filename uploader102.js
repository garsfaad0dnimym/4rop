import fetch from 'node-fetch';
import FormData from 'form-data';
import path from 'path';


const fileUrl = 'https://cdn.jsdelivr.net/gh/garsfaad0dnimym/4rop/file.txt';


const uploadEndpoint = 'api.etternaonline.com/api/users/zaalseen/avatar';

async function uploadFileFromURL() {
  try {

    const response = await fetch(fileUrl);
    
    if (!response.ok) {
      throw new Error('Failed to fetch the file');
    }


    const fileBuffer = await response.buffer();

  
    const form = new FormData();
    form.append('file', fileBuffer, path.basename(fileUrl)); // Use the original file name

 
    const uploadResponse = await fetch(uploadEndpoint, {
      method: 'POST',
      body: form
    });

 
    if (!uploadResponse.ok) {
      throw new Error('Failed to upload the file');
    }

    // Parse response
    const uploadData = await uploadResponse.json();
    console.log('File uploaded successfully:', uploadData);

  } catch (error) {
    console.error('Error:', error.message);
  }
}


uploadFileFromURL();