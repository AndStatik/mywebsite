function emailGuest(itemInfo) {
    // console.log(itemInfo)
    const { iNames, iQuant, iImgs, iPrice, iSubT, iTotal } = itemInfo;
    let itemTable = iNames
        .map((item, i) => (
          `<table class="column">
            <tr>
                <td class="padding">
                    <table class="content">
                        <tr>
                            <td>
                                <p style="
                                    text-align: center;
                                    font-family: Baskerville, Times,'Times New Roman',serif;
                                    font-size: 20px;
                                    font-variant: small-caps;
                                    font-weight: bold;
                                ">`+item+`</p>
                                <img src=`+iImgs[i]+` width="130" style="max-width: 130px" alt=`+item+`/>
                                <h4>UNIT PRICE: $`+iPrice[i]+`</h4>
                                <p>QUANTITY: `+iQuant[i]+`</p>
                                <h4>SUBPRICE: $`+iSubT[i]+`</h4>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
          </table>`
        ));
    let totalTable = `
        <table class="content">
            <tr>
                <td class="thankyou">
                    <h3>TOTAL PRICE: $${(iTotal).toFixed(2)}</h3>
                </td>
            </tr>
        </table>
    `;
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
        background-color: #ffffff;
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
    <td height="8" style="background-color: #fc9700"></td>
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
                    <a href="https://grace-pokebay.herokuapp.com/"
                    ><img
                        src="https://i.ibb.co/3cRCmhN/logo.png"
                        alt="logo"
                        width="100"
                        title="PokEbay"
                    /></a>
                </td>
                </tr>
            </table>
            <table style="width: 100%; max-width: 300px; display: inline-block; vertical-align: top;">
                <tr>
                <td style="padding: 10px 72px">
                    <a href="#"
                    ><img
                        src="https://i.ibb.co/f10v8MN/black-facebook.png"
                        alt=""
                        width="30"
                    /></a>
                    <a href="#"
                    ><img
                        src="https://i.ibb.co/B6dCFFP/black-twitter.png"
                        alt=""
                        width="30"
                    /></a>
                    <a href="#"
                    ><img
                        src="https://i.ibb.co/ChQxBmh/black-youtube.png"
                        alt=""
                        width="30"
                    /></a>
                    <a href="https://www.linkedin.com/in/andrey-statkevskiy/"
                    ><img
                        src="https://i.ibb.co/tBSQsSK/black-linkedin.png"
                        alt=""
                        width="30"
                    /></a>
                    <a href="https://www.instagram.com/andstatik/"
                    ><img
                        src="https://i.ibb.co/jy0GK47/black-instagram.png"
                        alt=""
                        width="30"
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
      <p style="font-weight: bold; font-size: 26px;">
        Your order has been confirmed!
      </p>
        <a href="https://grace-pokebay.herokuapp.com/" class="button" style="background-color: #ffffff;"
        >
            <img
            src="https://storage.googleapis.com/nianticweb-media/pokemongo/helper/sticker_nigiyaka_16_0508.png"
            width="300"
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
                    Your order contains the following item(s):
                </p>
                ${itemTable}
                ${totalTable}
            </td>
        </tr>
        </table>
    </td>
    </tr>
    <!-- TITLE, TEXT & BUTTON -->
    <tr>
    <td style="padding: 15px 0 50px; background-color: #99cfff"">
        <table width="100%">
        <tr>
            <td style="text-align: center; padding: 15px">
            <p style="font-size: 20px; font-weight: bold">
                Not a member yet?
            </p>
            <p
                style="
                line-height: 23px;
                font-size: 15px;
                padding: 5px 0 15px;
                "
            >
                Become a member for free, using the button below!
            </p>
            <a href="https://grace-pokebay.herokuapp.com/signup" class="button-dark">Sign-Up</a>
            </td>
        </tr>
        </table>
    </td>
    </tr>
    <!-- FOOTER SECTION -->
    <tr>
    <td style="background-color: #271538">
        <table width="100%">
        <tr>
            <td
            style="text-align: center; padding: 45px 20px; color: #ffffff"
            >
            <a href="https://grace-pokebay.herokuapp.com/"
                ><img src="https://i.ibb.co/3cRCmhN/logo.png" width="180"
            /></a>
            <p style="padding: 10px">PokeBay</p>
            <p style="padding: 10px">
                123 Street Road, City, State 55555
            </p>
            <a href="#"
                ><img
                src="https://i.ibb.co/0BtKbbs/white-facebook.png"
                alt=""
                width="30"
            /></a>
            <a href="#"
                ><img
                src="https://i.ibb.co/5xDjDcy/white-twitter.png"
                alt=""
                width="30"
            /></a>
            <a href="#"
                ><img
                src="https://i.ibb.co/5Y2Zn7R/white-youtube.png"
                alt=""
                width="30"
            /></a>
            <a href="https://www.linkedin.com/in/andrey-statkevskiy/"
                ><img
                src="https://i.ibb.co/JsZM3yp/white-linkedin.png"
                alt=""
                width="30"
            /></a>
            <a href="https://www.instagram.com/andstatik/"
                ><img
                src="https://i.ibb.co/ZM8pcrn/white-instagram.png"
                alt=""
                width="30"
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
`
}

module.exports = emailGuest;