import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./Context/GlobalState";
import { ImageCard } from "./Components/ImageCard";
import { SearchImage } from "./Components/SearchImage";

function App() {
  const [term, setTerm] = useState("");
  const context = useContext(GlobalContext);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => context.fetchImages(data.hits))
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-14 my-12">
      <SearchImage setTerm={setTerm} />

      {!context.init.isLoading && context.init.images.length === 0 && (
        <h1 className="mx-auto text-6xl mt-32 text-center">No Images Found</h1>
      )}

      {context.init.isLoading ? (
        <h1 className="mx-auto text-6xl mt-32 text-center">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {context.init.images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
