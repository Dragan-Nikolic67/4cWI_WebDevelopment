import React from 'react'

export default function Card({name, jobtitle, image}) {
  return (
    <div className="max-w-xs">
      <div>
        <img src={image} className="w-200 h-85" />
      </div>
      <div className="p-4 text-start">
        <p className="text-lg font-bold">{name}</p>
        <p>{jobtitle}</p>
      </div>
    </div>
  );
}