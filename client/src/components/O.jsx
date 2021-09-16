import React, { useEffect, useState } from 'react';
import axios from 'axios';

const O = (props) => {

  console.log(props.x)

  return (
    <div className="tile">
      <div className="o">
        O
      </div>
    </div>
  )
};

export default O;