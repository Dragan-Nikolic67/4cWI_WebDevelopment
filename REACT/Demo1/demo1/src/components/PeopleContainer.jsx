import React, { useEffect, useState } from 'react';
import CardNew from './CardNew';

export default function PeopleContainer() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch("https://67b847a2699a8a7baef36631.mockapi.io/person")
            .then((res) => res.json())
            .then((data) => {
                setPeople(data);
            })
    }, []);

    return (
        <div>
            <h1>People</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                {people.map((person) => (
                    <CardNew
                        name={person.name}
                        imageUrl={person.avatar}
                        title={person.jobtitle}
                    ></CardNew>
                ))}
            </div>
        </div>
    );
}
