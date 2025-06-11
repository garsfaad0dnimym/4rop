const fileUrl = 'https://cdn.jsdelivr.net/gh/garsfaad0dnimym/4rop/file.txt';
const uploadEndpoint = 'https://api.etternaonline.com/api/users/zaalseen/avatar';

async function uploadFileFromURL() {
  try {
    // Fetch the file from the URL
    const response = await fetch(fileUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch the file');
    }

    // Get the file as a Blob (in the browser)
    const fileBlob = await response.blob();

    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append('file', fileBlob, 'file.txt'); // Name of the file

    // Upload the file to the server
    const uploadResponse = await fetch(uploadEndpoint, {
      method: 'POST',
      body: formData,
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