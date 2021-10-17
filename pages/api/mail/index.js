import Sendgrid from "@sendgrid/mail";

Sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const handler = (req, res) => {
  if (req.method == "POST") {
    sendEmail(req, res);
  }
};

const sendEmail = async (req, res) => {
  const msg = {
    to: "shayant98@gmail.com", // Change to your recipient
    from: "nebula@shayantsital.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  try {
    await Sendgrid.send(msg);
    console.log("sent");
    res.status(200).json({ msg: "sent" });
  } catch (error) {
    console.log(error.response);
    res.status(500);
  }
};

export default handler;
