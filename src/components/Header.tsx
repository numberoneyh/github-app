import {NaviBar} from "./NaviBar";

const Header = () => {
    return (
        <header className={'bg-gray-500'}>
            <div className={'container'}>
                <NaviBar/>
            </div>
        </header>
    );
};

export {Header};