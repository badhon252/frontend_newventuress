"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  communicationFor: z.string().min(1, "Communication for is required"),
  productPerPage: z.string(),
  transactionChargesMode: z.string(),
  withdrawalSetup: z.string(),
  paymentSetup: z.string(),
})

type FormValues = z.infer<typeof formSchema>

export default function CommunicationWithdrawalForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productPerPage: "global",
      transactionChargesMode: "global",
      withdrawalSetup: "global",
      paymentSetup: "global",
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
        Communication Withdrawal
      </div>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-6">
          <h2 className="text-xl font-medium text-gradient">Commission Setup</h2>

          <FormField
            control={form.control}
            name="communicationFor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Communication For</FormLabel>
                <FormControl>
                  <Input placeholder="Admin" {...field} className="h-[51px] border-[#9C9C9C]"/>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="productPerPage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Per page</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl className="h-[51px] border-[#9C9C9C]">
                    <SelectTrigger>
                      <SelectValue placeholder="By Global Rule" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="global">By Global Rule</SelectItem>
                    <SelectItem value="custom">Custom Rule</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <div className="space-y-4">
            <h3 className="text-base font-medium text-gradient">Transaction Charges</h3>
            <p className="text-sm text-gray-500">
              These charges will be deducted from vendor&apos;s total order commission depending upon Order Payment
              Method.
            </p>

            <FormField
              control={form.control}
              name="transactionChargesMode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Transaction Charges Mode</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl className="h-[51px] border-[#9C9C9C]">
                      <SelectTrigger>
                        <SelectValue placeholder="By Global Rule" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="global">By Global Rule</SelectItem>
                      <SelectItem value="custom">Custom Rule</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="withdrawalSetup"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Withdrawal setup</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl className="h-[51px] border-[#9C9C9C]">
                    <SelectTrigger>
                      <SelectValue placeholder="By Global Rule" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="global">By Global Rule</SelectItem>
                    <SelectItem value="custom">Custom Rule</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="paymentSetup"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Payment setup</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl className="h-[51px] border-[#9C9C9C]">
                    <SelectTrigger>
                      <SelectValue placeholder="By Global Rule" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="global">By Global Rule</SelectItem>
                    <SelectItem value="custom">Custom Rule</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end">
          <Button type="submit" >
            Submit
          </Button>
        </div>
      </form>
    </Form>
    </div>
  )
}

