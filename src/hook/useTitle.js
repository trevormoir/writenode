import { useEffect } from 'react';

export const useTitle = (title) => {
    useEffect(() => {
        //console.log(title);
        document.title = `${title} - WriteNode`;
      })

  return null
}
