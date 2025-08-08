import {
  BaseSyntheticEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";

const Application = () => {
  const [isNew, setIsNew] = useState<boolean>(false);

  const handleChangeApplication = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const ele = ev.currentTarget as HTMLButtonElement;

    if (ele.innerHTML === "New" && !isNew) setIsNew(true);
    else if (ele.innerHTML === "Renew" && isNew) setIsNew(false);
  };

  return (
    <>
      <section className="min-h-dvh">
        <ApplicationForm
          isNew={isNew}
          handleChangeApplication={handleChangeApplication}
        />
      </section>
    </>
  );
};

type ApplicationForm = {
  isNew: boolean;
  handleChangeApplication: (ev: SyntheticEvent) => void;
};

const ApplicationForm = ({
  isNew,
  handleChangeApplication,
}: ApplicationForm) => {
  const [ORCRImage, setORCRImage] = useState("n/a");

  const handleOnInput = (ev: SyntheticEvent) => {
    const ele = ev.currentTarget as HTMLInputElement;

    if (!ele.files) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      setORCRImage(String(e.target?.result));
    };
    reader.readAsDataURL(ele.files[0]);

    setTimeout(() => {
      window.scrollTo({ top: document.body.clientHeight, behavior: "smooth" });
    }, 50);
  };

  const submitForm = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const url = import.meta.env.PROD
      ? "https://golden-ore-email.onrender.com"
      : "http://localhost:3000";

    try {
      fetch(url, { body: form, method: "POST" });
    } catch (err) {
      console.log(err);
    }

    //redirect to SUBMITTED
    window.location.href = window.location.origin + "/submitted";
  };

  return (
    <>
      <div className="py-10">
        <form
          encType="multipart/form-data"
          onSubmit={submitForm}
          className="gridlayout-[15rem] md:gridlayout-[20rem] lg:gridlayout-[26rem] relative mx-auto grid w-[90%] justify-center gap-10 overflow-hidden rounded-xl border-2 border-(--accent) px-5 pt-24 pb-10 shadow-md shadow-black md:gap-12 md:pt-28 lg:gap-14 lg:pt-32"
        >
          <div className="absolute flex h-min w-full justify-around bg-(--accent)">
            <button
              onClick={handleChangeApplication}
              className={
                "responsive-text-xl w-full rounded-t-xl p-2 font-bold transition-all " +
                (isNew ? "bg-white underline" : "bg-(--accent) text-white")
              }
            >
              New
            </button>
            <button
              onClick={handleChangeApplication}
              className={
                "responsive-text-xl w-full rounded-t-xl p-2 font-bold transition-all " +
                (!isNew ? "bg-white underline" : "bg-(--accent) text-white")
              }
            >
              Renew
            </button>
          </div>

          <p className="responsive-text-xs absolute top-16 left-[50%] -translate-x-[50%] opacity-75">
            Select New or Renew first.
          </p>

          <StyledInput
            name="Name"
            placeholder="Juan Dela Cruz"
            upperCase={false}
          />
          <StyledInput
            name="Email"
            placeholder="juancruz123@gmail.com"
            upperCase={false}
            email
          />
          {!isNew && (
            <>
              <StyledInput name="Plate No." placeholder="ABC123" />
              <StyledInput name="MV File Number" placeholder="Numbers Only" />
            </>
          )}

          <StyledInput name="Serial/Chassis No." placeholder="ABCD123-123456" />
          <StyledInput
            name="Motor No./Engine No."
            placeholder="ABCD123-123456"
          />
          <StyledInput name="Assured Name" placeholder="JUAN DELA CRUZ" />

          <div className="relative">
            <label
              htmlFor="address"
              className="responsive-text-base absolute -top-5 left-2 font-bold text-black md:-top-6 lg:-top-7"
            >
              Assured Address
            </label>
            <textarea
              name="Assured Address"
              id="address"
              required
              placeholder="# STREET ADDRESS, BARANGAY, CITY, ZIPCODE"
              className="responsive-text-lg w-full rounded-xs border border-black px-2 py-1 uppercase shadow-xs shadow-black"
            />
          </div>

          <select
            name="Vehicle Type"
            required
            className="responsive-text-lg h-fit border border-black py-2 indent-3 shadow-sm shadow-black"
          >
            <option value="">--Select Vehicle Type--</option>
            <option value="Car">Car</option>
            <option value="Motorcycle">Motorcycle</option>
          </select>

          {!isNew && (
            <div className="relative">
              <label
                htmlFor="file-upload"
                className="responsive-text-xl h-fit w-fit rounded border border-black px-4 py-2 shadow-sm shadow-black transition-colors"
              >
                Upload OR/CR
              </label>
              <input
                type="file"
                id="file-upload"
                name="attachment"
                accept="image/*"
                required
                onInput={handleOnInput}
                className="absolute inset-0 opacity-0"
              />
            </div>
          )}

          <div className="relative">
            <button
              type="submit"
              className="responsive-text-2xl size-fit cursor-pointer rounded border bg-(--accent) px-4 py-2 font-medium shadow-sm shadow-black"
            >
              Submit
            </button>
            <p className="responsive-text-xs mt-2 opacity-80">
              Please double check everything before submitting.
            </p>
          </div>
          {!isNew && (
            <img
              id="orcr-image"
              src={ORCRImage}
              alt=""
              className="mx-auto border border-black"
            />
          )}
        </form>
      </div>
    </>
  );
};

type StyledInput = {
  name?: string;
  placeholder?: string;
  upperCase?: boolean;
  email?: boolean;
};

const StyledInput = ({
  name,
  placeholder,
  upperCase = true,
  email = false,
}: StyledInput) => {
  return (
    <>
      <div className="relative">
        <label
          htmlFor={name}
          className="responsive-text-base absolute -top-5 left-2 font-bold text-black md:-top-6 lg:-top-7"
        >
          {name}
        </label>

        <input
          id={name}
          type={email ? "email" : "text"}
          placeholder={placeholder}
          name={name}
          required
          className={`responsive-text-lg w-full rounded-xs border border-black px-2 py-1 shadow-xs shadow-black ${upperCase ? "uppercase" : ""}`}
        />
      </div>
    </>
  );
};

export default Application;
