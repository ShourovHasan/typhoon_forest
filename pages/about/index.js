import BestSeller from '@/Components/BestSellers/BestSellers';
import RecentlyAdded from '@/Components/RecentlyAdded/RecentlyAdded';
import Review from '@/Components/Review/Review';
import Trending from '@/Components/Trending/Trending';
import React from 'react';

const index = () => {
    return (
        <div>
            <BestSeller></BestSeller>
            <Trending></Trending>
            <RecentlyAdded></RecentlyAdded>
            <Review></Review>
        </div>
    );
};

export default index;