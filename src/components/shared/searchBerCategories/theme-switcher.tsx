"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  return (
    <Tabs defaultValue={theme} value={theme} className="bg-transparent " onValueChange={(theme) => setTheme(theme)}>
      <TabsList className="border-[1px] border-[#152764] dark:border-[#6841A5] py-1 h-[44px] w-[204px]   ">

        <TabsTrigger value="light" className="text-[#152764] data-[state=active]:text-white  ">CBD/HEMP</TabsTrigger>

        <TabsTrigger value="dark" className="data-[state=active]:bg-[#4A2E74] text-[#6841A5] data-[state=active]:text-white ">Recreational</TabsTrigger>

      </TabsList>
    </Tabs>
  )
}

export default ThemeSwitcher