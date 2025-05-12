import React from 'react'

export default function Card({name, jobtitle}) {
  return (
    <div className="max-w-xs">
      <div className="p-4 text-start">
        <p className="text-lg font-bold">{name}</p>
        <p>{jobtitle}</p>
      </div>
    </div>
  );
}