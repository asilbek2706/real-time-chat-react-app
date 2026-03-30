import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Loader() {
    return (
        <Container>
            <Grid
                container
                alignItems={'center'}
                justifyContent={'center'}
                style={{ height: window.innerHeight - 50 }}
            >
                <Grid container alignItems={'center'} justifyContent={'center'}>
                    <div className='lds-roller'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}
export default Loader;
