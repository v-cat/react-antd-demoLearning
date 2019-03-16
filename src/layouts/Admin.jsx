import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'
// creates a beautiful scrollbar
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
// import Navbar from 'components/Navbars/Navbar.jsx'
// import Footer from 'components/Footer/Footer.jsx'
// import Sidebar from 'components/Sidebar/Sidebar.jsx'
// import FixedPlugin from 'components/FixedPlugin/FixedPlugin.jsx'

import dashboardStyle from 'assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx'

import routes from 'routes.js'
import image from 'assets/img/sidebar-2.jpg'
import logo from 'assets/img/reactlogo.png'

const switchRoutes = (
    <Switch>
        {routes.map((prop, key) => {
            if (prop.layout === '/admin') {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                )
            }
        })}
    </Switch>
)
class Dashboard extends React.component {
    constructor(props) {
        super(props)
        this.state = {
            image: image,
            color: 'blue',
            hasImage: true,
            fixedClasses: 'dropdown show',
            mobileOpen: false
        }
    }
    handleImageClick = image => {
        this.setState({ image: image })
    }
    handerColorClick = color => {
        this.setState({ color: color })
    }
    handelFixedClick = () => {
        if (this.state.fixedClasses === 'dropdown') {
            this.setState({ fixedClasses: 'dropdown show' })
        } else {
            this.setState({ fixedClasses: 'dropdown' })
        }
    }
};
handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
};
getRoute() {
    return this.props.location.pathname !== '/admin/maps';
};


// resizeFunction = () => {

// }
Dashboard.PropTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(dashboardStyle)(Dashboard)
