import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'

class Card extends React.Component {
    render() {
        return (

            <div className="card w-100">
                <a href={this.props.image} target="_blank" rel="noopener noreferrer"><img src={this.props.image} className="card-img-top" alt="..." /></a>
                <div className="card-body">
                    <h5 className="card-title">{this.props.cardTitle}</h5>
                    <p className="card-text">{this.props.cardText}</p>
                    <p className="card-text"><small className="text-muted">{this.props.updatedTime}</small></p>
                </div>
            </div>

        );
    }
}

/*

Card.defaultProps= {
    cardTitle:"Default Card Title"
}

*/

Card.propTypes = {
    cardText: PropTypes.string.isRequired
};

export default Card;

/*
    First Class Functions


*/