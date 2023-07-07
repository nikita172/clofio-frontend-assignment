import React from 'react'
import "./home.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Header from "../../components/header/Header"
import Cards from '../../components/cards/Cards'
import Table1 from '../../components/table1/Table1'
import Table2 from '../../components/table2/Table2'
const Home = () => {
  return (
    <div className='homeContainer'>
      <Sidebar />
      <div className='mainContainer'>
        <Header />
        <Cards />
        <Table1 title="Bucket you own" />
        <Table2 title="Approval assigned to you" />
        <Table1 title="Bucket you are member of" />
      </div>

    </div>
  )
}

export default Home