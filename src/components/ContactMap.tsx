import React from "react";

const ContactMap = () => {
  return (
    <div className="w-full">
      {/* Map Embed */}
      <div className="aspect-w-16 h-64 lg:h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7929931509793!2d3.3629585000000004!3d6.5478018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d95b6d93389%3A0xf8a71535421da42a!2sBouvardia%20Culture%20Limited!5e0!3m2!1sen!2sng!4v1741415367704!5m2!1sen!2sng"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          className="w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default ContactMap;
