import React from 'react';
import  "./style.css";
import {Table} from "react-bootstrap"
import { Link } from 'react-router-dom';

class Corona extends React.Component {
         constructor(props) {
            super(props);

        this.state = {
            Global:{"NewConfirmed":204976,"TotalConfirmed":29759216,"NewDeaths":4615,"TotalDeaths":939414,"NewRecovered":146148,"TotalRecovered":20222330},
            items: [],
            isLoaded: false
        }

    }

    
       componentDidMount() {
          fetch('https://api.covid19api.com/summary')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }

render() {

        const { isLoaded, items } = this.state;

       


        if (!isLoaded)
            return <div>Loading...</div>;

        return (
                    
                 <div>                  
          <div class="header">
          <a  class="logo">CORONA TRACER</a>
          <div class="header-right">
            
            
            <Link to="/">Logout</Link>
          
          </div>
        </div>

        <br></br>
          <div className="Container">
          

          <table className="table">
              <thead>
             <tr>
                 <th style={{backgroundColor:"gold",textAlign:"center",color:"white"}}><h4 style={{color:"black"}}>NewConfirmed</h4> {this.state.Global.NewConfirmed}</th>
                 <th style={{backgroundColor:"red",textAlign:"center",color:"white"}}><h4 style={{color:"black"}}>TotalConfirmed </h4>{this.state.Global.TotalConfirmed}</th>
                 <th style={{backgroundColor:"orange",textAlign:"center",color:"white"}}><h4 style={{color:"black"}}>NewDeaths </h4>{this.state.Global.NewDeaths}</th>
                 <th style={{backgroundColor:"purple",textAlign:"center",color:"white"}}><h4 style={{color:"black"}}>TotalDeaths</h4> {this.state.Global.TotalDeaths}</th>
                 <th style={{backgroundColor:"yellowgreen",textAlign:"center",color:"white"}}><h4 style={{color:"black"}}>NewRecovered</h4> {this.state.Global.NewRecovered}</th>
                 <th style={{backgroundColor:"salmon",textAlign:"center",color:"white"}}><h4 style={{color:"black"}}>TotalRecovered</h4> {this.state.Global.TotalRecovered}</th>
             </tr>
             </thead>
          </table>
                           
                          <table className="table">

  <thead style={{backgroundColor:"black", color:"white"}}>
  
    <tr>
      <th scope="col">Country</th>
      <th scope="col">CountryCode</th>
      <th scope="col">Slug</th>
      <th scope="col">NewConfirmed</th>
      <th scope="col">TotalConfirmed</th>
      <th scope="col">NewDeaths</th>
      <th scope="col">TotalDeaths</th>
      <th scope="col">NewRecovered</th>
      <th scope="col">TotalRecovered</th>
      <th scope="col">Date</th>
    </tr>
  </thead>

  
  
  {items.Countries.map(item => (
  <tbody>
  
    <tr>
                <th style={{backgroundColor:"darkorchid", color:"black"}} scope="row">{item.Country}</th>
      <td style={{backgroundColor:"royalblue", color:"white"}}>{item.CountryCode}</td>
      <td style={{backgroundColor:"brown", color:"white"}}>{item.Slug}</td>
      <td style={{backgroundColor:"orange", color:"white"}}>{item.NewConfirmed}</td>
      <td style={{backgroundColor:"purple", color:"white"}}>{item.TotalConfirmed}</td>
      <td style={{backgroundColor:"red", color:"white"}}>{item.NewDeaths}</td>
      <td style={{backgroundColor:"gold", color:"white"}}>{item.TotalDeaths}</td>
      <td style={{backgroundColor:"yellowgreen", color:"white"}}>{item.NewRecovered}</td>
      <td style={{backgroundColor:"salmon", color:"white"}}>{item.TotalRecovered}</td>
      <td style={{backgroundColor:"yellowgreen", color:"white"}}>{item.Date}</td>
    </tr>
    </tbody>
     ))}  
      
</table>
  </div>     
       </div>    
        );

    }

}

export default Corona;
