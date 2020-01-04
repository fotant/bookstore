import React from "react"
import books from "../books";
import defaultImage from "../images/defaultImage.jpg"

class BookDetailsPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    } 
    render(){
        let bookDetails = books.filter((book) => book.isbn === this.props.match.params.isbn)[0];
        
        return(
            <main>
                <section id="book-details">
                <div className="container">
                    <div className="row item justify-content-between">
                        <div className="col-sm-4 mb-4 mb-sm-0">
                            <img className="img-fluid w-100 item-image p-1" src={defaultImage} alt="default-image"/>
                        </div>
                        <div className="col-sm-7">
                            <div className="item-title mb-3"><h1>{bookDetails["title"]}</h1></div>
                            <div className="item-info">{bookDetails["description"]}</div>
                            <div className="item-button my-3">
                                <button className="btn btn-primary mr-2">favorite</button>
                                <button className="btn btn-primary ml-2">share</button>
                            </div>
                            <div className="item-info">Categories: #tag,#tag2,#tag3</div>
                            <div className="item-info">Year: {bookDetails["published"]}</div>
                            <div className="item-info">Number of Pages: {bookDetails["pages"]}</div>
                            <div className="item-info my-2">Publisher: {bookDetails["publisher"]}</div>
                            <div className="item-info">isbn-13: {bookDetails["isbn"]}</div>
                            <button className="btn btn-primary my-3">Buy</button>
                        </div>
                    </div>
                </div>
               
            </section>
            </main>
        )
    }
}

export default BookDetailsPage