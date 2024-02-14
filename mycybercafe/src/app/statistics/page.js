"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale, //this is our y axis
    Tooltip,
    Legend

} from 'chart.js'

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)
export default function CenteredTabs() {

    const data = {
        labels: ['YouTube', 'Stackoverflow', 'GPT'],
        datasets: [
            {
                label: 'Seconds on Webpage',
                data: [5, 7, 1],
                backgroundColor: 'red',
                borderColor: 'black',
                borderWidth: 1,
            }
        ]
    }

    const options = {}
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
            <div>
                <Bar
                    data={data}
                    options={options}
                ></Bar>
            </div>
        </Box>
    );
}