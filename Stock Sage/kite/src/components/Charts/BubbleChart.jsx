import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { motion } from "framer-motion";
import axios from 'axios';
import { useEffect, useState } from 'react';

async function getData() {
    let holdingsData = await axios.get("http://localhost:8080/allHoldings");
    holdingsData = holdingsData.data;
    let data = []
    for (let stock of holdingsData) {
        let newStock = {
            label: stock.name,
            value: stock.qty
        }
        data.push(newStock);
    }
    return data;
}


const size = {
    width: 800,
    height: 600,
};

const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
}));

function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
        </StyledText>
    );
}


export default function BubbleChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData().then((data) => {
            setData(data);
        })
    })

    console.log(data);


    // const data = [
    //     { label: 'Group A', value: 400 },
    //     { label: 'Group B', value: 300 },
    //     { label: 'Group C', value: 300 },
    //     { label: 'Group D', value: 200 },
    // ];

    return (
        <>
            <h3 className='mt-3 mb-4 text-center text-muted'>Your Holdings</h3>
            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                }}
            >
                <div className="container d-flex align-items-center flex-column justify-content-center">
                    <PieChart series={[{ innerRadius: 255, paddingAngle: 3, data, }]} {...size} legend={{ hidden: true }} margin={{ left: 100 }}>
                            
                    </PieChart>
                </div>
            </motion.div>

        </>


    );
}