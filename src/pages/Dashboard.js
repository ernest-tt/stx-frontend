import React from "react";
import Navbar from "../components/Navbar";
import { Switch, Route} from "react-router-dom";
import Provider from "../components/Provider";
import Requests from "../components/Requests";
import Accounts from "../components/Accounts";
import NotFound from "./NotFound";

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
                        <Requests />
                    </Route>
                    <Route path="/dashboard/accounts">
                        <Accounts />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </div>
     );
}
 
export default Dashboard;