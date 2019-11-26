import React, { Component } from 'react';
import Papa from 'papaparse';


import '../App.css';

class SearchByFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonFile: {},
      selectedFile: null,
      loaded: 0
    }
  }

  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files,
      loaded: 0,
    })

    var fileName = event.target.files[0].name;
    console.log(fileName);
  }
  onClickHandler = () => {
    if (document.getElementById("results").innerHTML !== "") {
      document.getElementById("results").innerHTML = "";
    }
    var reader = new FileReader();


    //json  
    if (this.state.selectedFile[0].name.includes(".json")) {

      reader.onload = async (e) => {
        const json = JSON.parse(e.target.result)


        for (var i = 0; i < json.Result.length; i++) {
          var title = json.Result[i].title;
          var url = json.Result[i].url;
          var description = json.Result[i].description;
          console.log(title);
          var div = document.getElementById("results");
          var checkb = document.createElement("input");
          checkb.type = "checkbox";
          div.appendChild(checkb);
          document.getElementById("results").innerHTML += " <a href=" + url + "> " + title + "</a> <p>" + description + "</p> <br/> ";


        }
      }
      reader.readAsText(this.state.selectedFile[0])
    }


    //xml
    else if (this.state.selectedFile[0].name.includes(".xml")) {
      console.log("Uploaded an xml file")
      var parser = new DOMParser();
      reader.onload = async (e) => {
        const xml = parser.parseFromString(e.target.result, "text/xml")
        console.log(xml);

        for (var i = 0; i < xml.getElementsByTagName("result").length; i++) {
          var title = xml.getElementsByTagName("title")[i].textContent;
          var url = xml.getElementsByTagName("url")[i].textContent;
          var description = xml.getElementsByTagName("description")[i].textContent;
          var div = document.getElementById("results");
          var checkb = document.createElement("input");
          checkb.type = "checkbox";
          div.appendChild(checkb);
          document.getElementById("results").innerHTML += " <a href=" + url + "> " + title + "</a> <p>" + description + "</p> <br/>";

        }

      }
      reader.readAsText(this.state.selectedFile[0])
    }

    //csv
    else if (this.state.selectedFile[0].name.includes(".csv")) {
      console.log("Uploaded a csv file")
      reader.onload = async (e) => {

        const csv = e.target.result;
        var results = Papa.parse(csv);
        for (var i = 0; i < results.data.length; i++) {
          var title = results.data[i][0];
          var url = results.data[i][1];
          var description = results.data[i][2];
          var div = document.getElementById("results");
          var checkb = document.createElement("input");
          checkb.type = "checkbox";
          div.appendChild(checkb);
          document.getElementById("results").innerHTML += " <a href=" + url + "> " + title + "</a> <p>" + description + "</p> <br/>";

        }


      }
      reader.readAsText(this.state.selectedFile[0])
    }
    else { alert("Not a json file. Please upload a json file") }

  }

  

  render() {
    

    return (
      
      <div className="App" style={{ height: '100%' }}>
        <header className="App-header" >
          <div className="Container">
            <div className="Row">
              <div className="offset-md-3 col-md-6">
                <div className="form-group files">
                  <label>Upload your file</label>
                  <input type="file" name="file" accept=".csv,.xml,.json" onChange={this.onChangeHandler} />
                  <div>
                    <br />
                    <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
                  </div>
                  <br />
                  <div className="Results" id="results">

                  </div>
                  </div>
                </div>
              </div>
            </div>
          
        </header>
      </div>
    );
  }
}

export default SearchByFile;