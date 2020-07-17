import React, { Component } from 'react'
import Title from '../../components/title'
import SubmitButton from '../../components/button/submit-button'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'
import Input from '../../components/input';

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }
  }

  onChange = (event, type) => {
    const newState = {}
    newState[type] = event.target.value

    this.setState(newState)
  }

  render() {
    const {
      email,
      password
    } = this.state

    return (
      <PageLayout>
        <div className={styles.container}>
          <Title title="Login" />
          <Input
            value={email}
            onChange={(e) => this.onChange(e, 'email')}
            label="Email"
            id="email"
          />
          <Input
            value={password}
            onChange={(e) => this.onChange(e, 'password')}
            label="Password"
            id="password"
          />  
          <SubmitButton title="Login" />
        </div>
      </PageLayout>
    )
  }
}

export default LoginPage