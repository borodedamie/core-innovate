import BookAssessment from "@/components/modules/book-assessment";
import SendMessage from "@/components/modules/send-message";
import SectionBadge from "@/components/shared/section-badge";
import { contacts } from "@/lib/data";
import Image from "next/image";

const page = () => {
  return (
    <div className="pt-40 px-4 sm:px-8 lg:px-12 space-y-16">
      <div className="flex flex-col gap-y-6 items-center">
        <SectionBadge title="CONTACT US" />
        <div className="text-center">
          <h3 className="title">Get In Touch</h3>
          <p className="text-base text-tertiary">
            Have a project or question? Our experts are ready to assist
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {contacts.map((contact) => (
            <div className="p-6 bg-[#F9FAFB] rounded-2xl space-y-16">
              <span className="size-16 bg-white rounded-full inline-flex items-center justify-center">
                <Image width={32} height={32} alt="icon" src={contact.icon} />
              </span>

              <div>
                <p className="text-2xl text-secondary font-dm-sans font-semibold">
                  {contact.title}
                </p>
                <p className="text-base text-[#344054] font-dm-sans">
                  {contact.description}
                </p>
                <p className="text-base text-[#344054] font-dm-sans">
                  {contact.contact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SendMessage />

      <BookAssessment />
    </div>
  );
};

export default page;
