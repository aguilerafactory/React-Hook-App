import { memo } from 'react';

export const Small = memo(({ value }) => {

    console.log('Me volvia a dibujar :(');
    return (
        <small>{ value }</small>
    )
})
