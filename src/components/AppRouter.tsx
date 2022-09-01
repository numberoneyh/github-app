import {FC} from "react";
import {Route, Routes} from "react-router-dom";
import {Layout} from "./Layout";
import {HomePage} from "../pages/HomePage";
import {FavouritesPage} from "../pages/FavouritesPage";

const AppRouter:FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='/favorite' element={<FavouritesPage />} />
                <Route path='*' element={<Layout />} />
            </Route>
        </Routes>
    )
}

export { AppRouter }