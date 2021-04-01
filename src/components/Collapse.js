// ilk constructor --> state initialization
// render metodu ilk defa calisti
// onClick event'i calisti
// setState, state nesnesini guncelledi --> triggered render
// render metodu guncel JSX'i sayfada gosteriyor

import React from 'react';
import './Card.css';

class Collapse extends React.Component {
    constructor(){
        super();
        
        this.state = {
            showContent:false
        }

        // this.showMore= this.showMore.bind(this)
        
    }
    showMore = () =>{
        this.setState({showContent: !this.state.showContent})

        // you have to use setState because after setState, the render function is triggered
    }
    
    /*
    componentDidMount(){
        console.log("Component created")
    }
    componentDidUpdate(){
        console.log("Component updated")
    }
    */

    render() {
        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore}>
                    {/* this.props.children.props.cardTitle */}
                    { React.Children.map(this.props.children, children => children.props.cardTitle) }
                </button>
                {this.state.showContent ? (
                    <div className="collapse show">
                        {/* this.props.children */}
                        { React.Children.map(this.props.children, children => children) }
                    </div>
                    ):null
                }
                
            </div>
        );
    }
};

export default Collapse;