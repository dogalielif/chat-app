import React from "react";

import './CardContainer.scss';

export const CardContainer = props => {
  let { id, name } = props.item;
  return (
    <div class="container">
      <div>
        <h1>{name}</h1>
        <span>userid: {id}</span>
      </div>
      <button>Start Conversation</button>
    </div>
  );
};
