
import VotingCard from '../Components/VotingCard';
import { DataContext } from "../DataContext";
import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import Storage from '../Sol/RegistrarManager.json';
import { ethers } from 'ethers';

function Voting() {

    var account = [];

    const [network, setNetwork] = useState(0);

    const [votingAmt, setVotingAmt] = useState(0);
    const [hasVote, setHasVote] = useState(false);

    const [rural, setRural] = useState([]);

    const [userAccount, setUserAccount] = useState();

    const [ethereumAvailable, setethereumAvailable] = useState(false);
    const [isConnected, setisConnected] = useState(false);

    const storageAddress = "0xf013dAc574E91008ae03fb0cb9921d60319DAef1";

    const connectWalletHandler = () => {
        if (window.ethereum) {
          return true;
        } else {
          return false;
        }
      }

    useEffect(() => {

        if (window.ethereum !== 'undefined') {
            setethereumAvailable(true);

            if (connectWalletHandler())
                window.ethereum.on('chainChanged', (_chainId) => window.location.reload());
        }

        if (!ethereumAvailable)
            return;


        connectToMetamask();
        setNetworkFrom();
        callApi();
        setVote();
    });

    async function setNetworkFrom() {
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        setNetwork(await provider.getNetwork());
    }

    async function connectToMetamask() {

        if (account[0] === null)
            return;

        if (isConnected)
            return;

        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        account = await signer.getAddress();
        console.log("Account:", account);
        setisConnected(true);
    }

    async function requestAccount() {
        var accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setUserAccount(accounts[0]);
        console.log(userAccount.toString());
    }

    async function vote() {

        if (network.chainId !== 80001) {
            console.log(network);
            alert("please connect to Polygon Testnet")
        }

        await requestAccount();
        var provider = new ethers.providers.Web3Provider(window.ethereum);
        var signer = provider.getSigner();
        var contract = new ethers.Contract(storageAddress, Storage.abi, signer);

        var tx = await contract.addContribution();
        await tx.wait();
    }

    async function setVote() {

        if (hasVote)
            return;

        await requestAccount();
        var provider = new ethers.providers.Web3Provider(window.ethereum);
        var signer = provider.getSigner();
        var contract = new ethers.Contract(storageAddress, Storage.abi, signer);

        var result = ethers.utils.formatUnits(await contract.getContribution(), 0);

        console.log(result);

        setVotingAmt(result);
        setHasVote(true);
    }

    function callApi() {
        Axios.get('https://localhost:5001/GetRurals')
            .then(function (response) {

                if (rural.length > 0)
                    return;

                console.log(response.data);
                setRural(response.data);
            })
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
            {ethereumAvailable === false ?
                <div>Please Install Metamask to Vote</div>
                :
                <div>
                    {isConnected === false ? <div>Please Login to Vote</div> :
                        <div>
                            <div className='flex-center'>
                                <h1>Voting Amount: {votingAmt}</h1>
                            </div>
                            <div className='home-flex-center'>
                                {rural.map((ru, index) => (
                                    <VotingCard title={ru.rural.name} desc={ru.activitiesCount} score={ru.votingScore} action={vote} />
                                ))}
                            </div>
                        </div>}
                </div>}
        </div>
    )
}

export default Voting