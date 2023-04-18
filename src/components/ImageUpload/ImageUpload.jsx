import { useState } from "react";

const ImageUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviewUrl, setImagePreviewUrl] = useState([]);

  const fileSelectHandler = (e) => {
    const files = e.target.files;
    const images = [...files];
    const previewUrl = [];

    if (images.length !== 0) {
      images.map((file) => {
        const imageUrl = URL.createObjectURL(file);
        previewUrl.push({ name: file.name, imageUrl });
        return setImagePreviewUrl(previewUrl);
      });
    }

    setSelectedFiles([...files]);
  };

  return (
    <div>
      <input
        type="file"
        multiple
        name="image"
        accept=".jpg,.png,.jpeg"
        onChange={fileSelectHandler}
      />
      {selectedFiles.length > 0 && (
        <div>
          <h2>Selected Files:</h2>
          <ul>
            {imagePreviewUrl.map((file) => (
              <li key={file.name}>
                <p>{file.name}</p>
                <img src={file.imageUrl} alt={file.name} width="200px" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
