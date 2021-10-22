import React from 'react';

import { useQuery } from '@apollo/client';
import { ALL_BOOKS } from '..';

const Books = (props) => {
  const response = useQuery(ALL_BOOKS);

  console.log(response.data, 'adsddddddddddddddd');

  if (!props.show) {
    return null;
  }

  if (response.loading) {
    return <div>loading</div>;
  }

  const books = response.data.allBooks;

  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {books.map((b) => (
            <tr key={b.title}>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
