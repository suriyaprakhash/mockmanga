import React, { useContext } from 'react'
import { ThemeContext } from './shared/theme/themeContextProvider'

function Footer() {

    const [theme, ] = useContext(ThemeContext)
    return (
        <section className="bg-secondary-bg text-secondary-text/80 h-[100px] grid grid-cols-6 items-center text-center">
            <div className="col-span-6">All rights reserved</div> {theme}
        </section>
    )
}

export default Footer