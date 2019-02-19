import React, { Component } from "react";
import "./RacerDetail.css";
import DetailTable from "../DetailTable/DetailTable";
import PrinceFestivalDetails from "../PrinceFestivalDetails/PrinceFestivalDetails";
import MbzFestivalDetails from "../MbzFestivalDetails/MbzFestivalDetails";
import ZayedPrizeDetails from "../ZayedPrizeDetails/ZayedPrizeDetails";

export class RacerDetail extends Component {

  state = {
    bgcolor: ["#FDF2B0", "#BCBCBC", "#D5B7A6", "#FEFEFE"],
    selectedColor: ""
  };

  componentDidMount() {
    const item = this.state.bgcolor[
      Math.floor(Math.random() * this.state.bgcolor.length)
    ];
    this.setState({ selectedColor: item });
  }
  
  render() {
    const { racer } = this.props;
    return (
      <div className="racerdetails">
        <div className="accordion" id="accordionExample">
          <div
            className="card card-custom"
            style={{ backgroundColor: this.state.selectedColor }}
          >
            <div className="card-header" id="headingOne">
              <h6 className="mb-0">
                <ul
                  className="namelist"
                  data-toggle="collapse"
                  data-target={`#collapse${racer.id}`}
                  aria-expanded="false"
                  aria-controls={`collapse${racer.id}`}
                >
                  <li>
                    <img width={30} height={40} src={racer.image} alt="" />
                  </li>
                  <li>{racer.position}</li>
                  <li>{racer.name}</li>
                  <li>{racer.symbols}</li>
                  <li>{racer.points}</li>
                </ul>
              </h6>
            </div>
            <div
              id={`collapse${racer.id}`}
              className="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body" id='child1'>
                <DetailTable />
                <br />
                <PrinceFestivalDetails selectedColor={this.state.selectedColor} id={racer.id}/>
                <MbzFestivalDetails selectedColor={this.state.selectedColor} id={racer.id}/>
                <ZayedPrizeDetails selectedColor={this.state.selectedColor} id={racer.id}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RacerDetail;
