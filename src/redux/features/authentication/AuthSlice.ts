import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the counter
interface Business {
  country: string;
  state?: string;
  license: {
    metrcLicense: string[],
    cannabisLicense: string[],
    businessLicense: string[]

  }
}

export interface authSliceType {
  industry: "CBD/HEMP" | "Recreational Cannabis" | "Both" | "";

  profession: string[];
  email: string;
  fullName: string;
  password: string;
  confirmPassword: string;
  businessInfo: Business[];
}

const initialState: authSliceType = {
  email: "",
  fullName: "",
  password: "",
  confirmPassword: "",
  industry: "",
  profession: [],

  businessInfo: [],
};

// Create the slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRegistrationValue: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    addNewBusiness: (state, action) => {
      state.businessInfo = action.payload;
    },
    updateBusiness: (state, action) => {
      if (state.businessInfo.length === 0) {
        // If no business exists, add a default one first
        state.businessInfo.push({
          country: "",
          state: "",
          license: {
            metrcLicense: [""],
            cannabisLicense: [""],
            businessLicense: [""]
        
          }
        });
      }
      // Update the last business in the array
      const lastIndex = state.businessInfo.length - 1;
      state.businessInfo[lastIndex] = {
        ...state.businessInfo[lastIndex],
        ...action.payload,
      };
    },
    addMetrcField: (state) => {
      // Ensure businessInfo is not empty
      if (state.businessInfo.length > 0) {
        const lastIndex = state.businessInfo.length - 1;
    
        // Add a new empty string (or any placeholder) to the metrcLicense array
        state.businessInfo[lastIndex].license.metrcLicense.push("");
      } else {
        console.error("No businessInfo available to add a new metrc field");
      }
    },
    addCannabisField: (state) => {
      // Ensure businessInfo is not empty
      if (state.businessInfo.length > 0) {
        const lastIndex = state.businessInfo.length - 1;
    
        // Add a new empty string (or any placeholder) to the metrcLicense array
        state.businessInfo[lastIndex].license.cannabisLicense.push("");
      } else {
        console.error("No businessInfo available to add a new metrc field");
      }
    },
    addBusinessField: (state) => {
      // Ensure businessInfo is not empty
      if (state.businessInfo.length > 0) {
        const lastIndex = state.businessInfo.length - 1;
    
        // Add a new empty string (or any placeholder) to the metrcLicense array
        state.businessInfo[lastIndex].license.businessLicense.push("");
      } else {
        console.error("No businessInfo available to add a new metrc field");
      }
    },
    
    updateMetrcLicense: (state, action) => {
      const { index, newLicenseValue } = action.payload;
    
      // Ensure there's at least one business
      if (state.businessInfo.length > 0) {
        const lastIndex = state.businessInfo.length - 1;
    
        // Validate the license index before updating
        if (
          index >= 0 &&
          index < state.businessInfo[lastIndex].license.metrcLicense.length
        ) {
          state.businessInfo[lastIndex].license.metrcLicense[index] = newLicenseValue;
        } else {
          console.error("Invalid metrcLicense index");
        }
      } else {
        console.error("No businessInfo available to update a metrc license");
      }
    },
    updateCannabisLicense: (state, action) => {
      const { index, newLicenseValue } = action.payload;
    
      // Ensure there's at least one business
      if (state.businessInfo.length > 0) {
        const lastIndex = state.businessInfo.length - 1;
    
        // Validate the license index before updating
        if (
          index >= 0 &&
          index < state.businessInfo[lastIndex].license.cannabisLicense.length
        ) {
          state.businessInfo[lastIndex].license.cannabisLicense[index] = newLicenseValue;
        } else {
          console.error("Invalid metrcLicense index");
        }
      } else {
        console.error("No businessInfo available to update a metrc license");
      }
    },
    updateBusinessLicense: (state, action) => {
      const { index, newLicenseValue } = action.payload;
    
      // Ensure there's at least one business
      if (state.businessInfo.length > 0) {
        const lastIndex = state.businessInfo.length - 1;
    
        // Validate the license index before updating
        if (
          index >= 0 &&
          index < state.businessInfo[lastIndex].license.businessLicense.length
        ) {
          state.businessInfo[lastIndex].license.businessLicense[index] = newLicenseValue;
        } else {
          console.error("Invalid metrcLicense index");
        }
      } else {
        console.error("No businessInfo available to update a metrc license");
      }
    },
    
    resetAuthSlice: () => {
      return initialState;
    },
  },
});

// Export actions for use in components
export const {
  setRegistrationValue,
  addNewBusiness,
  updateBusiness,
  resetAuthSlice,
  updateMetrcLicense,
  addMetrcField,
  addCannabisField,
  addBusinessField,
  updateCannabisLicense,
  updateBusinessLicense

} = authSlice.actions;

// Export the reducer to configure the store
export default authSlice.reducer;
