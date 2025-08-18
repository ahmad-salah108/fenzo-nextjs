export default function Footer() {
  return (
    <div>
      <hr className="mt-10 mb-4 border-t border-black/10" />

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-[0.8rem]">
          All rights reserved to Fenzo © 2023
        </p>

        <div className="flex gap-8">
          <p className="text-[0.8rem] cursor-pointer">Privacy Policies</p>
          <p className="text-[0.8rem] cursor-pointer">Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
}
