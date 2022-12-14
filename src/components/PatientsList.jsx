import Patient from "./Patient";

const Patients = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Patients</h2>
      <p className="text-lg mt-5 mb-10 text-center">
        Mange your{" "}
        <span className="text-indigo-600 font-bold">
          patients and appointments
        </span>
      </p>

      <Patient />
      <Patient />
      <Patient />
      <Patient />
      <Patient />
    </div>
  );
};

export default Patients;
