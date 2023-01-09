//Higher Order Component (HOC) - a component (HOC) that reders another component
//The goal is to reuse code
//Render hijacking
//Prop manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
     <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please dont share</p> }
            <WrappedComponent {...props} />
        </div>
    );
    //we return higher order component
};
const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please log in to see details</p>}
        </div>
    );
}

const AuthInfo = requireAuthentication(Info);
   
//ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details"/>, document.querySelector('#app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details"/>, document.querySelector('#app'));