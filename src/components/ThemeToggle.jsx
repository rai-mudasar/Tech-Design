'use client'
import { useState, useEffect } from 'react'

export default function ThemeToggle() {
    const [theme, setTheme] = useState("light")

    useEffect( () => {
        const storedTheme = localStorage.getItem('theme')
        if(storedTheme){
            setTheme(storedTheme)
            document.documentElement.classList.toggle('dark', storedTheme === 'dark')
        } 
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark' 
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
        document.documentElement.classList.toggle('dark', newTheme === 'dark')
    }
    return (
        <button 
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer absolute z-100 top-5 right-5"
        >{theme === "dark" ? "🌞" : "🌙"}</button>
    )
}