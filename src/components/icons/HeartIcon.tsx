import Image from "next/image";

const HeartIcon = () => {
  return (
    <>
      <Image
        src="/img/icons/Heart.png"
        alt="heart icon"
        priority={true}
        width={175}
        height={57}
      />
    </>
  );
};

export default HeartIcon;
