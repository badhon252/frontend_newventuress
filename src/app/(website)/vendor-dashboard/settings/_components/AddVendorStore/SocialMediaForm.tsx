"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ImagePlus } from "lucide-react"

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
      <div
        className={
          "bg-primary px-4 py-3 mb- rounded-t-lg text-white text-[32px] leading-[38px] font-semibold h-[78px] flex items-center mb-5"
        }
      >
        Social Media Setting
      </div>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Facebook Setup */}
          <div className="space-y-6">
            <h2 className="text-xl font-medium">Facebook Setup</h2>

            <FormField
              control={form.control}
              name="facebookTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Facebook Title</FormLabel>
                  <FormControl>
                    <Input {...field} className="h-[51px] border-[#9C9C9C]"/>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="facebookDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Facebook descriptions</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={3} className="resize-none h-[51px] border-[#9C9C9C]"/>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="facebookImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Facebook Image</FormLabel>
                  <FormControl >
                    <div className="border-2 border-dashed rounded-lg p-6 text-center">
                      <div className="mx-auto w-12 h-12 flex items-center justify-center">
                        <ImagePlus className="w-8 h-8 text-gray-400" />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">Drop your imager here, or browse</p>
                      <p className="text-xs text-gray-400">Jpeg, png are allowed</p>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/jpeg,image/png"
                        onChange={(e) => field.onChange(e.target.files?.[0])}
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {/* Instagram Setup */}
          <div className="space-y-6">
            <h2 className="text-xl font-medium">Instagram setup</h2>

            <FormField
              control={form.control}
              name="instagramTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instagram Title</FormLabel>
                  <FormControl>
                    <Input {...field} className="h-[51px] border-[#9C9C9C]"/>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="instagramDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instagram Description</FormLabel>
                  <FormControl>
                    <Textarea {...field}  className="resize-none h-[51px] border-[#9C9C9C]" rows={3} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="instagramImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instagram Image</FormLabel>
                  <FormControl>
                    <div className="border-2 border-dashed rounded-lg p-6 text-center">
                      <div className="mx-auto w-12 h-12 flex items-center justify-center">
                        <ImagePlus className="w-8 h-8 text-gray-400" />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">Drop your imager here, or browse</p>
                      <p className="text-xs text-gray-400">Jpeg, png are allowed</p>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/jpeg,image/png"
                        onChange={(e) => field.onChange(e.target.files?.[0])}
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Social Profile Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-medium">Social Profile</h2>

          <FormField
            control={form.control}
            name="socialProfiles.facebook"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Facebook</FormLabel>
                <FormControl>
                  <Input {...field} type="url" placeholder="https://facebook.com/..." className="h-[51px] border-[#9C9C9C]" />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="socialProfiles.twitter"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Twitter</FormLabel>
                <FormControl>
                  <Input {...field} type="url" placeholder="https://twitter.com/..." className="h-[51px] border-[#9C9C9C]"/>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="socialProfiles.instagram"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Instagram</FormLabel>
                <FormControl>
                  <Input {...field} type="url" placeholder="https://instagram.com/..." className="h-[51px] border-[#9C9C9C]"/>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="socialProfiles.linkedin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>LinkedIn</FormLabel>
                <FormControl>
                  <Input {...field} type="url" placeholder="https://linkedin.com/in/..." className="h-[51px] border-[#9C9C9C]"/>
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end">
          <Button type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
    </div>
  )
}

