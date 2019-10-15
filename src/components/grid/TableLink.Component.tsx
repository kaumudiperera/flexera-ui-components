import React from 'react';

export const TableLink: React.FC = (props: any) => {
    return (
        <a href={`/beacon/${props.data.id}`} >{props.data.make} </a>
    )
    
}