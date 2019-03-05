import React, { Component } from 'react';

class CandyList extends Component {
    render() {
        return (
            <article>
                <h1>Candy List</h1>
                {this.props.candies.map((singleCandy) => {
                   return <p key={singleCandy.id}>{singleCandy.name}</p>
                })}
            </article>
        );
    }
}

export default CandyList;