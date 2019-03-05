import React, {Component} from 'react';
import EmployeeList from './employee/EmployeeList'
import LocationList from './location/LocationList'
import CandyList from './candy/CandyList'
import CandyTypeList from './candytype/CandyTypeList'

class Kandy extends Component {
    locations = [
        {id: 1, name: "Kandy Korner North", address: "123 Main Street"},
        {id: 2, name: "Kandy Korner West", address: "321 Niam Street"}
    ]
    employees = [
        {id: 1, name: "David"},
        {id: 2, name: "Megan"},
        {id: 3, name: "Kim"},
        {id: 4, name: "Josh"}
    ]
    candyTypes = [
        {id: 1, name: "Chocolate"},
        {id: 2, name: "Peanut Butter"},
        {id: 3, name: "Caramel"}
    ]
    candies = [
        {id: 1, name: "Reese's"},
        {id: 2, name: "Snickers"},
        {id: 3, name: "Milky Way"}
    ]

    state = {
        locations: this.locations,
        employees: this.employees,
        candyTypes: this.candyTypes,
        candies: this.candies
    }

    render(){
        return (
            <div>
                 <EmployeeList employees={this.state.employees} />
                <LocationList locations={this.state.locations} />
                <CandyList candies={this.state.candies} />
                <CandyTypeList candyTypes={this.state.candyTypes} />

            </div>
        )
    }
}

export default Kandy;