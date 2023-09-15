const express = require('express');
const axios = require('axios');
const app = express();
const HOST= '0.0.0.0';
require("dotenv/config")


app.use(express.json());

app.post('/send-notification', async (req, res) => {

  try {
  
    const { employeeIds, message } = req.body;

    const response = await axios.get('https://randomuser.me/api/', {
      params: {
        results: employeeIds.length, 
     
      },
    });

    const randomUsers = response.data.results;

  
    randomUsers.forEach((user, index) => {
      const employeeId = employeeIds[index];
      const email = user.email;
      console.log(`Sending notification to Employee ID ${employeeId} (${email}): ${message}`);
    });

  
    res.status(200).json({ message: 'Notifications sent successfully' });
  } catch (error) {
    console.error('Error sending notifications:', error);
    res.status(500).json({ error: 'An error occurred while sending notifications' });
  }
});
const PORT=  process.env.PORT ;

app.listen(PORT, HOST, () => {
  console.log(`Notification service is running on port ${PORT}`);
});
