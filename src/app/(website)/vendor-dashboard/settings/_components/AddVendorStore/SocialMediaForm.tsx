"use client"

import * as z from "zod"
import { useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ImagePlus, Trash2 } from "lucide-react"
import Image from "next/image";

const formSchema = z.object({
  facebookTitle: z.string(),
  facebookDescription: z.string(),
  facebookImage: z.any().optional(),
  instagramTitle: z.string(),
  instagramDescription: z.string(),
  instagramImage: z.any().optional(),
  socialProfiles: z.object({
    facebook: z.string().url().optional(),
    twitter: z.string().url().optional(),
    instagram: z.string().url().optional(),
    linkedin: z.string().url().optional(),
  }),
})

type FormValues = z.infer<typeof formSchema>

export default function SocialMediaForm() {
  const [facebookPreview, setFacebookPreview] = useState<string | null>(null);
  const [instagramPreview, setInstagramPreview] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      socialProfiles: {},
    },
  })

  function onSubmit(data: FormValues) {
    console.log(data)
  }

  return (
    <div className="bg-white rounded-[24px] p-[32px]">
      <div className="bg-primary px-4 py-3 mb-5 rounded-t-lg text-white text-[32px] leading-[38px] font-semibold h-[78px] flex items-center">
        Social Media Setting
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Facebook Setup */}
            <div className="space-y-6">
              <h2 className="text-xl font-medium">Facebook Setup</h2>
              <FormField control={form.control} name="facebookTitle" render={({ field }) => (
                <FormItem>
                  <FormLabel>Facebook Title</FormLabel>
                  <FormControl><Input {...field} className="h-[51px] border-[#9C9C9C]"/></FormControl>
                </FormItem>
              )}/>
              <FormField control={form.control} name="facebookDescription" render={({ field }) => (
                <FormItem>
                  <FormLabel>Facebook Description</FormLabel>
                  <FormControl><Textarea {...field} rows={3} className="resize-none h-[51px] border-[#9C9C9C]"/></FormControl>
                </FormItem>
              )}/>
              <FormItem>
                <FormLabel>Facebook Image</FormLabel>
                <FormControl>
                  <div className="border-2 border-dashed rounded-lg p-6 text-center relative">
                    {facebookPreview ? (
                      <div className="relative">
                        <Image src={facebookPreview} alt="Facebook Preview" className="mx-auto w-32 h-32 object-cover rounded-md"/>
                        <button type="button" onClick={() => setFacebookPreview(null)} className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="mx-auto w-12 h-12 flex items-center justify-center">
                          <ImagePlus className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">Drop your image here, or browse</p>
                        <p className="text-xs text-gray-400">Jpeg, png are allowed</p>
                        <input
                          type="file"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          accept="image/jpeg,image/png"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              setFacebookPreview(URL.createObjectURL(file));
                            }
                          }}
                        />
                      </>
                    )}
                  </div>
                </FormControl>
              </FormItem>
            </div>

            {/* Instagram Setup */}
            <div className="space-y-6">
              <h2 className="text-xl font-medium">Instagram Setup</h2>
              <FormField control={form.control} name="instagramTitle" render={({ field }) => (
                <FormItem>
                  <FormLabel>Instagram Title</FormLabel>
                  <FormControl><Input {...field} className="h-[51px] border-[#9C9C9C]"/></FormControl>
                </FormItem>
              )}/>
              <FormField control={form.control} name="instagramDescription" render={({ field }) => (
                <FormItem>
                  <FormLabel>Instagram Description</FormLabel>
                  <FormControl><Textarea {...field} className="resize-none h-[51px] border-[#9C9C9C]" rows={3} /></FormControl>
                </FormItem>
              )}/>
              <FormItem>
                <FormLabel>Instagram Image</FormLabel>
                <FormControl>
                  <div className="border-2 border-dashed rounded-lg p-6 text-center relative">
                    {instagramPreview ? (
                      <div className="relative">
                        <Image src={instagramPreview} alt="Instagram Preview" className="mx-auto w-32 h-32 object-cover rounded-md"/>
                        <button type="button" onClick={() => setInstagramPreview(null)} className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="mx-auto w-12 h-12 flex items-center justify-center">
                          <ImagePlus className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">Drop your image here, or browse</p>
                        <p className="text-xs text-gray-400">Jpeg, png are allowed</p>
                        <input
                          type="file"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          accept="image/jpeg,image/png"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              setInstagramPreview(URL.createObjectURL(file));
                            }
                          }}
                        />
                      </>
                    )}
                  </div>
                </FormControl>
              </FormItem>
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
