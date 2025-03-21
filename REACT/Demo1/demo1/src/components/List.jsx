import React from 'react'

export default function List({name}) {
    return (
        <div className="bg-blue-300 border w-50 h-20 px-5 py-5 hover:bg-indigo-500 text-amber-50">
          <p>{name}</p>
        </div>
      );
    }