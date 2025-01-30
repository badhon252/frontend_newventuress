"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ImagePlus } from "lucide-react";

const formSchema = z.object({
  userName: z.string().min(1, "Store name is required"),
  email: z.string().min(1, "Store name is required"),
  fullName: z.string().min(1, "Store name is required"),

  storeName: z.string().min(1, "Store name is required"),
  storeSlug: z.string().min(1, "Store slug is required"),
  storeEmail: z.string().email("Invalid email address"),
  storePhone: z.string().min(1, "Phone number is required"),
  storeDescription: z.string(),
  storeLogo: z.any().optional(),
  storeBannerType: z.string(),
  storeBanner: z.any().optional(),
  license: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export default function AddVendorStoreForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      storeBannerType: "static",
      license: "business",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
  }

  return (
    <div className="bg-white rounded-[24px] p-[32px]">
      <div
        className={
          "bg-primary px-4 py-3 mb- rounded-t-lg text-white text-[32px] leading-[38px] font-semibold h-[78px] flex items-center mb-5"
        }
      >
        Add Vendor Store
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
                control={form.control}
                name="userName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      User Name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="h-[51px] border-[#9C9C9C]"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Email <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="h-[51px] border-[#9C9C9C]"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Full Name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="h-[51px] border-[#9C9C9C]"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* General Settings */}
            <div className="space-y-6">
              
              <h2 className="text-xl font-medium">General Settings</h2>

              <FormField
                control={form.control}
                name="storeName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Store Name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="h-[51px] border-[#9C9C9C]"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="storeSlug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Store Slug <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="h-[51px] border-[#9C9C9C]"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="storeEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Store Email <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input type="email" {...field} className="h-[51px] border-[#9C9C9C]"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="storePhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Store Phone number <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input type="tel" {...field} className="h-[51px] border-[#9C9C9C]"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="storeDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short Description about Store</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type Description here"
                        className="min-h-[270px] resize-none border-[#9C9C9C]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Store Brand Setup */}
            <div className="space-y-6">
              <h2 className="text-xl font-medium">Store Brand Setup</h2>

              <FormField
                control={form.control}
                name="storeLogo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Store Logo</FormLabel>
                    <FormControl>
                      <div className="border-2 border-dashed rounded-lg p-6 text-center">
                        <div className="mx-auto w-12 h-12 flex items-center justify-center">
                          <ImagePlus className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          Drop your imager here, or browse
                        </p>
                        <p className="text-xs text-gray-400">
                          Jpeg, png are allowed
                        </p>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/jpeg,image/png"
                          onChange={(e) => field.onChange(e.target.files?.[0])}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="storeBannerType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Store Banner type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="h-[51px] border-[#9C9C9C]">
                        <SelectTrigger>
                          <SelectValue placeholder="Select banner type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="static">Static Image</SelectItem>
                        <SelectItem value="slider">Slider</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="storeBanner"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Store Banner</FormLabel>
                    <FormControl>
                      <div className="border-2 border-dashed rounded-lg p-6 text-center">
                        <div className="mx-auto w-12 h-12 flex items-center justify-center">
                          <ImagePlus className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          Drop your imager here, or browse
                        </p>
                        <p className="text-xs text-gray-400">
                          Jpeg, png are allowed
                        </p>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/jpeg,image/png"
                          onChange={(e) => field.onChange(e.target.files?.[0])}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="license"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Choose License</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="h-[51px] border-[#9C9C9C]">
                        <SelectTrigger>
                          <SelectValue placeholder="Select license type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="business">
                          Business license
                        </SelectItem>
                        <SelectItem value="personal">
                          Personal license
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
