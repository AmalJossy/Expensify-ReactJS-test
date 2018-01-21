import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        Error 404: Page not Found<br /> <Link to="/" >Go Home</Link>
    </div>
);

export default NotFoundPage;