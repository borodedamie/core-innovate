import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbSeparator,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import Image from "next/image";

const page = () => {
  return (
    <div className="pt-40 px-4 sm:px-8 lg:px-12 space-y-16">
      <div className="grid lg:grid-cols-2 justify-between items-center gap-6">
        <div className="relative w-full h-[476px] lg:h-full rounded-lg overflow-hidden">
          <Image src={`/popular.jpg`} fill alt="hand holding cloud system" />
        </div>

        <div className="grid gap-y-4">
          <Breadcrumb>
            <BreadcrumbList className="bg-[#F7F9FC] rounded py-1.5 px-2">
              <BreadcrumbItem>
                <BreadcrumbLink href="/resources">Resources</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-primary truncate">
                  {" "}
                  5 Signs Your Business Needs Managed IT Services
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h3 className="font-semibold font-dm-sans text-4xl sm:text-5xl text-black">
            5 Signs Your Business Needs Managed IT Services
          </h3>

          <p className="text-base line-clamp-4 text-secondary">
            Struggling with downtime, rising IT costs, or slow support? Here’s
            how to know when it’s time for managed IT.
          </p>

          <div className="flex items-center gap-2 flex-wrap">
            {["Security", "Cloud", "IT", "Business"].map((tag, index) => (
              <Badge
                key={index}
                className={cn(
                  {
                    "text-[#CC400C] border-[#FCB59A] bg-[#FFECE5]":
                      index % 2 === 1,
                    "text-[#04802E] border-[#91D6A8] bg-[#E7F6EC]":
                      index % 2 === 0,
                  },
                  "font-medium text-sm rounded-lg px-2 py-0.5"
                )}
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage
                src="https://github.com/maxleiter.png"
                alt="@maxleiter"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>

            <p className="text-base font-medium text-secondary">Bose Arowolo</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="rounded-2xl h-fit text-base text-[#1B1B1F] w-full p-4 sm:max-w-[328px] border border-[#D0D5DD] space-y-3">
          <p className="text-lg font-semibold">In this article</p>

          <p>Frequent Downtime and Slow Systems</p>

          <p>Rising IT Costs Without Predictable Value</p>

          <p>Security Risks Keep You Awake at Night</p>

          <p>Security Risks Keep You Awake at Night</p>

          <p>Lack of In-House Expertise</p>

          <p>You’re Focused on IT, Not Your Business</p>
        </div>

        <div className="text-base flex flex-col gap-y-6 text-secondary">
          <p>
            Technology is the backbone of every modern business. From email and
            collaboration tools to cloud storage and cybersecurity, your IT
            systems keep daily operations running. But as businesses grow, so do
            the demands on IT and many organisations struggle to keep up. That’s
            where Managed IT Services come in.
          </p>

          <p>
            Here are five clear signs it’s time to consider outsourcing your IT
            to a trusted partner like CoreInnovate:
          </p>

          <span className="space-y-2">
            <p className="text-lg font-semibold text-secondary">
              1. Frequent Downtime and Slow Systems
            </p>

            <p>
              If your systems are often crashing, running slowly, or taking too
              long to recover from issues, it’s a red flag. Downtime doesn’t
              just frustrate employees it costs money and damages productivity.
              Managed IT providers offer 24/7 monitoring and proactive
              maintenance to stop problems before they impact your business.
            </p>
          </span>

          <span className="space-y-2">
            <p className="text-lg font-semibold text-secondary">
              2. Rising IT Costs Without Predictable Value
            </p>

            <p>
              If your systems are often crashing, running slowly, or taking too
              long to recover from issues, it’s a red flag. Downtime doesn’t
              just frustrate employees it costs money and damages productivity.
              Managed IT providers offer 24/7 monitoring and proactive
              maintenance to stop problems before they impact your business.
            </p>
          </span>

          <span className="space-y-2">
            <p className="text-lg font-semibold text-secondary">
              3. Security Risks Keep You Awake at Night
            </p>

            <p>
              Cybersecurity threats are increasing daily. If you’re worried
              about ransomware, phishing, or data breaches or if your current
              protection feels inadequate it’s time to bring in experts. With
              enterprise-grade security and SOC-as-a-Service, Managed IT ensures
              your business is protected around the clock.
            </p>
          </span>

          <span className="space-y-2">
            <p className="text-lg font-semibold text-secondary">
              4. Lack of In-House Expertise
            </p>

            <p>
              Small and mid-sized businesses often can’t afford a full IT
              department. Even if you have one IT staff member, they may
              struggle to cover everything from networks to cloud to compliance.
              Managed IT gives you access to a team of specialists with a wide
              range of skills without the cost of hiring them all in-house.
            </p>
          </span>

          <span className="space-y-2">
            <p className="text-lg font-semibold text-secondary">
              5. You’re Focused on IT, Not Your Business
            </p>

            <p>
              When technology issues eat up your time, it distracts from what
              matters: running and growing your business. Managed IT takes the
              burden off your shoulders so you can focus on customers,
              innovation, and strategy while knowing your IT is in safe hands.
            </p>
          </span>

          <span className="space-y-2">
            <p className="text-lg font-semibold text-secondary">
              The Bottom Line
            </p>

            <p>
              If you recognise any of these signs in your business, it’s time to
              explore Managed IT Services. With CoreInnovate, you gain proactive
              support, expert monitoring, and strategic guidance — ensuring your
              systems are secure, efficient, and reliable.
            </p>
          </span>

          <p>
            Ready to simplify your IT? Contact{" "}
            <span className="text-primary">CoreInnovate</span> today to learn
            how our Managed IT Services can transform your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
