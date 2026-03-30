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
                        bgcolor: '#f5f5f5',
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
                                    marginLeft: user.uid === msg.uid ? 'auto' : '10px',
                                    width: 'fit-content',
                                    padding: 1,
                                    borderRadius: 2,
                                    background: '#ffffff',
                                }}
                            >
                                <Grid container alignItems='center'>
                                    <Avatar
                                        src={msg.photoURL}
                                        sx={{ width: 24, height: 24, mr: 1 }}
                                    />
                                    <Typography variant='caption' sx={{ fontWeight: 'bold' }}>
                                        {msg.displayName}
                                    </Typography>
                                </Grid>
                                <Typography variant='body1'>{msg.text}</Typography>
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
