function emailGuest(itemInfo) {
  const { name, email, message } = itemInfo;
  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PokEbay Email</title>
    <style type="text/css">
    body {
        margin: 0;
        background-color: #cccccc;
    }
    table {
        border-spacing: 0;
    }
    td {
        padding: 0;
    }
    img {
        border: 0;
    }
    .wrapper {
        width: 100%;
        table-layout: fixed;
        background-color: #cccccc;
        padding-bottom: 60px;
    }
    .main {
        background-color: rgb(230,236,244);
        margin: 0 auto;
        width: 100%;
        max-width: 600px;
        border-spacing: 0;
        font-family: sans-serif;
        color: #171a1b;
    }
    .two-columns {
        text-align: center;
        font-size: 0;
    }
    .two-columns .column {
        width: 100%;
        max-width: 300px;
        display: inline-block;
        vertical-align: top;
    }
    .three-columns {
        text-align: center;
        font-size: 0;
        padding: 15px 0 25px;
    }
    .three-columns .column {
        width: 100%;
        max-width: 200px;
        display: inline-block;
        vertical-align: top;
    }
    .three-columns .padding {
        padding: 15px;
    }
    .three-columns .content {
        font-size: 15px;
        line-height: 20px;
        padding: 0 5px;
    }
    .unit {
        height: 100%;
        width: 100%;
        color: #252525;
        display: flex;
        flex-wrap: wrap;
      }
      
      .unit .profile {
        margin: 40px;
        height: 100%;
        width: 200px;
      }
    .two-columns.last {
        padding: 15px 0;
    }
    .two-columns.padding {
        padding: 20px;
    }
    .two-columns.content {
        font-size: 15px;
        line-height: 20px;
        text-align: left;
    }
    .button {
        background-color: #fc9700;
        color: #171a1b;
        text-decoration: none;
        padding: 12px 20px;
        border-radius: 5px;
        font-weight: bold;
    }
    .button-dark {
        background-color: #271538;
        color: #ffffff;
        text-decoration: none;
        padding: 12px 20px;
        border-radius: 5px;
        font-weight: bold;
    }
    .thankyou {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    </style>
</head>
<body>
<center class="wrapper">
<table class="main" width="100%">
    <!-- TOP BORDER -->
    <tr>
    <td height="8" style="background-color: rgb(202, 223, 235)"></td>
    </tr>
    <!-- LOGO SECTION -->
    <tr>
    <td style="padding: 14px 0 4px">
        <table width="100%">
        <tr>
        <td style="text-align: center; font-size: 0;">
        <table style="width: 100%; max-width: 300px; display: inline-block; vertical-align: top;">
                <tr>
                <td style="padding: 0 62px 10px">
                    <a href="https://andrey-statkevskiy.com/"
                    ><img
                        src="https://i.ibb.co/B42ZYk7/logo1.png"
                        alt="logo"
                        width="100"
                        title="Andrey Statkevskiy - Personal Website"
                    /></a>
                </td>
                </tr>
            </table>
            <table style="width: 100%; max-width: 300px; display: inline-block; vertical-align: top;">
                <tr>
                <td style="padding: 10px 72px">
                    <a href="https://github.com/AndStatik"
                    ><img
                        src="https://cdn.onlinewebfonts.com/svg/img_44605.png"
                        alt="GitHub"
                        width="24"
                    /></a>
                    <a href="https://www.linkedin.com/in/andrey-statkevskiy/"
                    ><img
                        src="https://i.ibb.co/tBSQsSK/black-linkedin.png"
                        alt="LinkedIn"
                        width="30"
                    /></a>
                    <a href="https://www.instagram.com/andstatik/"
                    ><img
                        src="https://i.ibb.co/jy0GK47/black-instagram.png"
                        alt="Instagram"
                        width="30"
                    /></a>
                    <a href="https://www.youtube.com/@andstatik"
                    ><img
                        src="https://i.ibb.co/ChQxBmh/black-youtube.png"
                        alt="YouTube"
                        width="30"
                    /></a>
                    <a href="https://www.twitch.tv/andstatik"
                    ><img
                        src="http://cdn.onlinewebfonts.com/svg/img_336434.png"
                        alt="Twitch"
                        width="24"
                    /></a>
                </td>
                </tr>
            </table>
            </td>
        </tr>
        </table>
    </td>
    </tr>
    <!-- BANNER IMAGE -->
    <tr class="thankyou" style="display: flex; margin: auto;">
    <td style="width:100%; text-align:center">
      <p style="font-weight: bold; font-size: 26px; color: rgb(45,45,45);">
        Thank you for your message!
      </p>
        <a href="https://andrey-statkevskiy.com/" class="button" style="background-color: rgb(230,236,244);"
        >
            <img
            src="https://img.listemoji.com/thumbs/240/apple/237/person-raising-both-hands-in-celebration_1f64c.png"
            width="160"
            style="max-width: 100%; 
                margin: auto;
                display: block;"
            alt="Thank you!"
            />
        </a>
    </td>
    </tr>
    <!-- THREE COLUMN SECTION -->
    <tr>
    <td>
        <table width="100%">
        <tr>
            <td class="three-columns">
                <p style="font-weight: bold; font-size: 17px">
                    Your message: 
                </p>
                <p style="font-size: 15px; text-align: left; margin: auto 60px;">${message}</p>
            </td>
        </tr>
        </table>
    </td>
    </tr>
    <!-- FOOTER SECTION -->
    <tr>
    <td style="background-color: rgb(202, 223, 235)">
        <table width="100%">
        <tr>
            <td
            style="text-align: center; padding: 45px 20px; color: rgb(45, 45, 45)"
            >
            <a href="https://andrey-statkevskiy.com/"
                ><img src="https://i.ibb.co/B42ZYk7/logo1.png" width="180"
            /></a>
            <p style="padding: 10px; font-weight: bold; font-size: 15px;">Andrey Statkevskiy</p>
            <p style="padding: 10px">
                Brooklyn, NY
            </p>
            <a href="https://github.com/AndStatik"
            ><img
                src="https://cdn.onlinewebfonts.com/svg/img_44605.png"
                alt="GitHub"
                width="24"
            /></a>
            <a href="https://www.linkedin.com/in/andrey-statkevskiy/"
            ><img
                src="https://i.ibb.co/tBSQsSK/black-linkedin.png"
                alt="LinkedIn"
                width="30"
            /></a>
            <a href="https://www.instagram.com/andstatik/"
            ><img
                src="https://i.ibb.co/jy0GK47/black-instagram.png"
                alt="Instagram"
                width="30"
            /></a>
            <a href="https://www.youtube.com/@andstatik"
            ><img
                src="https://i.ibb.co/ChQxBmh/black-youtube.png"
                alt="YouTube"
                width="30"
            /></a>
            <a href="https://www.twitch.tv/andstatik"
            ><img
                src="http://cdn.onlinewebfonts.com/svg/img_336434.png"
                alt="Twitch"
                width="24"
            /></a>
            <p style="padding: 10px">SUBSCRIBE</p>
            </td>
        </tr>
        </table>
    </td>
    </tr>
</table>
</center>
</body>
</html>
`;
}

module.exports = emailGuest;
