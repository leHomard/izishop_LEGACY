import axios from "axios";

import { endpoint } from "../config";

// get Amazon S3 signedRequest url from the server
export const askForSignedUrl = async (fileName, fileType) => {
  try {
    let resp = await axios.post(`${endpoint}sign_s3`, { fileName, fileType });
    const { signedRequest, url } = resp.data.data.returnData;
    return { signedRequest, url };
  } catch (error) {
    console.log("error when getting signed request... : ", error);
  }
};

// PUT call to amazon to upload images
export const uploadImages = async (image) => {
  const { name: fileName, type: fileType } = image;
  try {
    const { signedRequest, url } = await askForSignedUrl(fileName, fileType);
    await axios.put(signedRequest, image, {
      headers: { "Content-Type": fileType },
    });
    return url;
  } catch (error) {
    console.log("error when uploading image... : ", error);
  }
};
