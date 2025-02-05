import React from "react"
import AddVendorStoreForm from "./AddVendorStoreForm"
import CommunicationWithdrawalForm from "./CommunicationWithdrawalForm"
import SocialMediaForm from "./SocialMediaForm"
import PolicySupportForm from "./PolicyAndSupportForm"
import AddressForm from "./AddressForm"
import StoreEditInfo from "./StoreEditInfo"

const VendorStoreLargeForm = () => {
  return (
    <div className="space-y-[30px]">
      <StoreEditInfo/>
      <AddVendorStoreForm />
      <CommunicationWithdrawalForm />
      <SocialMediaForm />
      <PolicySupportForm />
      <AddressForm />
    </div>
  )
}

export default VendorStoreLargeForm