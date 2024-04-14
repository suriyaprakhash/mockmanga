function Footer() {

    return (
        <section className="flex flex-col h-[150px] sm:h-[12vh] ">
            <footer className="bg-white rounded-lg shadow m-4 dark:bg-white-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">©2023  <a href="https://suriyaprakhash.com/" target="_blank" className="hover:underline">
                        Suriya Prakhash Deenadayalan</a>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        {/* <li>
                            <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html" target="_blank" className="hover:underline hover:text-orange-400 me-4 md:me-6">What&rsquo;s Actuator</a>
                        </li>
                        <li>
                            <a href="https://youtu.be/htgA_U8k7zU" target="_blank" className="hover:underline hover:text-orange-400 me-4 md:me-6">How it works</a>
                        </li> */}
                        {/* <li>
              <a href="https://www.linkedin.com/in/suriya-prakhash-deenadayalan/"  target="_blank" className="hover:underline hover:text-orange-400 me-4 md:me-6">Developer</a>
            </li> */}
                        <li>
                            <a href="https://www.suriyaprakhash.com/#contact" target="_blank" className="hover:underline hover:text-orange-400">Report bug</a>
                        </li>

                    </ul>
                </div>
            </footer>
        </section>
    )
}

export default Footer