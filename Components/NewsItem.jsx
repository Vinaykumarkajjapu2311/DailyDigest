import React from 'react';

function NewsItem({ desc, title, imageURL, newsUrl, sourceName }) {
  return (
    <div className="h-full">
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
        {/* Image container with fixed aspect ratio */}
        <div className="relative pt-[56.25%]">
          <img
            src={imageURL}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          {/* Source badge */}
          <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-medium px-2.5 py-1 rounded">
            {sourceName}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Title */}
          <h5 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
            {title}
          </h5>

          {/* Description */}
          <p className="text-gray-600 mb-4 flex-grow line-clamp-3">{desc}</p>

          {/* Read More Button */}
          <a
            href={newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-800 rounded-md hover:bg-blue-700 transition-colors duration-200 ease-in-out"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
