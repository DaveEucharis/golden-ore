import crashLogo from "../assets/insurance-icon.svg";

const Submitted = () => {
  setTimeout(() => {
    window.location.href = window.location.origin;
  }, 5000);

  return (
    <>
      <section className="flex h-dvh flex-col items-center justify-center p-4">
        <img
          src={crashLogo}
          alt=""
          className="size-25 drop-shadow-[0_0_0.3rem_white]"
        />

        <h1 className="responsive-text-5xl mt-4 font-bold">THANK YOU!</h1>
        <p className="text-center opacity-80">
          Please expect a response within a few days.
        </p>
      </section>
    </>
  );
};

export default Submitted;
