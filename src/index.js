import React from 'react';
import ReactDOM from "react-dom";
import Card from './components/Card'
import Collapse from './components/Collapse';
import '../src/components/Card.css'

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="card-group w-100">
                    <div className="col">
                        <Collapse href="collapseExample1">
                            <Card
                                cardTitle="Title_1"
                                cardText="Lorem Ipsum Text I"
                                updatedTime="Last updated 1 min ago"
                                image="https://picsum.photos/id/1015/200/300"
                            />
                        </Collapse>
                    </div>
                    <div className="col">
                        <Collapse href="collapseExample2">
                            <Card
                                cardTitle="Title_2"
                                cardText="Lorem Ipsum Text II"
                                updatedTime="Last updated 2 minutes ago"
                                image="https://picsum.photos/id/1011/200/300"
                            />
                        </Collapse>
                    </div>
                    <div className="col">
                        <Collapse href="collapseExample3">
                            <Card
                                cardTitle="Title_3"
                                cardText="Lorem Ipsum Text III"
                                updatedTime="Last updated 3 minutes ago"
                                image="https://picsum.photos/id/1026/200/300"
                            />
                        </Collapse>
                    </div>
                    <div className="col">
                        <Collapse href="collapseExample4">
                            <Card
                                cardTitle="Title_4"
                                cardText="Lorem Ipsum Text IV"
                                updatedTime="Last updated 4 minutes ago"
                                image="https://picsum.photos/id/1012/200/300"
                            />
                        </Collapse>
                    </div>
                    <div className="col">
                        <Collapse href="collapseExample5">
                            <Card
                                cardTitle="Title_5"
                                cardText="Lorem Ipsum Text V"
                                updatedTime="Last updated 5 minutes ago"
                                image="https://picsum.photos/id/110/200/300"
                            />
                        </Collapse>
                    </div>
                    <div className="col">
                        <Collapse href="collapseExample6">
                            <Card
                                cardTitle="Title_6"
                                cardText="Lorem Ipsum Text VI"
                                updatedTime="Last updated 6 minutes ago"
                                image="https://picsum.photos/id/1065/200/300"
                            />
                        </Collapse>
                    </div>
                    <div className="col">
                        <Collapse href="collapseExample7">
                            <Card
                                cardTitle="Title_7"
                                cardText="Lorem Ipsum Text VII"
                                updatedTime="Last updated 7 minutes ago"
                                image="https://picsum.photos/id/128/200/300"
                            />
                        </Collapse>
                    </div>
                    <div className="col">
                        <Collapse href="collapseExample8">
                            <Card
                                cardTitle="Title_8"
                                cardText="Lorem Ipsum Text VIII"
                                updatedTime="Last updated 8 minutes ago"
                                image= "https://picsum.photos/id/1038/200/300"
                            />
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>);
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);