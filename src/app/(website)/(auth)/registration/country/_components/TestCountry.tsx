// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client"
import { Button } from "@/components/ui/button"
import { addNewBusiness } from "@/redux/features/authentication/AuthSlice"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { VectorMap } from "@react-jvectormap/core"
import { worldMill } from "@react-jvectormap/world"
import { AnimatePresence, motion } from "framer-motion"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

// Define the countries you want to include
const countries = {
  US: "United States",
  CA: "Canada",
  MX: "Mexico",
  DE: "Germany",
  ES: "Spain",
  TH: "Thailand",
}

const disabledColor = "#808080" // Gray color for disabled countries
const colorScale = ["#C8EEFF", "#0071A4", "#008000"] // Green for selected countries

function TestCountry() {
  const [loading, setLoading] = useState<true | false>(false)

  const [regionColors, setRegionColors] = useState({
    US: 100, // Green for United States
    CA: 100, // Green for Canada
    MX: 100, // Green for Mexico
    DE: 100, // Green for Germany
    ES: 100, // Green for Spain
    TH: 100, // Green for Thailand
  })

  const [selectedCountries, setSelectedCountries] = useState<string[]>([])

  const dispatch = useAppDispatch()
  const router = useRouter()

  const [mapPaths, setMapPaths] = useState(null)

  const authState = useAppSelector((state) => state.auth)

  const businesses = authState.businessInfo
  console.log("show Business ifno", businesses)

  // check if prev form value not found
  const { profession } = authState

  // if prev state value not found then start from first

  if (profession.length == 0) {
    router.push("/registration")
  }

  // Dynamically set the map paths after the component has mounted
  useEffect(() => {
    if (worldMill && worldMill.paths) {
      setMapPaths(worldMill.paths)
    }
  }, [])

  useEffect(() => {
    return () => {
      setLoading(false)
    }
  }, [])

  function handleRegionClick(event, code) {
    // If the country is not in the list, prevent interaction by returning early
    if (!countries[code]) {
      return // Disable the click interaction
    }

    const countryName = countries[code] || "Unknown Country"

    setSelectedCountries((prevSelected) => {
      let newSelected
      if (prevSelected.includes(countryName)) {
        // If already selected, remove it
        newSelected = prevSelected.filter((country) => country !== countryName)
      } else if (prevSelected.length < 3) {
        // If not selected and less than 3 countries are selected, add it
        newSelected = [...prevSelected, countryName]
      } else {
        // If 3 countries are already selected, replace the first one
        newSelected = [...prevSelected.slice(1), countryName]
      }

      // Log the selected countries
      console.log("Selected countries:", newSelected)

      // Update the clicked region's color (for visual feedback)
      setRegionColors((prevColors) => {
        const newColors = { ...prevColors }
        Object.keys(countries).forEach((countryCode) => {
          if (newSelected.includes(countries[countryCode])) {
            newColors[countryCode] = 50 // Color changed to show selection
          } else {
            newColors[countryCode] = 100 // Reset color for unselected countries
          }
        })
        return newColors
      })

      // Dispatch action to update business list
      dispatch(
        addNewBusiness(
          newSelected.map((country) => ({
            country: country,
            state: "",
            license: {
              metrcLicense: [""],
              cannabisLicense: [""],
              businessLicense: [""],
            },
          })),
        ),
      )

      return newSelected
    })

    setLoading(false)
  }

  function handleRegionTipShow(event, label, code) {
    const countryName = countries[code] || "Unknown Country"
    label.html(`
      <div style="background-color: black; border-radius: 6px; min-height: 50px; width: 150px; color: white; padding: 10px;">
        <p><b>${countryName}</b></p>
      </div>
    `)
  }

  const countriess = selectedCountries.join('_')

  const redirectUrl =
      selectedCountries.includes("United States")  || selectedCountries.includes("Canada")
        ? `/registration/country/${countriess}`
        : `/registration/country/${countriess}/business_information`;

  return (
    <motion.div
      exit={{
        opacity: 0,
        transition: {
          duration: 1,
        },
      }}
      style={{
        margin: "auto",
        width: "100%",
        height: "600px",
        position: "relative",
      }}
    >
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{
              opacity: 0,
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
              zIndex: 100, // Ensure it layers on top of the map
            }}
          >
            <div className="w-full h-full flex justify-center items-center">
              <Loader2 className="animate-spin h-5 w-5 z-50 text-white " />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <VectorMap
        map={worldMill}
        containerStyle={{
          width: "700px",
          height: "600px",
        }}
        backgroundColor="#DBDDDF"
        series={{
          regions: [
            {
              scale: colorScale, // Color scale for countries
              values: {
                // Check if mapPaths is available
                ...(mapPaths
                  ? Object.keys(mapPaths).reduce((acc, key) => {
                      // If the country code is in the `countries` list, set color to green
                      if (countries[key]) {
                        acc[key] = 100 // Green for selected countries
                      } else {
                        acc[key] = disabledColor // Gray for disabled countries
                      }
                      return acc
                    }, {})
                  : {}),
                ...regionColors, // Override the enabled countries' colors (green for selected)
              },
              min: 0,
              max: 100,
            },
          ],
        }}
        onRegionTipShow={handleRegionTipShow}
        onRegionClick={handleRegionClick}
      />
      <div className="mt-4 w-full flex justify-end">
        <Button asChild >
          <Link href={redirectUrl}>
          Continue</Link></Button>      </div>
      <div className="mt-4 hidden">
        <h3>Selected Countries:</h3>
        <ul>
          {selectedCountries.map((country, index) => (
            <li key={index}>{country}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default TestCountry

