import React, { useState, useCallback, useEffect, useMemo, useContext } from 'react'
import styles from './index.module.css'
import Origam from '../origam'
import getOrigami from '../../utils/origami'
import UserContext from '../../Context'


const Origamis = (props) => {
  const context = useContext(UserContext)
  const [origamis, setOrigamis] = useState(context.origamis || [])

  const getOrigamis = useCallback(async () => {
    const origamis = await getOrigami(props.length)
    setOrigamis(origamis)
  }, [props.length])

  const renderOrigamis = useMemo(() => {
    return origamis.map((origam, index) => {
      return (
        <Origam key={origam._id} index={index} {...origam} />
      )
    })
  }, [origamis])

  useEffect(() => {
    getOrigamis()
  }, [props.updatedOrigami, getOrigamis])

  return (
    <div className={styles["origamis-wrapper"]}>
      {renderOrigamis}
    </div>
  )
}

export default Origamis
