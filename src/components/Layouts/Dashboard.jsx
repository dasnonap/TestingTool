import React from "react";
import Footer from "../Sections/Footer";
import Header from "../Sections/Header";
import Wrapper from "../UI/Wrapper";
import Panel from "../Sections/Panel";

const panelNavigation = [
    {
        title: 'Dashboard',
        url: '/dashboard',
    },
    {
        title: 'Tokens',
        url: '/dashboard/tokens',
    },
    {
        title: 'Sites',
        url: '/dashboard/sites',
    },
    {
        title: 'Results',
        url: '/dashboard/results'
    }
];
const Dashboard = (props) => {
    return(
        <Wrapper>
            <Header />
            
            <Panel asideMenu={panelNavigation}/>

            <Footer />
        </Wrapper>
    );
}

export default Dashboard;