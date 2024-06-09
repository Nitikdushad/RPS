{
   function generateOTP(length) {
      const characters = '0123456789';
      let otp = '';

      for (let i = 0; i < length; i++) {
         otp += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return otp;
   }

   // Generate a 6-digit OTP
   const otp = generateOTP(6);
   console.log("Generated OTP:", otp);
}




{ 
   let fullname = prompt("Enter your fullname without any space ")
   let username = "@" + fullname + fullname.length
      console.log(username)
}