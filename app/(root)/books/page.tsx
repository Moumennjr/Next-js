type Book = {
  id: number;
  title: string;
  author: string;
  year: number;            // publication year (can be negative for BCE)
  genre: string[];         // list of genres
  rating: number;          // average rating, e.g., 4.5
  pages: number;           // number of pages
  language: string;        // language of the book
};

const Books = async () => {
    
    const response = await fetch('http://localhost:3000/api/books');
    const books: Book[] = await response.json();

    // throw new Error('Not implemented') 
    return (
        <main>
            <header>
                <h1 className="text-5xl underline">
                    Our books
                </h1>
            </header>
            <div>
                <ul>
                    {
                        books.map((book, index)=>{
                            return <li key={index} >{book.title}</li>
                        })
                    }
                </ul>
            </div>
        </main>
    )
}

export default Books;