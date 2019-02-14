import React, { Component } from 'react';
import './RacerDetail.css';
import DetailTable from '../DetailTable/DetailTable';
import PrinceFestivalDetails from '../PrinceFestivalDetails/PrinceFestivalDetails';
import jersey from './jersey-1.png';

export class RacerDetail extends Component {
  render() {
    return (
        <div className="racerdetails">
            <div class="accordion" id="accordionExample">
                <div class="card card-custom">
                    <div class="card-header" id="headingOne">
                    <h6 class="mb-0">
                        <ul className ="namelist" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <li><img width={30}
                                    height={40} 
                                    src={jersey} alt=""/></li>
                            <li>1</li>
                            <li>Mohammed Rashid</li>
                            <li>7</li>
                            <li>40</li>
                        </ul> 
                    </h6>
                    </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body" id="child1">
                      <DetailTable/>
                      <br/>
                      <PrinceFestivalDetails/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default RacerDetail
