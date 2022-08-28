import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Button.css';
import usePath from 'react-use-path';

function Button(props) {

    const [path, setPath] = usePath();

    const isActive = path.path === props.linkTo ? 'active' : 'inactive';

    console.log(path.path);

    return (
        <Link to={props.linkTo}>
            <button
                className={`btn ${props.style} ${isActive}`}
                onClick={props.onClick}
                type={props.type}
            >
                {props.text}
            </button>
        </Link>
    )
}

export default Button