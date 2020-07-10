import React, { Component } from 'react'
import styles from './index.module.css'
import Origam from '../origam';

class Origamis extends Component {
  constructor(props) {
    super(props)

    this.state = {
      origamis: []
    }
  }

  getOrigamis = async () => {
    const promise = await fetch('http://localhost:9999/api/origami')
    const origamis = await promise.json()
    this.setState({
      origamis
    })
  }

  renderOrigamis() {
    const { origamis } = this.state

    return origamis.map(origam => {
      return (
        <Origam key={origam._id} {...origam} />
      )
    })
  }

  componentDidMount() {
    this.getOrigamis()
  }

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Orgimis</h1>
        <div className={styles["origamis-wrapper"]}>
          {this.renderOrigamis()}
        </div>
      </div>
    )
  }
}

export default Origamis