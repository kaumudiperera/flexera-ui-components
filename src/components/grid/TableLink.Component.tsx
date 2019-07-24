import React from 'react';
import { Link } from "@flexera/ui-react-components";

export const TableLink: React.FC = (props: any) => {
    return (
        <Link href={`/beacon/${props.data.id}`} parentId={props.data.make} title={props.data.make}>{props.data.make} </Link>
    )
    
}