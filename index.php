<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="bruh.css">
    </head>
    <body>
        <section class="contact">
            <h2>Contact Me!</h2>

            <form action="#">
                <div class="input-box">
                    <div class="input-field field">
                        <input type="text" placeholder="Full Name" id="name" 
                        class="item" autocomplete="off">
                        <div class="error-txt">Full Name Can't be blank</div>
                    </div>
                    <div class="input-field field">
                        <input type="text" placeholder="Email Address" id="email" 
                        class="item" autocomplete="off">
                        <div class="error-txt email">Email Address Can't be blank</div>
                    </div>
                </div>

                <div class="input-box">
                    <div class="input-field field">
                        <input type="text" placeholder="Phone Number" id="phone" 
                        class="item" autocomplete="off">
                        <div class="error-txt">Phone Number Can't be blank</div>
                    </div>
                    <div class="input-field field">
                        <input type="text" placeholder="Subject" id="subject" 
                        class="item" autocomplete="off">
                        <div class="error-txt">Subject Can't be blank</div>
                    </div>
                </div>

                <div class="texterea-field field">
                    <textarea name="" id="message" cols="30" rows="10" 
                    placeholder="Your Message" class="item"
                    autocomplete="off"></textarea>
                    <div class="error-txt">Message Can't be blank</div>
                </div>

                <button type="submit">Send Message</button>
            </form>
        </section>
        <script src="https://smtpjs.com/v3/smtp.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <script src="script.js" async defer></script>
    </body>
</html>