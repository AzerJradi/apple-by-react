import React from 'react'
import '../App.css'
import MainNavbar from '../component/MainNavbar'
import FirstPart from '../component/FirstPart'
import Secondpart from '../component/Secondpart'
import ThirdPart from '../component/ThirdPart'
import FourthPart from '../component/FourthPart'
import Fifthpart from '../component/Fifthpart'
import Sixthpart from '../component/Sixthpart'
import Seventhpart from '../component/Seventhpart'
import LongDes from '../component/LongDes'
import Href from '../component/Href'

const AllData = () => {
  return (
    <>
    <MainNavbar/>
    <FirstPart/>
    <Secondpart/>
    <ThirdPart/>
    <FourthPart/>
    <Fifthpart/>
    <Sixthpart/>
    <Seventhpart/>
    <div className="lastpart">
      <LongDes/>
      <Href className="hreff"/>
    </div>
    </>
  )
}

export default AllData
