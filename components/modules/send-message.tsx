import React from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Image from "next/image";
import { Textarea } from "../ui/textarea";
import { Button } from "../shared/button";

const SendMessage = () => {
  return (
    <div className="bg-[#F9FAFB] grid gap-12 lg:grid-cols-2 rounded-2xl p-6">
      <div className="relative h-[398px] lg:h-full w-full">
        <Image
          src={`/support.jpg`}
          className="rounded-2xl object-cover"
          fill
          alt="support"
        />
      </div>

      <div className="space-y-12">
        <div className="space-y-12">
          <div>
            <h3 className="title">Send us a message</h3>
            <p className="text-base text-tertiary">
              Reach out and we’ll get back to you as quickly as possible.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-x-4 gap-y-6">
          <Input label="First Name" placeholder="First Name" />
          <Input label="Last Name" placeholder="Last Name" />
          <Input label="Phone Number" type="tel" placeholder="Phone Number" />
          <Input
            label="Email Address"
            type="email"
            placeholder="Email Address"
          />
          <Input label="Company Name" placeholder="Company Name" />
          <Select>
            <SelectTrigger label="Services" className="!p-6">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>

          <div className="col-span-2 space-y-12">
            <Textarea
              label="Message"
              className="!h-[133px]"
              placeholder="Enter message..."
            />

            <Button className="w-full">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
