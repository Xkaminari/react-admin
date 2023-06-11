import React, { useEffect } from 'react'
import { tokens, useTheme } from '../../ThemeContext';

export default function Analytics() {
    const isDark = useTheme()
    const mainStyle = {
        backgroundColor: tokens(isDark).primary,
        color: tokens(isDark).text,
        height: "100%"
    }
    
    return (
        <div style={mainStyle}>
            Analytics
        </div>
    )
}
