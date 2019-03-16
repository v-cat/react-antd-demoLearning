import React from 'react'
import PropTypes from 'prop-types'
// react plugin for creating charts
import ChartistGraph from 'react-chartist'
// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles'
import Icon from '@material-ui/core/Icon'
// @material-ui/icons
import Store from '@material-ui/icons/Store'
import Warning from '@material-ui/icons/Warning'
import DateRange from '@material-ui/icons/DateRange'
import LocalOffer from '@material-ui/icons/LocalOffer'
import Update from '@material-ui/icons/Update'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import AccessTime from '@material-ui/icons/AccessTime'
import Accessibility from '@material-ui/icons/Accessibility'
import BugReport from '@material-ui/icons/BugReport'
import Code from '@material-ui/icons/Code'
import Cloud from '@material-ui/icons/Cloud'
// core components
import GridItem from 'components/Grid/GridItem.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
class Dashboard extends React.Component {
  state = {
    value: 0
  }
  handleChange = (event, value) => {
    this.setState({ value })
  }
  handleChangeIndex = index => {
    this.setState({ value: index })
  }
  render() {
    const { classes } = this.props
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3} />
        </GridContainer>
      </div>
    )
  }
}
