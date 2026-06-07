export type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  website?: string;
};

export type ContactResult = {
  status: number;
  body: { ok: boolean; message: string };
};

const isValid = (value: unknown, min = 1, max = 5000) =>
  typeof value === 'string' && value.trim().length >= min && value.trim().length <= max;

export const handleContactSubmission = (payload: ContactPayload): ContactResult => {
  if (payload.website) {
    return { status: 200, body: { ok: true, message: 'Message received.' } };
  }

  if (
    !isValid(payload.name, 2, 80) ||
    !isValid(payload.email, 5, 180) ||
    !isValid(payload.message, 10, 4000)
  ) {
    return {
      status: 400,
      body: { ok: false, message: 'Please provide valid contact details.' },
    };
  }

  console.log('Contact form stub submission:', {
    name: payload.name,
    email: payload.email,
    message: payload.message,
    receivedAt: new Date().toISOString(),
  });

  return {
    status: 200,
    body: {
      ok: true,
      message: 'Email delivery not configured yet. Your message was captured in the server log.',
    },
  };
};
