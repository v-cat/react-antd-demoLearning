import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '@material-ui/core/Icon'

import sidebarStyle from 'assets/jss/material-dashboard-react/components/sidebarStyle.jsx'

const Slidebar = ({ ...props }) => {
    function activeRoute(routeName) {
        return props.location.pathname.indexOf(routeName) > -1 ? true : false
    }
    const { classes, color, logo, image, logoText, routes } = props
    var links = <List className={classes.list} >
        {routes.map((prop, key) => {
            var activePro = '',
            var listItemClasses;
            if (prop.path === '/upgrad-to-pro') {
                activePro = classes.activePro + '';
                listItemClasses = classNames({
                    ['' + classes[color]]: true
                });
            } else {
                listItemClasses = classNames({
                    ['' + classes[color]]: activeRoute(prop.layout + prop.path)
                })
            }
            const whiteFontClasses = classNames({
                ['' + classes.whiteFont]: activeRoute(prop.layout + prop.path)
            });
            return (
                <NavLink to={prop.layout + prop.path} className={activePro + classes.item} activeClassName='active' key={key}>
                    <ListItem button className={classes.itemLink + listItemClasses}>
                        {typeof prop.icon === 'string' ? (
                            <Icon className={classNames(classes.itemIcon, whiteFontClasses, {
                                [classes.itemIconRTL]: props.rtlActive
                            })}>    {prop.icon}</Icon>

                        ) : (
                                <prop.icon className={classNames(classes.itemIcon, whiteFontClasses, {
                                    [classes.itemIconRTL]: props.rtlActive
                                })} />
                            )}
                        <ListItemText primary={props.rtlActive ? prop.rtlName : prop.name}

                            className={classNames(classes.itemText, whiteFontClasses, {
                                [classes.itemTextRTL]: props.rtlActive
                            })}
                            disableTypography={true}
                        />
                    </ListItem>
                </NavLink>
            )

        })}
    </List>

}
var brand = (
    <div className={classes.logo}>
        <a href="https://www.creative-tim.com" className={classNames(classes.logoLink, {
            [classes.logoLinkRTL]: props.rtlActive
        })}>
            <div className={classes.logoImage}>
                <img src={logo} alt="logo" className={classes.img}></img>
            </div>
            {logoText}
        </a>
    </div>
);
return(
    <div>
        ddddd
        </div>
)