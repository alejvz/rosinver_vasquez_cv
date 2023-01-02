//crear graficas de porcentaje de habilidades en el perfil de usuario
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const BackgroundColor = ['#7b4397', '#dc2430']
const HoverBackgroundColor =  ['#151515', '#46BFBD']
const BorderWidth = 0



export const Skills2 = () => {
    const dataDoughnut = {
        datasets: [
            {
                data: [20, 4],
                backgroundColor:  BackgroundColor,
                hoverBackgroundColor: HoverBackgroundColor,
                borderWidth: BorderWidth
    
            }
        ]
    };

    return (
                <MDBContainer>
                    <div style={{ width: '80%', margin: '0 auto' }}>
                        <Doughnut data={dataDoughnut} options={{ responsive: true }} />
                    </div>
                </MDBContainer>



    );
}

export const Skills3 = () => {
    const dataDoughnut = {
        datasets: [
            {
                data: [20, 80],
                
                backgroundColor:  BackgroundColor,
                hoverBackgroundColor: HoverBackgroundColor,
                borderWidth: BorderWidth
    
            }
        ]
    };

    return (
                <MDBContainer>
                    <div style={{ width: '80%', margin: '0 auto' }}>
                        <Doughnut data={dataDoughnut} options={{ responsive: true }} />
                    </div>
                </MDBContainer>



    );
}

export const Skills4 = () => {
    const dataDoughnut = {
        datasets: [
            {
                data: [30, 70],
                
                backgroundColor:  BackgroundColor,
                hoverBackgroundColor: HoverBackgroundColor,
                borderWidth: BorderWidth
            }
        ]
    };

    return (
                <MDBContainer>
                    <div style={{ width: '80%', margin: '0 auto' }}>
                        <Doughnut data={dataDoughnut} options={{ responsive: true }} />
                    </div>
                </MDBContainer>



    );
}

export const Skills5 = () => {
    const dataDoughnut = {
        datasets: [
            {
                data: [30, 70],
                
                backgroundColor:  BackgroundColor,
                hoverBackgroundColor: HoverBackgroundColor,
                borderWidth: BorderWidth


    
            }
        ]
    };

    return (
                <MDBContainer>
                    <div style={{ width: '80%', margin: '0 auto' }}>
                        <Doughnut data={dataDoughnut} options={{ responsive: true }} />
                    </div>
                </MDBContainer>



    );
}





