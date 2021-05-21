import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import BigNumber from 'bignumber.js';

import { getTokenVesting, getSimpleToken } from '../contracts'

import Header from './Header'
import VestingDetails from './VestingDetails'
import VestingSchedule from './VestingSchedule'
import Spinner from './Spinner'

import '../stylesheets/TokenVestingApp.css'


class TokenVestingApp extends Component {
  constructor() {
    super()
    this.state = { name: 'Token', loading: true }
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    const { address, token } = this.props
    return (
      <div className="TokenVestingApp">

        { this.state.loading ? <Spinner /> : null }

        <Header address={ address } token={ token } tokenName={ this.state.name } />

        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <VestingDetails
                address={ address }
                token={ token }
                details={ this.state }
                getData={ () => this.getData() }
                setLoader={ x => this.setLoader(x) }
              />
            </Col>

            <Col xs={12} md={6}>
              <VestingSchedule details={ this.state } />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

  setLoader(loading) {
    this.setState({ loading })
  }

  async getData() {
    const { address, token } = this.props

    const tokenVesting = await getTokenVesting(address)
    const tokenContract = await getSimpleToken(token)

    const start = await tokenVesting.methods.start().call()
    const duration = await tokenVesting.methods.duration().call()
    const end = new BigNumber(start).plus(duration).toFixed();

    const balance  = await tokenContract.methods.balanceOf(address).call();
    const released = await tokenVesting.methods.released(token).call();
    const total = new BigNumber(balance).plus(released).toFixed();

    const state = {
      start,
      end,
      cliff: await tokenVesting.methods.cliff().call(),
      total,
      released,
      vested: await tokenVesting.methods.released(token).call(),
      decimals: await tokenContract.methods.decimals().call(),
      beneficiary: await tokenVesting.methods.beneficiary().call(),
      owner: await tokenVesting.methods.owner().call(),
      revocable: await tokenVesting.methods.revocable().call(),
      revoked: await tokenVesting.methods.revoked(token).call(),
      name: await tokenContract.methods.name().call(),
      symbol: await tokenContract.methods.symbol().call(),
      loading: false
    };

    debugger;
    this.setState(state)
  }
}


export default TokenVestingApp
