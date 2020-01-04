import React from "react"
import { Link } from "react-router-dom";

class Book extends React.Component{
     constructor(props){
        super(props)
        this.state={

        }
    } 
    render(){
        return(
            <div>
                <div className="book-item">
                    {this.props.book.isbn}
                    {this.props.book.title}
                    {this.props.book.subtitle}
                    {this.props.book.author}
                    {this.props.book.published}
                    {this.props.book.publisher}
                    {this.props.book.pages}
                    {this.props.book.description}
                    {this.props.book.website}
                    <Link to="/">Show details</Link>
                    <br/> <br/>  <br/>
                </div>
            </div>
        )
    }
}

export default Book