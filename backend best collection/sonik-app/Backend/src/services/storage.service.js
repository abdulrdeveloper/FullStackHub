import ImageKit from '@imagekit/nodejs';
import 'dotenv/config';

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});


async function uploadFile(file) {
    try {
        const result = await imagekit.files.upload({
            file,
            fileName: `music_${Date.now()}`,
            folder: "/music_app",
        });
        return result;
    } catch (error) {
        console.error("Error uploading file:", error);
        throw new Error("File upload failed");
    }
}

export { uploadFile };
