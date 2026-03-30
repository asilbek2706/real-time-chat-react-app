import { useContext, useState } from 'react';
import { Context } from '../index';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Avatar, Box, Button, Container, Grid, TextField, Typography } from '@mui/material'; // Grid2 ishlatish ham mumkin
import Loader from './Loader';
import { addDoc, collection, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

function Chat() {
    const { auth, firestore } = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');

    const q = query(collection(firestore, 'messages'), orderBy('createdAt'));

    const [messages, loading] = useCollectionData(q);

    const sendMessage = async () => {
        if (value.trim() === '') return;

        await addDoc(collection(firestore, 'messages'), {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: serverTimestamp(),
        });

        setValue('');
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <Container>
            <Grid
                container
                justifyContent={'center'}
                style={{ height: window.innerHeight - 70, marginTop: 10 }}
            >
                <Box
                    sx={{
                        width: '80%',
                        height: '60vh',
                        border: '1px solid gray',
                        overflowY: 'auto',
                        p: 2,
                        borderRadius: 2,
                        background: 'linear-gradient(45deg, #22030a, #e14c22)',
                        overflowX: 'auto',
                    }}
                >
                    {messages &&
                        messages.map((msg, index) => (
                            <Box
                                key={index}
                                sx={{
                                    margin: 1,
                                    border:
                                        user.uid === msg.uid ? '2px solid green' : '2px solid red',
                                    backgroundColor:
                                        user.uid === msg.uid
                                            ? 'rgba(255, 255, 255, 0.7)'
                                            : 'rgba(228, 83, 167, 0.549)',
                                    marginLeft: user.uid === msg.uid ? 'auto' : '10px',
                                    width: 'fit-content',
                                    padding: 5,
                                    borderRadius: '10px',
                                }}
                            >
                                <Grid
                                    container
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Avatar
                                        src={msg.photoURL}
                                        sx={{ width: 24, height: 24, mr: 1 }}
                                    />
                                    <Typography variant='caption' sx={{ fontWeight: 'bold' }}>
                                        {msg.displayName}
                                    </Typography>
                                </Grid>
                                <Typography variant='body1' style={{ marginTop: 2 }}>
                                    {msg.text}
                                </Typography>
                            </Box>
                        ))}
                </Box>

                <Grid
                    container
                    direction={'column'}
                    alignItems={'flex-end'}
                    style={{ width: '80%', marginTop: 10 }}
                >
                    <TextField
                        multiline
                        maxRows={2}
                        placeholder={'Message...'}
                        fullWidth
                        variant={'outlined'}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        style={{ background: 'lightgray', border: 'none' }}
                    />
                    <Button
                        variant={'contained'}
                        sx={{
                            background: 'green',
                            color: '#fff',
                            mt: 1,
                            '&:hover': { bgcolor: 'darkgreen' },
                        }}
                        onClick={sendMessage}
                    >
                        Send Message
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Chat;
