import BestSeller from '@/components/BestSellers/BestSellers';
import RecentlyAdded from '@/components/RecentlyAdded/RecentlyAdded';
import Review from '@/components/Review/Review';
import Trending from '@/components/Trending/Trending';
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