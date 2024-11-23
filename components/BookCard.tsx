import Image from 'next/image';

export default function BookCard({
  title,
  description,
  coverImage,
  onClick,
}: any) {
  return (
    <div
      className="w-52 px-4 py-4 rounded bg-[#f8eadd] bg-opacity-50 shadow-md cursor-pointer transition-transform duration-300 ease-in-out mb-6 mr-6"
      onClick={onClick}
    >
      <Image
        src={coverImage}
        alt={title}
        className="w-full aspect-w-1 aspect-h-1 rounded-[5px]"
        height={250}
        width={250}
        priority
      />
      <div className="mt-4">
        <h3 className="text-lg mb-2 text-neutral-950">{title}</h3>
        <p className="mt-1 text-sm text-neutral-400">{description}</p>
      </div>
    </div>
  );
}
