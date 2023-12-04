import Image from "next/image";

const ChatIcon = () => {
  return (
    <>
      <Image
        src="/img/icons/Chat.png"
        priority={true}
        alt="chat icon"
        width={175}
        height={57}
      />
    </>
  );
};

export default ChatIcon;
