import React from "react";
import Navbar from "../components/Navbar";
import { Switch, Route} from "react-router-dom";
import Provider from "../components/Provider";
import Requests from "../components/Requests";

const Dashboard = () => {
    return ( 
        <div className="dashboard">
            <Navbar />
            <div>
                <Switch>
                    <Route path="/dashboard/providers">
                        <Provider />
                    </Route>
                    <Route path="/dashboard/requests">
                        <Requests />
                    </Route>
                </Switch>
            </div>
        </div>
     );
}
 
export default Dashboard;