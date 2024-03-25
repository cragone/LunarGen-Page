import React from "react";
import HomeComponent from "../components/HomeComponent";

const HomePage = () => {


    return (
        <div className="flex flex-col items-center justify-center w-full" style={{ height: 'calc(100vh - 64px)' }}>
            <HomeComponent />
        </div>

    );
};

export default HomePage;