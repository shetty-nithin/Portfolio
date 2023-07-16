import { useRouteError } from "react-router-dom";
import './error.scss';
import Button from '@mui/material/Button';

const Error = () => {
    const error = useRouteError();

    return (
        <div class="error" style={{backgroundColor: '#edf0ef', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <h1>Oops!</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            .</p>
            <p>Sorry, this is not a valid path.</p>
            <Button variant="contained">
                <a href="/" style={{textDecoration: 'None'}}>Go Back</a>
            </Button>
        </div>
    );
}

export default Error;