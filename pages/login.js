import { useRouter } from "next/router";

const Login = () => {

    const router = useRouter();
    const onLogin = (e) => {
        e.preventDefault();

        router.push('/dashboard')
    }

    return(
        <form>
            <label>Username<input type="text" /></label>
            <label>Password<input type="password" /></label>
            <button onClick={ onLogin }type="button">Log In</button>
        </form>
    )
}
export default Login