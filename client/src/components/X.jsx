import React, { useEffect, useState } from 'react';
import axios from 'axios';

const XO = (props) => {

  console.log(props.x)

  return (
    <div className="tile">
      <div className="x">
        X
      </div>
    </div>
  )
};

export default XO;