import SmartAccount from "@biconomy/smart-account"
import { useState } from "react"

export default function mint() {
    const [smartAccount, setSmartAccount] = useState(null)
    return(
<div>
    <h1>Welcome to Minting page</h1>
    {!!smartAccount && (
   
   <div className={detailsContainerStyle}>
     <h3>Smart account address:</h3>
     <p>{smartAccount.address}</p>
     <button className={buttonStyle} onClick={logout}>
       Logout
     </button>
     <div >
 
</div>
   </div>
   
 )}
</div>
    )
}