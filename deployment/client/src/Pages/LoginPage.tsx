import InfoCard from '../components/InfoCard';
import "../styles/loginPageStyle.css"
import loginPageProps from '../types/loginPageProps';
import {GoogleLogin} from '@react-oauth/google'

const LoginPage : React.FC<loginPageProps> = ({handleLoginSuccess}) => {
    return (
        <>
            <div id="google-one-tap-button">
                <InfoCard content="Hello there, please login to continue"/>
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        handleLoginSuccess(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                        window.alert('Login Failed. Please retry.');
                    }}

                    useOneTap={true}
                    prompt_parent_id='google-one-tap-button'
                    cancel_on_tap_outside={false}
                    theme='filled_black'
                    size='large'
                    shape='pill'
                    width='250px'
                />
            </div>
        </>
    );
};

export default LoginPage;