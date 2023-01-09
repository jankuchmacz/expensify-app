import React from "react";
import {Link} from 'react-router-dom';
const NotFoundPage = () => {
    return (
        <div>
            404! - <Link to="/">Go home</Link>
        </div>
    );
    //thanks to Link we are using client side routing not server side routng
    //due to that we avoid full page refresh
}
export default NotFoundPage;