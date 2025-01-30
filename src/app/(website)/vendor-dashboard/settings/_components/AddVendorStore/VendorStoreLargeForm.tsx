import React from "react"
import AddVendorStoreForm from "./AddVendorStoreForm"
import CommunicationWithdrawalForm from "./CommunicationWithdrawalForm"
import SocialMediaForm from "./SocialMediaForm"
import PolicySupportForm from "./PolicyAndSupportForm"

const VendorStoreLargeForm = () => {
  return (
    <div className="space-y-[30px]">
    <AddVendorStoreForm/>
      <CommunicationWithdrawalForm/>
      <SocialMediaForm/>
      <PolicySupportForm/>
    </div>
  )
}

export default VendorStoreLargeForm