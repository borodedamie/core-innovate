import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "lucide-react";

interface AccordionItem {
  id: string | number;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openItem, setOpenItem] = useState<string | number | null>(null);

  const toggleItem = (id: string | number) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4">
      {items.map(({ id, question, answer }) => {
        const isOpen = openItem === id;

        return (
          <div
            key={id}
            className="bg-[#FBFBFB] p-6 rounded-2xl w-full transition-shadow"
          >
            <button
              className="flex w-full items-center justify-between text-left"
              onClick={() => toggleItem(id)}
            >
              <p className="text-lg font-bold text-grey font-dm-sans">
                {question}
              </p>
              {isOpen ? (
                <MinusIcon className="text-primary transition-transform duration-300" />
              ) : (
                <PlusIcon className="text-secondary transition-transform duration-300" />
              )}
            </button>

            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                isOpen ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <p className="text-tertiary font-dm-sans text-base font-medium">
                {answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
