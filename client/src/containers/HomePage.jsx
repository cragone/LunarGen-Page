import React, {useContext} from "react";
import HomeComponent from "../components/HomeComponent";
import LoadingContext from "../components/LoadingContext";

const HomePage = () => {
    const { setLoading } = useContext(LoadingContext);


    return (
        <div className="flex flex-col items-center justify-center w-full" style={{ height: 'calc(100vh - 64px)' }}>
            <HomeComponent />
        </div>

    );
};

export default HomePage;