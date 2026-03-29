import { Container } from '@mui/material'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useContext } from 'react'
import { Context } from '../index'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

function Login() {
    const { auth } = useContext(Context)

    const login = async () => {
        const provider = new GoogleAuthProvider()

        try {
            const result = await signInWithPopup(auth, provider)

            const user = result.user
            console.log('Kirgan foydalanuvchi:', user.displayName)
        } catch (error) {
            console.error('Kirishda xatolik:', error.code, error.message)
        }
    }

    return (
        <Container>
            <Grid
                container
                alignItems={'center'}
                justifyContent={'center'}
                style={{ height: window.innerHeight - 50 }}
            >
                <Grid
                    style={{ width: 400, backgroundColor: 'lightgray', borderRadius: 10 }}
                    container
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Box p={5}>
                        <Button
                            onClick={login}
                            variant={'outlined'}
                            style={{ color: '#222', borderColor: '#222' }}
                        >
                            Sign In With Google
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login
