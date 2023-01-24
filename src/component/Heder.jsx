import React from 'react';

const Heder = (prop) => {
   return (
      <div className={prop.className}>
         {prop.item}
      </div>
   );
}

export default Heder;
