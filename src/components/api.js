import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'dGfbHejzwtIKqY5AfFf07JxAqCUtr1FvmKhj0E7m';

export const Photo = ({ onImageChange }) => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
            const { url } = response.data;
            const {explanation} = response.data;
            setImageUrl(url);
            onImageChange(url);
        }
        fetchData();
    }, []);


    
}

export const Text = ({ onExplanationChange}) => {
    const [explanation, setText] = useState('');

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
            const { url } = response.data;
            const {explanation} = response.data;
            setText(explanation);
            onExplanationChange(explanation);
            
        }
        fetchData();
    }, []);


    
}
// crear funcion para date
export const Date = ({ onDateChange}) => {
    const [date, setDate] = useState('');

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
            const { url } = response.data;
            const {explanation} = response.data;
            const {date} = response.data;
            setDate(date);
            onDateChange(date);
            
        }
        fetchData();
    }, []);
}


