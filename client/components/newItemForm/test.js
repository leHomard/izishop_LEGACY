const handleUpload = async (values) => {
  // get values from the final step form
  await getFinalStepValues(values);
  let urls = [];
  // loop over images state
  for (let image of images) {
    const { name: fileName, type: fileType } = image;
    try {
      const { signedRequest, url } = await askForSignedUrl(fileName, fileType);
      urls = [...urls, url];
      try {
        // set header options
        const options = {
          headers: {
            "Content-Type": fileType,
          },
        };
        //   upload image to amazon
        await uploadImages(signedRequest, image, options);
      } catch (error) {
        console.log("Error when uploading image : ", error);
      }
    } catch (error) {
      console.log("Error when asking for signed request : ", error);
    }
  }
  // set urls into the state
  setFormValues((prevState) => {
    return {
      ...prevState,
      urls: [...prevState.urls, urls],
    };
  });
};
