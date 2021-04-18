import React from 'react';
import './App.css';
import { MainScreen } from "./Screens/MainScreen/MainScreen";
import { StatutoryDocuments } from "./Screens/StatutoryDocuments/StatutoryDocuments";
import { GalleryScreen } from "./Screens/GalleryScreen/GalleryScreen";
import { WorkPlansScreen } from "./Screens/WorkPlansScreen/WorkPlansScreen";
import { HistoryScreen } from "./Screens/HistoryScreen/HistoryScreen";
import { TerritorialOrganizationsScreen } from "./Screens/TerritorialOrganizationsScreen/TerritorialOrganizationsScreen";
import { RepublicanCommitteeScreen } from "./Screens/RepublicanCommitteeScreen/RepublicanCommitteeScreen";
import { BureauScreen } from "./Screens/BureauScreen/BureauScreen";
import { ApparatusScreen } from "./Screens/ApparatusScreen/ApparatusScreen";
import { AskQuestionScreen } from "./Screens/AskQuestionScreen/AskQuestionScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";

const MainPage = () => {
    return <MainScreen/>
}

const StatutoryDocumentsPage = () => {
    return <StatutoryDocuments/>
}

const GalleryPage = () => {
    return <GalleryScreen/>
}

const WorkPlansPage = () => {
    return <WorkPlansScreen/>
}

const HistoryPage = () => {
    return <HistoryScreen/>
}

const TerritorialOrganizationsPage = () => {
    return <TerritorialOrganizationsScreen/>
}

const RepublicanCommitteePage = () => {
    return <RepublicanCommitteeScreen/>
}

const BureauPage = () => {
    return <BureauScreen/>
}

const ApparatusPage = () => {
    return <ApparatusScreen/>
}

const AskQuestionPage = () => {
    return <AskQuestionScreen/>
}

function App() {
    return (
        <Router>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/statutory_documents" component={StatutoryDocumentsPage}/>
            <Route exact path="/gallery" component={GalleryPage}/>
            <Route exact path="/work_plans" component={WorkPlansPage}/>
            <Route exact path="/history" component={HistoryPage}/>
            <Route exact path="/organization" component={TerritorialOrganizationsPage}/>
            <Route exact path="/committee" component={RepublicanCommitteePage}/>
            <Route exact path="/bureau" component={BureauPage}/>
            <Route exact path="/apparatus" component={ApparatusPage}/>
            <Route exact path="/form" component={AskQuestionPage}/>
        </Router>
    )
}

export default App;
