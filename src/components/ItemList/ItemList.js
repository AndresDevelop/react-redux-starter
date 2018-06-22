import React, { Component } from 'react';

import './ItemList.scss';

const ItemList = ({ items, error, loading }) => {

  if (error) {
    return <p>Sorry! there was an error loading the items</p>
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <ul>
        {items && items.map(item => 
          <li key={ item.id }>{ item.label }</li>
        )}
      </ul>
    </div>
  );
}

export default ItemList;
