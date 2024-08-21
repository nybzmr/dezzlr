import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';  

const clientId = '860858586184-lrncrdls4nkohjvab7scta363j22a9fh.apps.googleusercontent.com';

export default function Login() {
    const navigate = useNavigate();

    const onSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        navigate('/home');
    };

    const onFailure = (res) => {
        console.log('Login Failed:', res);
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
}