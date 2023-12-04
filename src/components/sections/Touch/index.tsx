import TouchImage from "@/assets/img/StayITouch.svg";
import Image from "next/image";
function Touch() {
  return (
    <div className="w-full mt-16 min-h-[200px] flex  flex-wrap">
      <div className="flex justify-center items-center w-full">
        <div className="w-[300px] h-0.5 bg-gradient-to-l from-blue-500 "></div>
        <Image
          src={TouchImage}
          alt={"TouchImage"}
          width={230}
          height={40}
          className="px-2 mx-2"
        />
        <div className="w-[300px] h-0.5 bg-gradient-to-r from-blue-500 "></div>
      </div>

      <div className="w-full  justify-center flex flex-wrap ">
        <div className="bg-white flex flex-wrap flex-row items-center justify-evenly translate-y-5 bg-opacity-30 w-11/12 backdrop-blur-sm rounded-t-2xl border ">
          <div className=" text-white flex justify-center">
            Get the latest news by entering your email
          </div>
          <div className=" text-white  ">
            <label className="w-full flex justify-center">
              <input
                placeholder="Sample@email.com"
                type="email"
                name=""
                id=""
                className="p-1 border outline-0 bg-white bg-opacity-10 w-9/12 rounded"
              />
              <button className="ml-[14px] w-auto p-1 text-xs border-0 rounded bg-blue-600 ">
                Submit
              </button>
            </label>
          </div>
        </div>
        <div className="bg-blue-600 py-3 w-full flex"> </div>
      </div>
    </div>
  );
}

export default Touch;
