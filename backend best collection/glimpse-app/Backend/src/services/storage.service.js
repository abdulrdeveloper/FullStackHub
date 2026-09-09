import 'dotenv/config';
import ImageKit from "@imagekit/nodejs";

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFile(buffer) {
  return imagekit.files.upload({
    file: buffer.toString('base64'),
    useUniqueFileName: true,
    fileName: `image_${Date.now()}.jpg`,
  });
}

export {uploadFile};