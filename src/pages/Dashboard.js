import React from "react";
import Navbar from "../components/Navbar";
import { Switch, Route} from "react-router-dom";
import Provider from "../components/Provider";

const Dashboard = () => {
    return ( 
        <div className="dashboard">
            <Navbar />
            <div>
                <Switch>
                    <Route path="/dashboard/provider">
                        <Provider />
                    </Route>
                </Switch>
            </div>
        </div>
     );
}
 
export default Dashboard;