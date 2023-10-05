import axios from "axios";

export const MailService = {
  sendEmail,
  validationEmail,
};

/** send email */
function sendEmail(name, email, message) {
  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios
    .post(`https://formsubmit.co/ajax/${email}`, {
      name: name,
      message: message,
    })
    .then(() => {
      this.$router.push("/").catch(() => {});
    })
    .catch(() =>
      this.$swal({
        icon: "error",
        title: "le serveur est non disponible !!",
      })
    );
}
/** validation email for form*/
function validationEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (pattern.test(email)) {
    return true;
  }
  return false;
}
