import React, { useState  , useRef} from "react";
import emailjs from '@emailjs/browser';
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import { FaPaperPlane } from "react-icons/fa";
import PhoneIcon from "@mui/icons-material/Phone";
import { AiFillFacebook, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import ScaleLoader  from 'react-spinners/ScaleLoader'
  import 'react-toastify/dist/ReactToastify.css';
  

function ContactForm() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [phone, setphone] = useState("");
  let [loading, setLoading] = useState(false);
  const notify = () => toast.success(`✌🔥 Email Sent Successfully !`, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    theme:"dark",
    draggable: true,
    progress: undefined,
    });
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      setLoading(true)
      emailjs.sendForm('service_435tgv9', 'template_z4brbe8', form.current, 'ZEGda7uZo2tK6cPbU')
        .then((result) => {
            console.log(result.text);
            notify();
            setemail("");
            setname("");
            setmessage("");
            setLoading(false)
            setphone("");
          }, (error) => {
          setLoading(false)
            console.log(error.text);
        });
    };
  return (
    <>
    <div id="contact" className="heading mb-12  pt-12  ">
      <p className="font-bold text-center text-white text-xl">Contact Now</p>
    </div>
          <ToastContainer/>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2  my-4">
        <div className="contact_details flex flex-col items-center mt-2 md:mt-9">
          <div className="card bg-[#00000087] w-10/12 md:w-5/12 my-3 text-center text-white rounded-md py-4 px-4">
            <p className="text-xl font-bold">ADDRESS</p>
            <p className="text-ss">Mardan KP Paksitan</p>
          </div>

          <div className="card bg-[#00000087] w-10/12 md:w-5/12 my-3 text-center text-white rounded-md py-4 px-4">
            <p className="text-xl font-bold">EMAIL</p>
            <p className="text-ss">contact@asimshah.com</p>
          </div>
          <div className="card bg-[#00000087] w-10/12 md:w-5/12 my-3 text-center text-white rounded-md py-4 px-4">
            <p className="text-xl font-bold">WHATSAPP</p>
            <p className="text-ss">+923179936736</p>
          </div>
        </div>

        <div className="form bg-[#00000087] mx-auto pb-4 rounded-md w-10/12 flex flex-col items-center ">
          <form ref={form} onSubmit={sendEmail}>
            <p className="text-center text-sm font-bold text-gray-500 my-3">
              CONTACT NOW
            </p>
            <Box
              sx={{ display: "flex", alignItems: "flex-end" ,marginTop : '1rem'}}
              className="mt-3"
            >
              <AccountCircle sx={{ color: "white", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                sx={{ input: { color: "white"  , padding : "0.35px 1rem"}}}
                label="Full Name "
                name="user_name"
                required={true}
                variant="standard"
                onChange={(e) => {
                  setname(e.target.value);
                }}
                value={name}
              />
            </Box>

            <Box
              sx={{ display: "flex", alignItems: "flex-end" ,marginTop : '1rem'}}
              className="mt-3"
            >
              <PhoneIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
              <TextField id="input-with-sx"      sx={{ input: { color: "white"  , padding : "0.35px 1rem"}}}  label="Phone " 
              variant="standard" 
              name="user_phone"
              onChange={(e) => {
                setphone(e.target.value);
              }}
              value={phone}
              />
            </Box>

            <Box
              sx={{ display: "flex", alignItems: "flex-end" , marginTop : '1rem' }}
              className="mt-3"
            >
              <EmailIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Email Address "
                variant="standard"
                required={true}
                name="user_email"
                sx={{ input: { color: "white"  , padding : "0.35px 1rem"}}}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                value={email}
              />
            </Box>

            <Box
              sx={{ display: "flex", alignItems: "flex-end"  , marginTop : '1rem'}}
              className="mt-4 mb-6"
            >
              <EmailIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
              <TextField
                id="input-text-area"
                label="Message... "
                variant="standard"
                required={true}
                name="message"
                sx={{ input: { color: "white"  , padding : "0.35px 1rem"}}}
                onChange={(e) => {
                  setmessage(e.target.value);
                }}
                value={message}
              />
            </Box>
            <Button variant="contained" type="submit" className=" w-full">
            {loading ? (   <ScaleLoader
        color={"white"}
        loading={loading}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />) : (<> <span className="mx-3"> SEND </span> <FaPaperPlane />
     </>) }     </Button>
          </form>
          <div className="icons  flex flex-row mt-5">
              <a href="https://www.instagram.com/aasim__shah_/" className="text-[#C13584] mx-2">
                <AiFillInstagram size={30} />
              </a>
              <a href="https://www.facebook.com/asimshah0/" className="text-blue-300 mx-2">
                <AiFillFacebook size={30} />
              </a>
             
              <a href="whatsapp://send?text=Hello%20World!&phone=+923179936736" className="text-[#25d366] mx-2">
                <IoLogoWhatsapp size={30} />
              </a>
              <a href="https://www.github.com/aasim-shah/" className="text-white mx-2">
                <AiFillGithub size={30} />
              </a>
            </div>
        </div>
      </div>
      <div className="mb-20"></div>
    </>
  );
}

export default ContactForm;
