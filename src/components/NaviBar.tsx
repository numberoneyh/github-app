import React from 'react';
import {Link} from "react-router-dom";

const NaviBar = () => {
    return (
        <nav className={'flex justify-between py-4'}>
            <h2 className={'font-bold text-[18px] text-yellow-500'}>Github Search</h2>
            <div className={'text-white inline-flex gap-5 font-bold'}>
                <Link to={'/'}> Home </Link>
                <Link to={'/favorite'}> Favorites </Link>
            </div>
        </nav>
    );
};

export  {NaviBar};