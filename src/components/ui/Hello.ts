'use client'

import { useEffect } from 'react'

const Hello = () => {
    useEffect(() => {
        console.log(
            `👋 Hello, developer!

            You're inspecting the code of this project. If you're curious about how it works or want to see more:

            GitHub: https://github.com/musbabaff/musbabaff.com

            Feel free to explore, contribute, or star the repository. Let's build great things together! 🚀`
        )
    }, [])

    return null
}

export default Hello
