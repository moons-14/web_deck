import { Power } from "lucide-react";
import Image from "next/image";

export const DisplayButton = ({}: {}) => {
  return (
    <>
      <button className="w-24 h-20 bg-white/70 flex items-center justify-center rounded-md ">
        <Power size={48} strokeWidth={3} />
      </button>
    </>
  );
};
