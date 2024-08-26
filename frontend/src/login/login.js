import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';  
import axios from 'axios';

const clientId = '860858586184-lrncrdls4nkohjvab7scta363j22a9fh.apps.googleusercontent.com';

export default function Login() {
    const navigate = useNavigate();

    const onSuccess = async (res) => {
        console.log('Login Success:', res.profileObj);
        
        try {
            const response = await axios.post('http://localhost:8000/api/users/google', {
                tokenId: res.tokenId
            });
            console.log(res.tokenId)

            
            if (response.data.success) {
                console.log('JWT Token:', response.data.accessToken);

                // Save tokens (optional: save in cookies or localStorage)
                localStorage.setItem('accessToken', response.data.accessToken);
                localStorage.setItem('refreshToken', response.data.refreshToken);

                // Navigate to home or dashboard
                navigate('/home');
            } else {
                console.error('Login failed:', response.data.message);
            }
        } catch (error) {
            console.error('Error during authentication:', error);
        }
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
