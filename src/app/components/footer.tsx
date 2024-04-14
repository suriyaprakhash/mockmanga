import React, { useContext } from 'react'
import { ThemeContext } from './context/themeContextProvider'

function Footer() {

    return (
        <section className="bg-secondary-bg text-secondary-text/80 sm:h-[10vh] grid grid-cols-6 items-center text-center">
            <div className="col-span-6">All rights reserved</div>
        </section>
    )
}

export default Footer