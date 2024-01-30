// mailjetService.js
import axios from 'axios';

const API_KEY = '1e4ffac2a7e5ee7d2c762d11f76da2a4';
const API_SECRET = 'your-mailjet-api-secret';
const API_URL = 'https://api.mailjet.com/v3.1/send';

const sendEmail = async (to, subject, text) => {
  const data = {
    Messages: [
      {
        From: {
          Email: 'your-email@example.com',
          Name: 'Your Name',
        },
        To: [
          {
            Email: to,
          },
        ],
        Subject: subject,
        TextPart: text,
      },
    ],
  };

  const headers = {
    'Content-Type': 'application/json',
  };

  const auth = {
    username: API_KEY,
    password: API_SECRET,
  };

  try {
    const response = await axios.post(API_URL, data, { headers, auth });
    console.log('Email sent:', response.data);
  } catch (error) {
    console.error('Error sending email:', error.response.data);
  }
};

export default { sendEmail };

// const handleSendEmail = async () => {
//     const to = 'recipient@example.com';
//     const subject = 'Test Email';
//     const text = 'This is a test email from React.js';

//     await mailjetService.sendEmail(to, subject, text);
// };

// export { handleSendEmail as default };
