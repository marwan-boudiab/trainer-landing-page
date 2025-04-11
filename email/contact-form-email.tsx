import React from 'react';
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

export default function ContactFormEmail({ senderName, senderEmail, message }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your Website</Preview>
      <Tailwind>
        <Body className="p-4 text-black">
          <Container>
            <Section className="my-8 rounded-lg border border-gray-200 bg-white px-6 py-4 shadow-sm">
              <Heading className="mb-2 text-lg font-semibold text-gray-900">New Message from Website Contact Form</Heading>
              <Text className="mb-4 text-gray-700">{message}</Text>
              <Hr className="my-4 border-gray-200" />
              <Text className="mb-2 text-gray-600">
                Sender's name:&nbsp;
                <span className="font-medium text-gray-800">{senderName}</span>
              </Text>
              <Text className="text-gray-600">
                Sender's email:&nbsp;
                <a href={`mailto:${senderEmail}`} className="text-blue-600">
                  {senderEmail}
                </a>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
