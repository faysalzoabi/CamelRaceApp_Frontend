import React, { Component } from 'react'
import './PrinceFestivalDetails.css';

export class PrinceFestivalDetails extends Component {
  render() {
    return (
        <div className="festivalwrapper">
            <div class="accordion" id="accordionExample">
            <div class="card">
                <div class="card-header cardchild">
                    <h6 class="mb-0">
                        <div data-toggle="collapse" data-target="#collapseOneA">
                            Crown Prince Fetisval
                        </div>
                    </h6>
                </div>
                    <div class="card-body child1body" data-parent="#child1" id="collapseOneA">
                        <div className="content">
                            <div>
                                <h5>Date</h5>
                                <h6>12-18-2018</h6>
                            </div>
                            <div>
                                <h5>Round</h5>
                                <h6>1</h6>
                            </div>
                            <div>
                                <h5>Rank</h5>
                                <h6>1</h6>
                            </div>
                            <div>
                                <h5>Age</h5>
                                <h6>Truth</h6>
                            </div>
                            <div>
                                <h5>Time</h5>
                                <h6>5:42:04</h6>
                            </div>
                            <div>
                                <h5>Points</h5>
                                <h6>6</h6>
                            </div>
                        </div>
                        <div className="videocontent">
                            <h5>Video Link</h5>
                            <hr/>
                            <video width="110" height="90" controls>
                                <source src="https://www.youtube.com/embed/tgbNymZ7vqY" type="video/mp4"/>
                             </video> 
                        
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
  }
}

export default PrinceFestivalDetails
