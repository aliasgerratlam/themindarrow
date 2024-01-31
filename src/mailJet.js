import Mailjet from 'node-mailjet';
// service_912vp6s
const API_KEY = 'd23df6371952115048adb1b2eeae3d89';
const API_SECRET = '889de3bc1c29fd73349a8671890e8b02';

const mailjet = new Mailjet({
  apiKey: API_KEY,
  apiSecret: API_SECRET,
});
console.log('mailjet', mailjet);
const sendEmail = async () => {
  // const mailjetClient = Mailjet.apiConnect(API_KEY, API_SECRET);

  const request = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: 'aliasger@belgiumwebnet.com',
          Name: 'Mailjet Pilot',
        },
        To: [
          {
            Email: 'aliasger5363@gmail.com',
            Name: 'passenger 1',
          },
        ],
        Subject: 'Your email flight plan!',
        HTMLPart: '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
      },
    ],
  });

  try {
    const response = await request;
    console.log(response.body);
  } catch (error) {
    console.log('MAILJET ERROR', error.message);
  }
};

export default sendEmail;
