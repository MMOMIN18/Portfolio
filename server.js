const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;


//Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/public/test.html')
})

app.post('/', (req, res)=>{
    //console.log("Reached till here!");
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'projectformobin@gmail.com',
            pass: 'Project@2018'            
        }

    });

    const mailOptions = {
        from: req.body.email,
        to: 'projectformobin@gmail.com',
        subject: `Message from ${req.body.name}: ${req.body.subject}: Phone ${req.body.number}`,
        text: req.body.message
    }
    transporter.sendMail(mailOptions, (error, info) =>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log('Email Sent with success');
            res.send('success');
        }
    })
})   

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})