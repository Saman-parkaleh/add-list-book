import React from 'react';
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

function View({books,deleteBook}) {
  return books.map((book) =>
   <tr className='flex- flex  justify-around m-3 border border-black bg-red-100' key={book.number}>
         <td>{book.title}</td>
         <td> {book.persen}</td>
         <td>{book.number} </td>
         <td className='delete-btn text-red-500  cursor-pointer	' onClick={()=> deleteBook(book.number)} >
                      <Icon icon={trash} />
                    </td>
      </tr>
) 
      
    
  
}

export default View