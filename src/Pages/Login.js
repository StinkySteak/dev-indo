import React, { useState, useEffect } from 'react'
import { ethers } from "ethers";
import './Login.css'
import { Provider } from 'react-redux'

function Login() {

    var account = [];

    const [ethereumAvailable, setethereumAvailable] = useState(false);
    const [isConnected, setisConnected] = useState(false);

    useEffect(() => {
        if (window.ethereum !== 'undefined') {
            setethereumAvailable(true);
            connectToMetamask();
        }
    });

    async function connectToMetamask() {

        if (account[0] === null)
            return;

        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        account = await signer.getAddress();
        console.log("Account:", account);
        setisConnected(true);
    }


    window.addEventListener('load', function () {
        if (typeof this.window.ethereum !== 'undefined') {
            setethereumAvailable(true);
            connectToMetamask();

        } else {

        }

    });

    return (
        <div>
            <div className='flex-center login-metamask-alert'>
                {ethereumAvailable === false ?
                    <div>Please Install Metamask to Login</div>
                    :
                    <div>
                        {isConnected === false ? <div>Please Login using Metamask</div> : 
                        <div>Login Succeed, You may be able to Add Activity</div>}
                    </div>}
            </div>
        </div>
    )
}

export default Login