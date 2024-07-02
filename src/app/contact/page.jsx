import Image from "next/image";
import React from "react";
import contactImage from "../../../public/contact.png";
import Button from "@/components/buttons/Button";
import Input from "@/components/input/Input";

export const metadata = {
  title: "Contact",
  description: "Contact Devloper",
};

const ContactPage = () => {
  return (
    <div className="flex items-center flex-col gap-4 md:flex-row">
      <div className="md:flex-1 relative w-full h-[450px]">
        <Image src={contactImage} alt="Contact Image" fill />
      </div>
      <div className="flex-1 w-full">
        <form className="flex flex-col gap-4">
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input type="text" placeholder="Phone Number (Optional)" />
          <Input textarea placeholder="Message" />
          <Button variant={"primary"}>Send</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
