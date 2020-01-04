import React from "react"

  class BookCreationPage extends React.Component{
   
    constructor(props) {
        super(props)
        this.state = {
           
           /*  
                booksList: [],
            }, */
            fields:{},
            errors: {}
            
        }
      
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
       
    }
    
    handleValidation(e){
        
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
           
        if(!fields["title"]){
           formIsValid = false;
           errors["title"] = "Cannot be empty";
        }

        if(typeof fields["title"] !== "undefined"){
           if(!fields["title"].match(/^[a-zA-Zα-ωΑ-Ω @”#&*!]{10,30}$/)){
              formIsValid = false;
              errors["title"] = "Please enter 10-120 characters, specials characters allowed: @”#&*!";
           }        
        }

       
         if(typeof fields["description"] !== "undefined"){
            if(!fields["description"].match(/^[A-ZΑ-Ω].{2,511}$/)){
               formIsValid = false;
               errors["description"] = "Please enter max 512 characters, first letter must be uppercase";
            }        
         }
 
         if(typeof fields["publisher"] !== "undefined"){
            if(!fields["publisher"].match(/^.{5,60}$/)){
               formIsValid = false;
               errors["publisher"] = "Please enter 5-60 characters";
            }        
         }

         if(typeof fields["year"] !== "undefined"){
            if(!fields["year"].match(/^[0-9]{4}$/)){
               formIsValid = false;
               errors["year"] = "Please enter 4 digits";
            }        
         }

         if(typeof fields["pages"] !== "undefined"){
            if(!fields["pages"].match(/^[0-9]{1,9999}$/)){
               formIsValid = false;
               errors["pages"] = "Please enter max 9999 digits";
            }        
         }

         if(typeof fields["isbn10"] !== "undefined"){
            if(!fields["isbn10"].match(/^[0-9]{10}$/)){
               formIsValid = false;
               errors["isbn10"] = "Please enter 10 digits";
            }        
         }

         if(!fields["isbn13"]){
            formIsValid = false;
            errors["isbn13"] = "Cannot be empty";
         }
         if(typeof fields["isbn13"] !== "undefined"){
            if(!fields["isbn13"].match(/^[0-9]{13}$/)){
               formIsValid = false;
               errors["isbn13"] = "Please enter 13 digits";
            }        
         }
      
      
        this.setState({errors: errors});
        return formIsValid;
     
    }

    handleChange(e) {

        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            let fields = {};
            this.setState({fields:fields});
            alert("Form submitted");
        }
  

          /* this.setState(prevState => {
            return { booksList:[...prevState.booksList, e.target.value]}
        }); */
    }

   
    render() {
        return (
         <main>
            <section id="addBookForm">
               <div className="container">
                  <h1 className="text-center my-4">
                     Add New Book
                  </h1>
                  <form onSubmit={this.handleSubmit}>
                     <div className="form-wrapper">
                        <div className="row">
                        <div className="col-md-7">
                           <div className="row form-group">
                              <label className="col-12 col-sm-3">Title*: </label>
                              <div className="col-12 col-sm-9">
                                    <input 
                                       className="w-100"
                                       type="text" 
                                       defaultValue={this.state.fields["title"]} 
                                       name="title" 
                                       onChange={this.handleChange} 
                                    />
                                    <span className="error">{this.state.errors["title"]}</span>
                                 </div>
                                 
                           </div>
                           <div className="row form-group"> 
                              <label className="col-12 col-sm-3">Description: </label>
                              <div className="col-12 col-sm-9">
                                 <textarea 
                                    className="w-100"
                                    defaultValue={this.state.fields["description"]} 
                                    name="description" 
                                    onChange={this.handleChange} 
                                 />
                                 <span className="error">{this.state.errors["description"]}</span>
                              </div>
                           </div>
                           <div className="row form-group">
                              <label className="col-12 col-sm-3">Categories: </label>
                              <div className="col-12 col-sm-9">
                                 <input 
                                    className="w-100"
                                    type="text" 
                                    value={this.state.author} 
                                    name="categories" 
                                    onChange={this.handleChange} 
                                 />
                              </div>
                           </div>
                           <div className="row form-group">
                              <label className="col-12 col-sm-3">Author: </label>
                              <div className="col-12 col-sm-9">
                                 <input 
                                    className="w-100"
                                    type="text" 
                                    value={this.state.author} 
                                    name="author" 
                                    onChange={this.handleChange} 
                                 />
                                 <span className="error">{this.state.errors["author"]}</span>
                              </div>
                           </div>
                           <div className="row form-group">
                              <label className="col-12 col-sm-3">Publisher: </label>
                              <div className="col-12 col-sm-9">
                                 <input 
                                    className="w-100"
                                    type="text" 
                                    value={this.state.publisher} 
                                    name="publisher" 
                                    onChange={this.handleChange} 
                                 />
                                 <span className="error">{this.state.errors["publisher"]}</span>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-5">
                           
                           <div className="row form-group">
                              <label className="col-12 col-sm-3">Pages: </label>
                              <div className="col-12 col-sm-9">
                                 <input 
                                    className="w-100"
                                    type="text" 
                                    value={this.state.pages} 
                                    name="pages" 
                                    onChange={this.handleChange} 
                                 />
                                 <span className="error">{this.state.errors["pages"]}</span>
                              </div>
                           </div>
                           <div className="row form-group">
                              <label className="col-12 col-sm-3">Year: </label>
                              <div className="col-12 col-sm-9">
                                 <input 
                                    className="w-100"
                                    type="text" 
                                    value={this.state.year} 
                                    name="year" 
                                    onChange={this.handleChange} 
                                 />
                                 <span className="error">{this.state.errors["year"]}</span>
                              </div>
                        </div>
                        <div className="row form-group">
                           <label className="col-12 col-sm-3">ISBN-10: </label>
                           <div className="col-12 col-sm-9">
                              <input 
                                 className="w-100"
                                 type="text" 
                                 value={this.state.isbn10} 
                                 name="isbn10" 
                                 onChange={this.handleChange} 
                              />
                              <span className="error">{this.state.errors["isbn10"]}</span>
                           </div>
                        </div>
                        <div className="row form-group">
                           <label className="col-12 col-sm-3">ISBN-13*: </label>
                           <div className="col-12 col-sm-9">
                              <input 
                                 className="w-100"
                                 type="text" 
                                 value={this.state.isbn13} 
                                 name="isbn13" 
                                 onChange={this.handleChange} 
                              />
                              <span className="error">{this.state.errors["isbn13"]}</span>
                           </div>
                        </div>
                        </div>
                     </div>
                  
                     </div>
                     <div className="row mt-5">
                        <div className="col-12">
                           <button className="btn btn-primary">Submit</button>
                        </div>
                     </div>
                  </form>
               </div>
           </section>
        </main>       
        )
    }
}


export default BookCreationPage