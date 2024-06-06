// ParentComponent.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import UpdateProduct from './UpdateProduct';

function ParentComponent() {
  const { productId } = useParams();

  return (
    <div>
      <UpdateProduct productId={productId} />
    </div>
  );
}

export default ParentComponent;
