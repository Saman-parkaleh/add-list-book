import React, { useEffect, useState } from "react";
import View from "./View";

const saveinlocalstorage = () => {
  const data = localStorage.getItem("books");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Addbooks = () => {
  const [books, setBooks] = useState(saveinlocalstorage());
  const [title, setTitle] = useState("");
  const [persen, setPersen] = useState("");
  const [number, setNumber] = useState("");

  console.log(title);

  const formonsubmit = (e) => {
    e.preventDefault();

    let book = { title, persen, number };

    setBooks([...books, book]);
    console.log(book);
  };

  // const deletebook = (number) => {
  //       const filterbook = books.filter((element,index) => {
  //     return element.number !== number;
  //   });

  //   setBooks(filterbook);
  // };
  const deleteBook = (number) => {
    const filterBooks = books.filter((element,index)=> {
      return element.number !== number;
    })

    setBooks(filterBooks);
  }


  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <>
      <div className="bg-red-900">
        <div className=" w-[300px] bg-red-200  h-[270px]  mt-5 p-5  rounded float-right flex  ">
          <form
            autoComplete="off"
            className="text-center"
            onSubmit={formonsubmit}
          >
            <div className="">
              <label htmlFor="" className=" ">
                عنوان
              </label>
              <br />

              <input
                type="text"
                className="h-7 w-full mb-2 mb-2"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor=""> نویسندگان</label>

              <input
                type="text"
                className="h-7 w-full mb-2"
                required
                onChange={(e) => setPersen(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor=""> شماره کتاب </label>

              <input
                type="text"
                required
                className="h-7 w-full mb-2"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div>
              <button className="bg-green-500 w-full mt-5 h-[35px] rounded ">
                افزودن
              </button>
            </div>
          </form>
        </div>
      </div>
    {
books.length > 0 &&  <>
      
             
        <div className="bg-pink-500 w-[500px] text-center mt-[60px] flex jusity-betvin ">
          <table className="   bg-blue-200 w-full p-3">
            <thead className="">
              <tr className="flex  justify-around  border-b-4  border-indigo-900 m-5">
                <th> عنوان</th>
                <th> نویسنده </th>
                <th> شماره</th>
                <th> حذف</th>
              </tr>
            </thead>
            <View books={books}   deleteBook={deleteBook} />
           
            <button className="w-[95%] bg-red-600 mb-3 p-2 " onClick={()=>setBooks([])}>Delate All</button>
           
          </table>
        </div>
      </>

    }
     

 {books.length < 1 && (
              <h1 className="text-xl w-[500px]  mt-10  bg-pink-300 p-5 text-center">no books in the librari</h1>
            )}
    </>
  );
};

export default Addbooks;
