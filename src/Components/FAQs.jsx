import { Accordion, AccordionItem } from '@nextui-org/react';
import React from 'react'

function FAQs() {

    const faqList = [
        {
            question:'What credit score do I need to apply for a credit card?',
            ans:'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.'
        },
        {
            question:'How can I apply for a credit card online?',
            ans:'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.'
        },
        {
            question:'Are there any annual fees associated with the credit card?',
            ans:'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.'
        },
        {
            question:'How long does it take to receive the credit card once approved?',
            ans:'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.'
        },
        {
            question:'How can I check my credit card balance and transactions?',
            ans:'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.'
        },
        {
            question:'What should I do if my credit card is lost or stolen?',
            ans:'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.'
        },
        {
            question:'Is my credit card information secure?',
            ans:'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.'
        },
    ]
  return (
    <section className='px-12 md:px-20 lg:px-24 py-8 md:py-12 lg:py-16'>
        <h2 className='text-center text-xl md:text-3xl lg:text-4xl text-white font-bold mb-6'>FAQs</h2>
        <Accordion>
            {
                faqList.map(({question,ans},index)=>(
                    <AccordionItem aria-label={question} title={question} key={index}>
                        <span className='text-gray-500 text-md max-w-60'>{ans}</span>
                    </AccordionItem>
                ))}
        </Accordion>
    </section>
  )
}

export default FAQs;