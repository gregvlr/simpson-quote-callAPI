import React from 'react';

const Quote = ({ quote }) => {
    return (
        <figure className='QuoteCard'>
            <img src={quote.image} alt='Nelson Muntz' />
            <figcaption>
                <blockquote>{quote.quote}</blockquote>
                <cite>{quote.character}</cite>
            </figcaption>
        </figure>)
}

export default Quote;