import { useState } from "react";

const Wizard = () => {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const nextStep = () => {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  };
  const prevStep = () => {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  };
  const restart = () => {
    setStep(1);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(form);
  };

  return (
    <>
      <form
        className="wizard-form inline-flex flex-col al gap-3"
        onSubmit={handleSubmit}
      >
        {step === 1 && (
          <div className="passo-1">
            <div>Dados Pessoais</div>

            <div className="content form-content">
              <input
                type="text"
                name="name"
                value={form.name}
                placeholder="Nome"
                onChange={handleOnChange}
              />
              <input
                type="email"
                name="email"
                value={form.email}
                pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                placeholder="Email"
                onChange={handleOnChange}
              />
              <button
                className="primary"
                type="button"
                onClick={nextStep}
                disabled={!form.name || !form.email}
              >
                Próximo
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="passo-2">
            <div>Endereço</div>
            <div className="form-content">
              <input
                type="text"
                name="address"
                value={form.address}
                placeholder="Endereço"
                onChange={handleOnChange}
              />
              <div className="btns-w-full">
                <button className="primary" type="button" onClick={prevStep}>
                  Anterior
                </button>
                <button
                  className="primary"
                  type="button"
                  onClick={nextStep}
                  disabled={!form.address}
                >
                  Próximo
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="passo-3">
            <div>Confirmação</div>

            {!submittedData && (
              <div className="p-3 my-3 border rounded border-blue-400">
                <p>
                  <span className="text-blue-800 italic">Nome:</span>{" "}
                  {form.name}
                </p>
                <p>
                  <span className="text-blue-800 italic">Email:</span>{" "}
                  {form.email}
                </p>
                <p>
                  <span className="text-blue-800 italic">Endereço:</span>{" "}
                  {form.address}
                </p>
              </div>
            )}

            {submittedData && (
              <>
                <p className="text-green-500 font-extrabold text-sm my-4">
                  Tudo certo!
                </p>
                <button className="primary" type="submit" onClick={restart}>
                  Recomeçar
                </button>
              </>
            )}

            <div className="form-content w-111">
              <div className="btns-w-full">
                {!submittedData && (
                  <button className="primary" type="button" onClick={prevStep}>
                    Anterior
                  </button>
                )}
                {!submittedData && (
                  <button className="primary" type="submit">
                    Finalizar
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </form>
    </>
  );
};

export default Wizard;
