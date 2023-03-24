import React from "react";
import Navbar from "../components/Navbar";
import { Switch, Route} from "react-router-dom";
import Provider from "../components/Provider";
import Requests from "../components/Requests";
import Accounts from "../components/Accounts";

const Dashboard = () => {
    return ( 
        <div className="dashboard">
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/dashboard">
                        <Provider />
                    </Route>
                    <Route path="/dashboard/requests">
                        <Requests path="/dashboard/accounts"/>
                    </Route>
                    <Route>
                        <Accounts />
                    </Route>
                </Switch>
            </div>
        </div>
     );
}
 
export default Dashboard;