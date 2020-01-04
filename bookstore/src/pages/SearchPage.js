import React from "react"
import Book from "../components/Book";
import books from "../books";

class SearchPage extends React.Component{
     constructor(props){
        super(props)
        this.state={

        }
    } 
    render(){
        const bookComponents = books.map((book)=><Book key={book.isbn} book={book}/>)
  
        return(
            <main>
                <div className="container">
                    <section id="search-bar">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="text-center">Search to find your new Book</h1>
                                <div className="search-box my-4 p-3 text-center">here should be the searchbox - I didn't finish this task</div>
                            </div>
                        </div>
                    </section>
                    <section id="books-list">
                        <div className="row">
                            {bookComponents}
                        </div>
                    </section>
                </div>
            </main>
        )
    }
}

export default SearchPage