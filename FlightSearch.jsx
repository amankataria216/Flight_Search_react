import React from 'react';
import {Navbar,Card,Form,Typeahead,Button,Row,Col,Input,} from 'react-bootstrap';
import axios from 'axios';
// import './style.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

class FlightSearch extends React.Component {
   constructor(props) {
  
    super(props);
    this.state = {
        posts: []
      };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = {};
    for (const field in this.refs) {
      console.log(field);
      formData[field] = this.refs[field].value;
    }
    console.log('-->', formData);
   // method to REST post Data to invoke and send to server
 axios.get(` http://localhost:7000/flights?scity=${formData.From}&dcity=${formData.To}`)
 .then(res => {
 console.log("++++++++++++"+(JSON.stringify(res.data)))
    const posts = res.data;
   this.setState({ posts });
 
 });


  }
  renderHeader(){
      return( <Navbar variant="light" style={{"background":"#e8eaf6"}}>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="../assets/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
       Fligth Booking
      </Navbar.Brand>
    </Navbar>)
   
  }

 
  renderForm(){
      return(
          <div className='container' style={{"marginTop":"2%"}}>
      <div className="wrapper bg-white">
          <Card.Body style={{"background":"#f4f4f4"}}>
          <form   onSubmit={this.handleSubmit}>
        
     
        <div className="form-group d-sm-flex margin">
            <div className="d-flex align-items-center flex-fill me-sm-1 my-sm-0 my-4 border-bottom position-relative">
               <input type="text" ref="From" required placeholder="From" className="form-control"/>
                <div className="label" id="from"></div><i className="fa fa-dot-circle-o"></i>
            </div>
            <div className="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
               <input type="text" ref="To" required placeholder="To" className="form-control"  />
                <div className="label" id="to"></div> <i className="fa fa-map-marker text-muted"></i>
            </div>
        </div>
        <div className="form-group d-sm-flex margin">
            <div className="d-flex align-items-center flex-fill me-sm1 my-sm-0 border-bottom position-relative"> 
              <input type="date" ref="deptDate"  required placeholder="Depart Date" className="form-control"  />
                <div className="label" id="depart"></div>
            </div>
            <div className="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative"> 
              <input type="date" required  ref="returnDate" placeholder="Return Date" className="form-control" />
                <div className="label" id="return"></div>
            </div>
        </div>
       
        <div className="form-group my-3" style={{"textAlign":"center"}}>
        <input type="submit" value="Submit" />        </div>
    </form>
        </Card.Body>
 
</div>
          </div>
       
      )
  }

  renderCard(){
      return(
          this.state.posts.map((fli,i)=>{
              return(
                  
                  <div className='container' key={i} style={{"marginTop":"2%"}}>
                      <div className="row" id="row-card" style={{"justifyContent":"center"}} >
  
      <div className="col-sm-8" >
      <div className="card">
        <div className="card-header">
          <div className="row" id="row-header">
            <div className="col-6">
              {fli.tdate}
            
            </div>
            <div className="col-6" >
              <h6 id="card-head" style={{"textAlign":"right","color":"green"}}>Rs. {fli.price}</h6>
              {/* <h6 style="text-align:right;color:green">Rs. {fli.price}</h6> */}
            </div>
          
              
          
            
            
          </div>
         
          
        </div>
        <div className="card-body"  >
          <div className="row">
            <div className="col-3">
              <h5 className="card-title">{fli.stime}</h5>
              <h5 className="card-title">{fli.src}</h5>
              <p>{fli.scity}</p>
            </div>
            <div className="col-3">
              <div className="row">
               
              </div>
             

            
            
            </div>
            <div className="col-3">
              <h5 className="card-title">{fli.dtime}</h5>
              <h5 className="card-title">{fli.des}</h5>
              <p>{fli.dcity}</p>
            
            </div>
            <div className="col-3">
              <button type="button" className="btn btn-outline-primary">Book Now</button>

            </div>
          </div>
        
        
      
        </div>
      </div>
    </div>
    </div>
                  </div>
              )
          })
      )
  }

  render() {
    return (
     
        <div>
               {this.renderHeader()}
               {this.renderForm()}
               {this.renderCard()}
         
        </div>
    );
  }
}

export default FlightSearch;



