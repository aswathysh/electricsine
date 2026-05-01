"use client"
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import { Typography, Avatar, Paper, CircularProgress, Button, Modal, TextField, Box } from '@mui/material';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getUserProfile } from '@/services/OrderServices';
import { stringAvatar } from '../sharables/HelperFunctions';
import { updateUserPassword } from '@/services/Auth/AuthenticationServices';

export const Profile = () => {
    const [openReset, setOpenReset] = useState(false);
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const passwordResetMutation = useMutation({
        mutationFn: (passwordData) => updateUserPassword(passwordData),

        onSuccess: (data) => {
            toast.success('Password Reseted Sucessfully', {
                autoClose: 5000,
                style: { fontSize: '16px', fontWeight: 600 }
            });
            setTimeout(() => {
                window.location.href = '/auth/login';
            }, 1500);
        },
        onError: (error) => {
            console.error("Error  while loggin:", error.response?.data?.error);
            toast.error(error.response?.data?.error || 'Something went wrong', {
                autoClose: 5000,
                style: { fontSize: '16px', fontWeight: 600 }
            });
        },
    });
    const handleResetSubmit = () => {
        // TODO: call API to reset password
        if (newPass !== confirmPass) {
            alert('Passwords do not match');
            return;
        }
        else {
            let data = {
                reset_token: sessionStorage.getItem('token'),
                new_password:newPass
            }
            passwordResetMutation.mutate(data);
        }

        console.log('Reset password:', newPass);
        setOpenReset(false);
        setNewPass('');
        setConfirmPass('');
    };

    const resetModal = (
        <Modal open={openReset} onClose={() => setOpenReset(false)}>
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', p: 4, borderRadius: 1, width: { xs: '90%', sm: 400 } }}>
                <Typography variant="h6" gutterBottom>Reset Password</Typography>
                <TextField fullWidth label="New Password" type="password" value={newPass} onChange={(e) => setNewPass(e.target.value)} sx={{ mb: 2 }} />
                <TextField fullWidth label="Confirm Password" type="password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} sx={{ mb: 3 }} />
                <Button variant="contained" fullWidth onClick={handleResetSubmit}>Submit</Button>
            </Box>
        </Modal>
    );
    const { data, isLoading, error } = useQuery({
        queryKey: ['profile'],
        queryFn: getUserProfile,
    });

    let content;
    if (isLoading) {
        content = (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20%' }}>
                <CircularProgress />
            </div>
        );
    } else if (error) {
        content = (
            <Typography color="error" sx={{ mt: 4, textAlign: 'center' }}>
                Failed to load profile
            </Typography>
        );
    } else {
        const user = data?.data || {};
        content = (
            <Paper elevation={1} sx={{ p: 4, textAlign: 'center' }}>
                <Avatar {...stringAvatar(user.username ? user.username.charAt(0).toUpperCase() : 'U')}
                    sx={{ width: 80, height: 80, mx: 'auto', mb: 2, backgroundColor: '#f54900' }} />
                <Typography variant="h5" gutterBottom>
                    {user.username}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {user.email}
                </Typography>
                {user.mobile && (
                    <Typography variant="subtitle1" color="text.secondary">
                        {user.mobile}
                    </Typography>
                )}
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    Member since {user.created_at ? new Date(user.created_at).toLocaleDateString() : '-'}
                </Typography>
                <Button variant="outlined" sx={{ mt: 3 }} onClick={() => setOpenReset(true)}>Reset Password</Button>
                {resetModal}
            </Paper>
        );
    }

    return (
        <Grid
            container
            style={{ justifyContent: 'center', backgroundColor: '#012967 !important', minHeight: '100vh' }}
            className="light_bg"
        >
            <Grid
                item
                size={{ xs: 11, md: 8, lg: 6, sm: 11 }}
                sx={{ backgroundColor: 'white', p: { xs: 3, sm: 5 }, mt: { xs: 4, sm: 8 }, borderRadius: 1 }}
            >
                {content}
            </Grid>
        </Grid>
    )
}