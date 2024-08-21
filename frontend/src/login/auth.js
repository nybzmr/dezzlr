import LoginButton from './login.js';
import LogoutButton from './logout.js';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId = '860858586184-lrncrdls4nkohjvab7scta363j22a9fh.apps.googleusercontent.com';
const loadGapiScript = () => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://apis.google.com/js/platform.js';
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
    });
};

export default function Auth() {
    useEffect(() => {
        const start = async () => {
            try {
                await loadGapiScript();
                
            } catch (error) {
                console.error('Error loading GAPI script:', error);
            }
        };
        start();
    }, []);

    return (
        <div>
            <LoginButton />
            <LogoutButton />
        </div>
    );
}