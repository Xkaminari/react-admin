import React, { useEffect } from 'react'
import { useTheme, useThemeUpdate } from '../../ThemeContext'
import { tokens } from '../../ThemeContext'
import "./global.css"

export default function Topbar() {
    const isDark = useTheme()
    const toggleTheme = useThemeUpdate()
    const mainStyle = {
        backgroundColor: tokens(isDark).primary,
        color: tokens(isDark).text,
    }

    return (<div className='topbar' style={mainStyle}>
        <h1 className='section_title' style={mainStyle}>Dashboard</h1>
        <div className='topbar_buttons' style={mainStyle}>
            <div className='hover_container theme_mode' onClick={toggleTheme}>
                {isDark ? <i className="fa-regular fa-sun fa-lg"></i> : <i className="fa-regular fa-moon fa-lg"></i>}
                <div className='hover_div'></div>
            </div>
            <div className='hover_container notifications'>
                <i className="fa-regular fa-bell fa-lg"></i>
                <div className='hover_div'></div>
            </div>
            <div className='hover_container user_menue'>
                <i className="fa-regular fa-user fa-lg"></i>
                <div className='hover_div'></div>
            </div>
        </div>
    </div>
    )
}
