import React, { Component } from "react";
import { connect } from 'react-redux';
import "./ZayedPrizeDetails.css";
import { fetchEvents } from '../../store/actions';

export class ZayedPrizeDetails extends Component {

  handleClick =(id) => {
    console.log('hellooo');
    console.log(id);
    this.props.dispatch(fetchEvents(id))
  }
  
  render() {
    const { id, event } = this.props

    return (
      <div className="festivalwrapper">
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header cardchild">
              <h6 className="mb-0">
                <div
                  className="cardtitle"
                  data-toggle="collapse"
                  data-target={`#collapseOneC${id}`}
                  onClick={() => this.handleClick(id)}
                >
                  Zayed Grand Prize{" "}
                  <span className="mr-3 float-right">
                    8<i className="fas fa-angle-down rotate-icon ml-2" />
                  </span>
                </div>
              </h6>
            </div>
            <div
              style={{ backgroundColor: this.props.selectedColor }}
              className="card-body child1body collapse"
              data-parent="#child1"
              id={`collapseOneC${id}`}
            >
              <div className="content">
                <div>
                  <h5>Date</h5>
                  <h6>{new Date(event.eventdate).toLocaleDateString()}</h6>
                </div>
                <div>
                  <h5>Round</h5>
                  <h6>{event.eventRound}</h6>
                </div>
                <div>
                  <h5>Rank</h5>
                  <h6>{event.rank}</h6>
                </div>
                <div>
                  <h5>Age</h5>
                  <h6>{event.age}</h6>
                </div>
                <div>
                  <h5>Time</h5>
                  <h6>{new Date(event.eventdate).toLocaleTimeString()}</h6>
                </div>
                <div>
                  <h5>Points</h5>
                  <h6>{event.points}</h6>
                </div>
              </div>
              <div className="videocontent">
                <div className="mb-3 border-custom">
                  <h5>Video Link</h5>
                </div>
                <video width="110" height="90" controls>
                  <source
                    src="https://www.youtube.com/embed/tgbNymZ7vqY"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    event:state.event
  }
}
export default connect(mapStateToProps)(ZayedPrizeDetails);





