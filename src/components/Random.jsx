import { useEffect, useState } from "react";
import axios from "axios";

function Random() {
  const [gif, setGif] = useState("");
  var API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
  const [loading, setLoading] = useState(true);

  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  useEffect(() => {
    apiCall();
  }, []);

  async function apiCall() {
    setLoading(true);
    const Response = await axios.get(url);
    const data = Response.data;
    const imageSource = data.data.images.downsized_large.url;

    console.log(data);
    console.log(imageSource);
    setGif(imageSource);
    setLoading(false);
  }

  function clickHandler() {
    apiCall();
  }

  return (
    <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] ">
      <h1 className="text-3xl underline uppercase font-bold mt-4 ">
        A Random Gif
      </h1>

      {loading ? <h1>loading....</h1> : <img src={gif} width="450px" />}
      <button
        onClick={clickHandler}
        className="w-10/12 bg-white/80 rounded-lg py-2 text-lg mb-3"
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
