import { useState } from 'react';

export default function Form() {
  return (
    <div className='google-form'>
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSfdYp-XALYorj8zS1A8OeYvajLQX46TVnbGzCiOxfo8t3k6wQ/viewform?embedded=true" 
        width="900" 
        height="689" 
        frameBorder="0" 
        marginHeight="0" 
        marginWidth="0">
        Loading…
      </iframe>
    </div>
  );
}