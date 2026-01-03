import Image from 'next/image';

export default function FloatingPhoto() {
  return (
    <div className="relative h-32 md:h-48 -mt-16 md:-mt-24 mb-12 flex justify-center">
      <div className="relative w-48 h-48 md:w-64 md:h-64 transform -rotate-2">
        <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/me.png"
            alt="Floating photo"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
