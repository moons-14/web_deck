import Image from "next/image";

export const DisplayButton = ({}: {}) => {
  return (
    <>
      <button>
        <Image src="/next.svg" alt="Vercel Logo" width={72} height={16} />
      </button>
    </>
  );
};
