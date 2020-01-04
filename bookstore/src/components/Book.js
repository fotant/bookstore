import React from "react"
import { Link } from "react-router-dom"
import defaultImage from "../images/defaultImage.jpg"

class Book extends React.Component{
     constructor(props){
        super(props)
        this.state={

        }
    } 
    render(){
        return(
                <div className="list-item col-6 col-sm-4 col-lg-3 mb-4">
                    <div className="item-image p-1">
                        <Link to={`/book/${this.props.book.isbn}`}><img className="img-fluid" src={defaultImage} alt="default-image"/></Link>
                    </div>
                    <div className="list-item-title text-center mt-2">
                        <Link to={`/book/${this.props.book.isbn}`}><h2>{this.props.book.title}</h2></Link>
                    </div>
                   {/*  {this.props.book.isbn}
                    {this.props.book.subtitle}
                    {this.props.book.author}
                    {this.props.book.published}
                    {this.props.book.publisher}
                    {this.props.book.pages}
                    {this.props.book.description}
                    {this.props.book.website} */}
                   
                </div>
        )
    }
}

export default Book