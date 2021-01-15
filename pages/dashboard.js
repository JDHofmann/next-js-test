const Dashboard = ({name, bio, blog}) => {
    return (
        <>
            <h1>Dashboard</h1>
            <h2>{name}</h2>
            <p>{`Bio: ${bio}`}</p>
            <p>{`Blog: ${blog}`}</p>
        </>
    )
}

Dashboard.getInitialProps = async () => {
    const res = await fetch("https://api.github.com/users/jdhofmann")

    const user = await res.json()
    return user
}


export default Dashboard