import { useState } from 'react';

//Hook customizado para usar la navbar

export const useNavbar = (initialValue = false) => {
    const [ showList, setShowList ] = useState(initialValue);

    const changeShowList = () => setShowList(!showList);

  return [ showList, changeShowList ];
}