import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
  "categories": [
    // JSON data as provided in previous messages
  ]
};

function CategoryDetails() {
  const { categoryName } = useParams();
  const category = data.categories.find(c => c.name === categoryName);

  return (
    <div>
      <h1>{categoryName}</h1>
      {category ? (
        <ul>
          {category.items.map(item => (
            <li key={item.id}>
              <strong>{item.name}</strong> - {item.description} (${item.price})
            </li>
          ))}
        </ul>
      ) : <p>No items found for this category.</p>}
    </div>
  );
}

export default CategoryDetails;
