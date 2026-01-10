import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { BoltIcon } from "@/components/icons/BoltIcon";
import plusIcon from "@/assets/images/plus.svg";
import minusIcon from "@/assets/images/minus.svg";

// FAQ data array
const faqs = [
    {
        id: "faq-1",
        question: "Is this an online or in-house Event?",
        answer:
            "This is a hybrid event! You can participate either online or attend in-person at our venue.",
    },
    {
        id: "faq-2",
        question: "Is this an online or in-house Event?",
        answer:
            "This is a hybrid event! You can participate either online or attend in-person at our venue.",
    },
    {
        id: "faq-3",
        question: "Is this an online or in-house Event?",
        answer:
            "This is a hybrid event! You can participate either online or attend in-person at our venue.",
    },
    {
        id: "faq-4",
        question: "Is this an online or in-house Event?",
        answer:
            "This is a hybrid event! You can participate either online or attend in-person at our venue.",
    },
    {
        id: "faq-5",
        question: "Is this an online or in-house Event?",
        answer:
            "This is a hybrid event! You can participate either online or attend in-person at our venue.",
    },
    {
        id: "faq-6",
        question: "Is this an online or in-house Event?",
        answer:
            "This is a hybrid event! You can participate either online or attend in-person at our venue.",
    },
    {
        id: "faq-7",
        question: "Is this an online or in-house Event?",
        answer:
            "This is a hybrid event! You can participate either online or attend in-person at our venue.",
    },
    {
        id: "faq-8",
        question: "Is this an online or in-house Event?",
        answer:
            "This is a hybrid event! You can participate either online or attend in-person at our venue.",
    },
];

// Animated toggle icon that transitions between plus and minus
interface AnimatedToggleIconProps {
    isExpanded: boolean;
}

function AnimatedToggleIcon({ isExpanded }: AnimatedToggleIconProps) {
    return (
        <div className="relative flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6">
            {/* Plus Icon */}
            <img
                src={plusIcon}
                alt="Expand"
                className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out"
                style={{
                    opacity: isExpanded ? 0 : 1,
                    transform: isExpanded ? "rotate(90deg) scale(0.8)" : "rotate(0deg) scale(1)",
                }}
            />
            {/* Minus Icon */}
            <img
                src={minusIcon}
                alt="Collapse"
                className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out"
                style={{
                    opacity: isExpanded ? 1 : 0,
                    transform: isExpanded ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.8)",
                }}
            />
        </div>
    );
}

export function FAQSection() {
    const [expandedItem, setExpandedItem] = useState<string | undefined>(undefined);

    return (
        <section className="w-full min-h-screen bg-black py-10 sm:py-12 md:py-16 px-5 sm:px-8 lg:px-12">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-4 md:gap-[17px] mb-10 sm:mb-12 md:mb-16 px-2">
                {/* Left bolt icon (mirrored) - hidden on mobile, shown on sm+ */}
                <BoltIcon
                    flipped
                    className="hidden sm:block object-contain flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[100px] lg:h-[100px]"
                />

                {/* Title - responsive font sizes and no fixed width */}
                <h2
                    className="text-white text-center font-fort uppercase tracking-tight px-2"
                    style={{
                        fontSize: "clamp(1.25rem, 6vw, 3.375rem)",
                        lineHeight: "120%",
                        letterSpacing: "-0.02em",
                    }}
                >
                    Frequently Asked Questions
                </h2>

                {/* Right bolt icon - hidden on mobile, shown on sm+ */}
                <BoltIcon
                    className="hidden sm:block object-contain flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[100px] lg:h-[100px]"
                />
            </div>

            {/* Accordion List - responsive max-width and padding */}
            <div className="mx-auto w-full max-w-[821px] px-1 sm:px-4 lg:px-0">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    value={expandedItem}
                    onValueChange={setExpandedItem}
                >
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={faq.id}
                            value={faq.id}
                            className={`border-b-0 group ${index < faqs.length - 1
                                ? "mb-5 sm:mb-8 md:mb-10 lg:mb-[46px]"
                                : ""
                                }`}
                        >
                            <AccordionTrigger
                                className="w-full py-3 sm:py-4 hover:no-underline border-b-2 sm:border-b-[3px] border-[#C6C6C6] gap-3"
                            >
                                <span
                                    className="text-creo-pink font-gabarito text-left text-base sm:text-xl md:text-2xl lg:text-[28px] leading-snug"
                                >
                                    {faq.question}
                                </span>
                                <AnimatedToggleIcon isExpanded={expandedItem === faq.id} />
                            </AccordionTrigger>
                            <AccordionContent className="text-white/90 font-gabarito text-sm sm:text-base md:text-lg pt-3 sm:pt-4 leading-relaxed pr-8">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}

export default FAQSection;
