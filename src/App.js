// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import FileRoutes from './component/Routing/routes';
// import { useStyles } from "./component/style/style";

// import DashboardSidebar from './component/UI/DashboardSidebar';
// import React from "react";

// const App = () => {

//   return (
//     <Router>
//       <React.Fragment>

//         <Switch>

//             <Route component={FileRoutes} />
//         </Switch>


//       </React.Fragment>

//     </Router>
//   );
// };

// export default App;



import React from "react";
import EmbedSideNav from './component/UI/EmbedSideNav'
const App = () => {

  return (
    <React.Fragment>
      <EmbedSideNav />
    </React.Fragment>

  );
};

export default App;
