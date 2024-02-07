"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function CenteredTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100vh', // Optional: Set height to 100% of the viewport
                bgcolor: 'background.paper',
            }}
        >
            <Box>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Monitor" />
                    <Tab label="Statistics" />

                </Tabs>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Button variant="contained" disableElevation>
                    Monitor
                </Button>
            </Box>
        </Box>
    );
}