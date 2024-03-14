'use client';
import * as React from 'react'; 
import { useState, useEffect } from 'react'
export default function Page() {
const [data, setData] = useState(null)
useEffect(() => {
    fetch('http://localhost:3000/api/getRecord')
    .then((res) => res.json())
    .then((data) => {
    setData(data)
})
}, [])
    if (!data) return <p>Loading</p>
};

