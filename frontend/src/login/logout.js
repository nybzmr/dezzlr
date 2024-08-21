import {GoogleLogout} from 'react-google-login';
const clientId='860858586184-lrncrdls4nkohjvab7scta363j22a9fh.apps.googleusercontent.com';
export default function Logout(){
    const onLogoutSuccess=()=>{
        console.log('Logged out successfully');
    }
    return(
        <div className="flex items-center justify-center h-screen">
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onLogoutSuccess}
            />
        </div>
    )
}