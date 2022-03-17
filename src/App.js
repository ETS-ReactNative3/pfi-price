import React, { Component } from 'react';
import Jimp from 'jimp';
import './App.css';


class App extends Component {

  constructor() {
      super();
      this.state = {
        converted_image: "",
        price1: "",
        price2: "",
        price3: "",
        price4: "",
        place: "",
        date: "",
        spinner: false,
        regenerate: false
      };
      this.generate = this.generate.bind(this);
      this.regenerate = this.regenerate.bind(this);



  }


  componentDidMount() {

  }

  async generate(){


    const history = this;
    history.setState({spinner: true , regenerate: true})

    const image = await Jimp.read('/pfi.png');
    // Defining the text font
    const font = await Jimp.loadFont(Jimp.FONT_SANS_128_BLACK);
    await image.print(font, 2800, 2100, this.state.price1);
    await image.print(font, 2800, 2350, this.state.price2);
    await image.print(font, 2800, 2550, this.state.price3);
    await image.print(font, 2800, 2750, this.state.price4);
    await image.print(font, 1400, 1550, this.state.date);
    await image.print(font, 2800, 4850, this.state.place);

    image.getBase64(Jimp.AUTO,function(err,data){
         history.setState({converted_image: data, spinner: false })
     });
  }

  async regenerate(){
    this.setState({regenerate: false, converted_image: ""})

  }

  updateInputValue(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }



  render() {
    return (
      <div className="App">


          <div className = "centerdiv">

            <h2>Price Image Generator</h2>

          </div>



          {this.state.regenerate &&

          <div className = "centerdiv" id = "regenerate" >

            <table width = "100%">
              <tbody>
              <tr>
                <td align = "center">
                  <input type = "button" onClick={this.regenerate} value = "Re-Generate" />
                </td>
              </tr>
              </tbody>
            </table>


          </div>
          }

            <br/><br/>


          {this.state.spinner &&

            <div id = "spinner" className = "centerdiv" >
              <table width = "100%">
                <tbody>
                <tr>
                  <td align = "center">
                    <img  alt = "" src = "spinner.gif" />
                  </td>
                </tr>
                </tbody>
              </table>
            </div>

          }


          {this.state.converted_image !== "" &&

            <img  alt = "" width = "100%" src = {this.state.converted_image} />

          }

          {!this.state.regenerate &&
          <div className = "centerdiv" id = "dataentry">
            <table className = "centerdiv pricetable">

              <tbody>
              <tr>
                <td align = "center">
                  <input type="text" id = "price1"  placeholder="FE 550 (12 - 25 MM)" onChange={event => this.updateInputValue(event)} />
                </td>
              </tr>
              <tr>
                <td align = "center">
                  <input type="text" id = "price2"  placeholder="FE 550 (10 MM)" onChange={event => this.updateInputValue(event)}/>
                </td>
              </tr>
              <tr>
                <td align = "center">
                  <input type="text" id = "price3"  placeholder="FE 550 (08 & 32 MM)" onChange={event => this.updateInputValue(event)}/>
                </td>
              </tr>
              <tr>
                <td align = "center">
                  <input type="text" id = "price4"  placeholder="FE 550D (12 - 25 MM)" onChange={event => this.updateInputValue(event)}/>
                </td>
              </tr>
              <tr>
                <td align = "center">
                  <input type="text" id = "place"  placeholder="Place"  onChange={event => this.updateInputValue(event)}/>
                </td>
              </tr>
              <tr>
                <td align = "center">
                  <input type="text" id = "date" placeholder="Date"  onChange={event => this.updateInputValue(event)}/>
                </td>
              </tr>
              <tr>
                <td align = "center">
                  <input type = "button" onClick={this.generate} value = "Generate" />
                </td>
              </tr>

              </tbody>
            </table>
          </div>
          }

      </div>
    );
  }
}

export default App;
