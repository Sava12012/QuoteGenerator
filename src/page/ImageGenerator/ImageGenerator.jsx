import "./ImageGenerator.css";
import defaultIMG from "../../components/assets/imageGenerator/default_image_.svg";
import { useState, useRef } from "react";

const ImageGenerator = () => {
  const [image_url, setImage_url] = useState("/");
  let inputRef = useRef(null);
  const imageGenerator = async () => {
    if (inputRef.current.value === "") {
      return 0;
    }
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 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",
          "User-Agent": "Chrome",
        },
        body: JSON.stringify({
          prompt: `${inputRef.current.value}`,
          n: 1,
          size: "512x512",
        }),
      },
    );
    let data = await response.json();
    console.log(data);
    let data_array = data.data;
    setImage_url(data_array[0].url);
  };
  return (
    <div className="imageGenerator">
      <div className="headerImageGenerator">
        AI image <span>generator</span>
      </div>
      <div className="imgLoading">
        <div className="image">
          <img src={image_url === "/" ? defaultIMG : image_url} alt="image" />
        </div>
      </div>
      <div className="searchBox">
        <input
          type="text"
          ref={inputRef}
          className="searchInput"
          placeholder="Describe What You Want To See"
        />
        <div
          className="generateBTN"
          onClick={() => {
            imageGenerator();
          }}
        >
          Generate
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
