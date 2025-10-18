"use client";

import React, { useState } from "react";
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
import { toast } from "sonner";

const SendMessage = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    message: "",
    service: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await fetch(
        "https://formsubmit.co/hello@coreinnovate.co.uk",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            _subject: "New Contact Form Submission",
            _replyto: formData.email,
            FirstName: formData.firstName,
            LastName: formData.lastName,
            Email: formData.email,
            Phone: formData.phone,
            Company: formData.companyName,
            Service: formData.service,
            Message: formData.message,
          }),
        }
      );

      if (response.ok) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          companyName: "",
          message: "",
          service: "",
        });
        toast.success("Message sent successfully!");
      } else {
        toast.error("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F9FAFB]">
      <div className="grid gap-12 lg:grid-cols-2 rounded-2xl p-6 mx-auto max-w-7xl">
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

          <form
            onSubmit={onSubmit}
            className="flex flex-col sm:grid sm:grid-cols-2 gap-x-4 gap-y-6"
          >
            <Input
              label="First Name"
              placeholder="First Name"
              name="First Name"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              required
            />
            <Input
              label="Last Name"
              name="Last Name"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              required
            />
            <Input
              label="Phone Number"
              type="tel"
              name="Phone Number"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
            />
            <Input
              label="Email Address"
              type="email"
              name="Email Address"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
            <Input
              label="Company Name"
              name="Company Name"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={(e) => handleInputChange("companyName", e.target.value)}
            />
            <Select
              name="Service"
              onValueChange={(value) => handleInputChange("service", value)}
            >
              <SelectTrigger label="Services" className="!p-6">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Managed IT Services">
                  Managed IT Services
                </SelectItem>
                <SelectItem value="Cloud Management">
                  Cloud Management
                </SelectItem>
                <SelectItem value="Managed Security">
                  Managed Security
                </SelectItem>
                <SelectItem value="Project Management">
                  Project Management
                </SelectItem>
                <SelectItem value="Software Development">
                  Software Development
                </SelectItem>
                <SelectItem value="Project Risk">Project Risk</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>

            <div className="col-span-2 space-y-12">
              <Textarea
                name="Message"
                label="Message"
                className="!h-[133px]"
                placeholder="Enter message..."
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                required
              />

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
