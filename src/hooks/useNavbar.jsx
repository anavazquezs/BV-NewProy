import { useState } from 'react';

export const useNavbar = (initialValue = false) => {
    const [ showList, setShowList ] = useState(initialValue);

    const changeShowList = () => setShowList(!showList);

  return [ showList, changeShowList ];
}