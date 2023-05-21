import React from "react"

interface HeaderProps {
    title: string
}

const LoginButton: React.FC<HeaderProps> = ({ title }) => {
    return (
        <>
            <button>All as completed</button>
            {title && <h1>{title}</h1>}
        </>
    )
}

export default LoginButton

