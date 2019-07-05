import React from 'react';
import SideBar from './Sidebar';
import MainContent from './MainContent';

function Content() {
    return (
        <div className="content clear">
             <SideBar />
            <MainContent />
        </div>
    );
}

export default Content;
