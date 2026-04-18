const express    = require('express');
const path       = require('path');
const nodemailer = require('nodemailer');

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sckuldeep03@gmail.com',
    pass: 'krgshtfyxxkeupgy',
  },
});

app.get('/api/profile', (req, res) => {
  res.json({
    name:    'Kuladeep',
    tagline: 'ECE student who builds cool stuff.',
    about:   'Hey! I am a 6th sem ECE student at MS Ramaiah University. I love RF engineering, embedded systems, antennas, and building random experiments.',
    links: [
      { label: 'GitHub',   url: 'https://github.com/' },
      { label: 'LinkedIn', url: 'https://linkedin.com/' },
      { label: 'Email',    url: 'mailto:sckuldeep03@gmail.com' },
    ],
    skills: [
      'Embedded Systems', 'RF Engineering', 'Antenna Design',
      'JavaScript', 'Python', 'PCB Design', 'MATLAB', 'C',
    ],
    projects: [
      {
        title: 'S-Band Patch Antenna',
        desc:  'Designed and simulated an S-band patch antenna (2-4 GHz) using Keysight EMPro with FDTD simulation.',
        tech:  ['EMPro', 'FDTD', 'RF Design'],
        url:   '#',
      },
      {
        title: 'Fruit & Currency Detector',
        desc:  'Raspberry Pi 4 based detector for fruits and Indian currency notes using TFLite + MobileNetV2.',
        tech:  ['Python', 'TFLite', 'Raspberry Pi'],
        url:   '#',
      },
      {
        title: 'Project Three',
        desc:  'Add your third project description here.',
        tech:  ['C', 'PIC16F877A'],
        url:   '#',
      },
    ],
  });
});

app.get('/api/message', (req, res) => {
  const messages = [
    'Welcome to my world.',
    'Gravity is overrated.',
    'Built with Node.js + vibes.',
    'Click things. See what happens.',
    'ECE student by day, builder by night.',
  ];
  res.json({ message: messages[Math.floor(Math.random() * messages.length)] });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  try {
    await transporter.sendMail({
      from:    '"My Site Contact" <sckuldeep03@gmail.com>',
      to:      'sckuldeep03@gmail.com',
      subject: `New message from ${name} — My Site`,
      html: `
        <div style="font-family:sans-serif;padding:20px;background:#f5f5f5;">
          <h2 style="color:#333;">New message from your site!</h2>
          <div style="background:#fff;padding:20px;border-radius:8px;">
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Message:</b><br>${message}</p>
          </div>
        </div>
      `,
    });
    res.json({ success: true, message: 'Message sent! I will get back to you soon.' });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ error: 'Failed to send email. Try again.' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n🚀  Site running at http://localhost:${PORT}`);
  console.log(`✏️   Edit server.js to change your info\n`);
});
