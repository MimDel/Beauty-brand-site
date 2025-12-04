import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

export default function ImageMasonry() {
    return (
        <div className='flex flex-row justify-center'>
            <Box sx={{ width: '80%', minHeight: 829 }}>
                <Masonry columns={3} spacing={2}>
                    {itemData.map((item, index) => (
                        <div key={index}>
                            <img
                                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=162&auto=format`}
                                alt={item.title}
                                loading="lazy"
                                style={{
                                    borderBottomLeftRadius: 4,
                                    borderBottomRightRadius: 4,
                                    display: 'block',
                                    width: '100%',
                                }}
                            />
                        </div>
                    ))}
                </Masonry>
            </Box>
        </div>
    );
}

const itemData = [
    {
        img: 'http://localhost:3000/trEssenceMist/tr_essenceMist1.png',
        title: 'tr_essenceMist1',
    },
    {
        img: 'http://localhost:3000/trMoistureCream/tr_moistureCream3.jpg',
        title: 'tr_moistureCream3',
    },
    {
        img: 'http://localhost:3000/saBalmCream/sa_balmCream3.webp',
        title: 'sa_balmCream3',
    },
    {
        img: 'http://localhost:3000/saAmpoule/sa_ampoule2.webp',
        title: 'sa_ampoule2',
    },
    {
        img: 'http://localhost:3000/saCream/sa_cream2.webp',
        title: 'sa_cream2',
    },
    {
        img: 'http://localhost:3000/trCleansingWater/tr_cleansingWater3.webp',
        title: 'tr_cleansingWater3',
    },
    {
        img: 'http://localhost:3000/trAmpoule/tr_ampoule2.webp',
        title: 'tr_ampoule2',
    },
    {
        img: 'http://localhost:3000/trEssence/tr_essence3.webp',
        title: 'tr_essence3',
    },
    {
        img: 'http://localhost:3000/saSerum/sa_serum2.webp',
        title: 'sa_serum2',
    },
];
