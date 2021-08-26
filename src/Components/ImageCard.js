import React from "react";

export const ImageCard = ({ image }) => {
  let tags = image.tags.split(",");
  //console.log(tags);
  return (
    <div className="max-w-sm rounded shadow-lg overflow-hidden">
      <img src={image.webformatURL} className="w-full" alt="random" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-green-500 mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, i) => (
          <span
            key={i}
            className=" bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};
