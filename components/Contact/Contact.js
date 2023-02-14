import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(form);
  };

  return (
    <section className="my-12 ">
      <div className="grid lg:grid-cols-2 ">
        <div className="h-full overflow-hidden bg-red-400 rounded-lg lg:ml-10">
          <picture>
            <img
              className="object-cover w-full h-full"
              src="https://i.ibb.co/qM5LLDZ/map.png"
              alt="s"
            />
          </picture>
        </div>
        <div className="p-5 lg:p-10">
          <h3 className="mb-4 text-2xl font-semibold text-gray-600 ">
            Contact Us
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-semibold text-gray-700 uppercase">
                  Frist Name
                </label>
                <input
                  className="w-full pb-1 text-sm border border-t-0 outline-none border-x-0 border-b-gray-600"
                  type="text"
                  name="firstName"
                  placeholder="Enter Your First Name"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 uppercase">
                  Last Name
                </label>
                <input
                  className="w-full pb-1 text-sm border border-t-0 outline-none border-x-0 border-b-gray-600"
                  type="text"
                  name="lastName"
                  placeholder="Enter Your Last Name"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-2">
              <div>
                <label className="text-sm font-semibold text-gray-700 uppercase">
                  Email
                </label>
                <input
                  className="w-full pb-1 text-sm border border-t-0 outline-none border-x-0 border-b-gray-600"
                  type="email"
                  name="firstName"
                  placeholder="Enter Your Email Address"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 uppercase">
                  Phone Number
                </label>
                <input
                  className="w-full pb-1 text-sm border border-t-0 outline-none border-x-0 border-b-gray-600"
                  type="number"
                  name="lastName"
                  placeholder="Enter Your Phone Nuber"
                />
              </div>
            </div>
            <div className="mt-2">
              <label className="text-sm font-semibold text-gray-700 uppercase">
                Message
              </label>
              <textarea
                name="message"
                rows={1}
                className="w-full pb-1 text-sm border border-t-0 outline-none border-x-0 border-b-gray-600"
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <input
              className="my-2 font-semibold text-gray-700 cursor-pointer"
              type="submit"
              value="Submit"
            />
            <BsArrowRight className="inline-block ml-2" />
          </form>
          <div className="mt-3">
            <p className="text-xs font-semibold text-gray-500 uppercase">
              Email Us
            </p>
            <p className="mt-1 text-sm font-semibold text-gray-700">
              typhoon@gamil.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
