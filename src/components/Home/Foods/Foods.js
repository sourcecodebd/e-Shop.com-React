import React from 'react';
import './Foods.css';
import { Tabs, Tab } from 'react-bootstrap'
import AvailableFoods from '../AvailableFoods/AvailableFoods';
import LimitedFoods from '../LimitedFoods/LimitedFoods';
import './Foods.css';

const Foods = () => {

    return (
        <div className="food-container" id="food">
            <Tabs
                defaultActiveKey="home"
                transition={false}
                className="mb-3 foods gap-2"
            >
                <Tab eventKey="home" title="Available Foods" className="tabs">
                    <AvailableFoods />
                </Tab>
                <Tab eventKey="profile" title="Limited Foods" className="tabs">
                    <LimitedFoods />
                </Tab>
            </Tabs>
        </div>
    );
};

export default Foods;