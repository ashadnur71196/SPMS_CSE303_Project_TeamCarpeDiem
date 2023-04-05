import React from 'react'
import Facultynav from '../../facultypages/facultynav'
import '../../../styles/facultycss/faculty.css'
import { Plolink } from '../PloAnalysis/Plolink'

const ViewQues = () => {
  return (
    <div>
        <Facultynav/>
        <div className="main-content">ViewQues
        <Plolink/>
        </div>
    </div>
  )
}

export default ViewQues