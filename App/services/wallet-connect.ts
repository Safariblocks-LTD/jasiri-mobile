import WalletConnectClient from "@walletconnect/client";
import { CLIENT_EVENTS } from "@walletconnect/client";
import { SessionTypes } from "@walletconnect/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const WC=async(uri: string)=>{
  try{
    const client = await WalletConnectClient.init({
      controller: true,
      projectId: "61e46b1aab63d857ad4f1f1213233253",
      relayUrl: "wss://relay.walletconnect.com",
      metadata: {
        name: "Test Wallet",
        description: "Test Wallet",
        url: "#",
        icons: ["https://walletconnect.com/walletconnect-logo.png"],
      },
      storageOptions: {
        asyncStorage: AsyncStorage,
      },
      
    });
  
    console.log(client)
  
    client.on(
      CLIENT_EVENTS.session.proposal,
      async (proposal: SessionTypes.Proposal) => {
        // user should be prompted to approve the proposed session permissions displaying also dapp metadata
        const { proposer, permissions } = proposal;
        console.log(proposer)
        const { metadata } = proposer;
        let approved: boolean;
        handleSessionUserApproval(approved, proposal); // described in the step 4
      }
    );
    
    client.on(
      CLIENT_EVENTS.session.created,
      async (session: SessionTypes.Created) => {
        console.log('created')
      }
    );
  
  
    const  handleSessionUserApproval=async(
      approved: boolean,
      proposal: SessionTypes.Proposal
    )=> {
      if (approved) {
        // if user approved then include response with accounts matching the chains and wallet metadata
        const response: SessionTypes.Response = {
          state: {
            accounts: ["eip155:1:0x1d85568eEAbad713fBB5293B45ea066e552A90De"],
          },
        };
        await client.approve({ proposal, response });
      } else {
        // if user didn't approve then reject with no response
        await client.reject({ proposal });
      }
    }
   
      client.pair({uri})
  
  }catch(e){
    console.log(e)
  }
  
}






 






