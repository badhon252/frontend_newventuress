"use client";
// Packages
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";

// Local imports
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { setRegistrationValue } from "@/redux/features/authentication/AuthSlice";
import { useAppSelector } from "@/redux/store";
import FormHeader from "./form-header";

export function ExperienceForm() {
  const dispatch = useDispatch();

  const authState = useAppSelector((state) => state.auth);



  // check if prev form value not found
  const { email, fullName, password } = authState;

  // if prev state value not found then start from first

  if (!email || !fullName || !password) {
    redirect("/registration");
  }

  const handleExperiencChange = (type: "CBD/HEMP" | "Recreational Cannabis" | "Select All") => {
    const currentIndustries = Array.isArray(authState.industry) ? authState.industry : [];

    let updatedIndustries: ("CBD/HEMP" | "Recreational Cannabis" | "Select All")[];

    if(type === "Select All") {
      updatedIndustries = currentIndustries.includes("Select All") ? [] : ["CBD/HEMP", "Recreational Cannabis", "Select All"]
    } else {
      if(currentIndustries.includes(type)) {
        updatedIndustries = currentIndustries.filter((industry) => industry !== type)
      } else {
        updatedIndustries = [...currentIndustries, type]
      }
    }
    dispatch(setRegistrationValue({ industry: updatedIndustries }));
  }

  const isChecked = (type: "CBD/HEMP" | "Recreational Cannabis" | "Select All") => {
    return authState["industry"].includes(type)
  }

  return (
    <div className="py-[20px] md:py-0">
      <FormHeader
        label="Sign Up"
        paragraph="Continue to register as a customer or vendor, Please provide the information."
        title="What do you want to experience?"
      />
      <form className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 cursor-pointer">
              <Checkbox
                id="CBD/HEMP"
                checked={isChecked("CBD/HEMP")}
                onCheckedChange={() => handleExperiencChange("CBD/HEMP")}
              />
              <label
                htmlFor="CBD/HEMP"
                className="text-[20px] font-medium leading-[24px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              >
                CBD/HEMP
              </label>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Checkbox
                id="recreational"
                checked={isChecked("Recreational Cannabis")}
                onCheckedChange={() =>
                  handleExperiencChange("Recreational Cannabis")
                }
              />
              <label
                htmlFor="recreational"
                className="text-[20px] font-medium leading-[24px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Recreational Cannabis
              </label>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Checkbox
                id="both"
                checked={isChecked("Select All")}
                onCheckedChange={() => handleExperiencChange("Select All")}
              />
              <label
                htmlFor="both"
                className="text-[20px] font-medium leading-[24px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Select All
              </label>
            </div>
          </div>
        </div>
        <Button disabled={!authState.industry} size="md" asChild>
          <Link
            href="/registration/experiences/profession"
            className="flex items-center w-auto h-full"
          >
            Next
            <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </form>
    </div>
  );
}

export default ExperienceForm;
