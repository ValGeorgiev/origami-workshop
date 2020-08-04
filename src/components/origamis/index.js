import React, { useState, useCallback, useEffect } from 'react'
import styles from './index.module.css'
import Origam from '../origam'
import getOrigami from '../../utils/origami'


const Origamis = (props) => {
  const [origamis, setOrigamis] = useState([])

  const getOrigamis = useCallback(async () => {
    const origamis = await getOrigami(props.length)
    setOrigamis(origamis)
  }, [props.length])

  const renderOrigamis = () => {
    return origamis.map((origam, index) => {
      return (
        <Origam key={origam._id} index={index} {...origam} />
      )
    })
  }

  useEffect(() => {
    getOrigamis()
  }, [props.updatedOrigami, getOrigamis])

  return (
    <div className={styles["origamis-wrapper"]}>
      {renderOrigamis()}
    </div>
  )
}

export default Origamis
