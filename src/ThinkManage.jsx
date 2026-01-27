import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import DynamicTopics from './DynamicTopics'
import './App.css'



function ThinkManage() {
       
      return (
        <div className="app.container">
        <nav>
          <Link to="dynamictopics">Dynamic Topics</Link> |
          </nav>
         <Outlet />
        </div>
                         
      )

}

export default ThinkManage





