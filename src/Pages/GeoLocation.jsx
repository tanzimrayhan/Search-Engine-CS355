import React,{Component} from "react"
import '../App.css';
import { geolocated } from "react-geolocated";

class GeoLocation extends Component{
    render (){
        document.title="Geo-Location"
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
            <div className="App" style={{height:'100%'}}>
          <header className="App-header" >
            <table>
                <tbody>
                    <tr>
                        <td>Latitude : </td>
                        <td>{this.props.coords.latitude}</td>
                    </tr>
                    <tr>
                        <td>Longitude : </td>
                        <td>{this.props.coords.longitude}</td>
                    </tr>
                    <tr>
                        <td>Altitude : </td>
                        <td>{this.props.coords.altitude}</td>
                    </tr>
                    <tr>
                        <td>Heading : </td>
                        <td>{this.props.coords.heading}</td>
                    </tr>
                    <tr>
                        <td>Speed : </td>
                        <td>{this.props.coords.speed}</td>
                    </tr>
                </tbody>
            </table>
            </header>
            </div>
        ) : (
            <div>Getting the location data&hellip; </div>
        );
    }
}
 
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(GeoLocation);