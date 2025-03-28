import React from 'react'
import CardNew from './CardNew'

export default function PeopleContainer() {
    return (
        <div className='flex flex-row'>
            <h1>People</h1>
           
                <div className='w-40'>
                    <CardNew name="hans" title="ceo" imageUrl="https://picsum.photos/200/300" ></CardNew></div>
            
        </div>
    )
}