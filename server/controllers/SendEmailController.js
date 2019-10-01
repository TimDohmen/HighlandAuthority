import UserService from '../services/UserService'
import bcrypt from 'bcryptjs'
import async from 'async'
import express from 'express'
import nodemailer from 'nodemailer'
import { Authorize } from '../middleware/authorize.js'



let _user = new UserService().repository

export default class SearchController {
  constructor() {
    this.router = express.Router()
      .post("/email-forgot", this.ResetEmail)
    // .get('/reset/:token', this.ResetToken)
    // .post('/reset/', this.SendForgotEmail)
  }


  SendForgotEmail(req, res) {
    _user.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function (err, user) {
      if (!user) {
        req.alert('error', 'Password reset token is invalid or has expired.');
        return res.redirect('/email-forgot');
      }
      res.render('reset', {
        user: req.user
      });
    });
  }

  //Random Password
  //   function generatePassword(length) {
  //   var result = '';
  //   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   var charactersLength = characters.length;
  //   for (var i = 0; i < length; i++) {
  //     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //   }
  //   return result;
  // }

  // PasswordToken(req, res) {
  //   async.waterfall([
  //     function (done) {
  //       let user = await _user.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function (err, user) {
  //         if (!user) {
  //           req.flash('error', 'Password reset token is invalid or has expired.');
  //           return res.redirect('back');
  //         }

  //         // user.password = req.body.password;
  //         req.body.hash = UserService.generateHash(req.body.password)
  //         user.resetPasswordToken = undefined;
  //         user.resetPasswordExpires = undefined;

  //         user.save(function (err) {
  //           req.logIn(user, function (err) {
  //             done(err, user);
  //           });
  //         });
  //       });
  //     },
  //     function (user, done) {
  //       var smtpTransport = nodemailer.createTransport('SMTP', {
  //         service: 'Gmail',
  //         auth: {
  //           user: 'process.env.GmailEA',
  //           pass: 'process.env.GmailPW'
  //         }
  //       });
  //       var mailOptions = {
  //         to: user.email,
  //         from: 'no-reply@HighlandAuthority.com',
  //         subject: 'Highland Authority Password Reset',
  //         text: 'Hello, \n\n' +
  //           'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
  //       };
  //       smtpTransport.sendMail(mailOptions, function (err) {
  //         req.flash('success', 'Success! Your password has been changed.');
  //         done(err);
  //       });
  //     }
  //   ], function (err) {
  //     res.redirect('/');
  //   });
  // });


  ResetEmail(req, res, next) {

    async.waterfall([
      function (done) {
        bcrypt.randomBytes(20, function (err, buf) {
          var token = buf.toString('hex');
          done(err, token);
        });
      },
      function (token, done) {
        let user = _user.findOne({ email: req.body.query }, function (err, user) {
          if (!user) {
            req.alert('error', 'No account with that email address exists.');
            return res.redirect('/email-forgot');
          }

          _user.resetPasswordToken = token;
          _user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

          user.save(function (err) {
            done(err, token, user);
          });
        });
      },
      function (token, user, done) {
        var smtpTransport = nodemailer.createTransport('SMTP', {
          service: 'Gmail',
          auth: {
            user: 'process.env.GmailEA',
            pass: 'process.env.GmailPW' //FIXME make .env for password
          }
        });
        var mailOptions = {
          to: user.email,
          from: 'no-reply@HighlandAuthority.com',
          subject: 'Highland Authority Password Reset',
          text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
            'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
            'http://' + req.headers.host + '/reset/' + token + '\n\n' +
            'If you did not request this, please ignore this email and your password will remain unchanged.\n'
        };
        smtpTransport.sendMail(mailOptions, function (err) {
          req.alert('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
          done(err, 'done');
        });
      }
    ], function (err) {
      if (err) return next(err);
      res.redirect('/email-forgot');
    });
  }
}


//W3 Schools Example:
// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'youremail@gmail.com',
//     pass: 'yourpassword'
//   }
// });

// var mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'myfriend@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });