

export default function Contact() {
  const disease = {
    name: "Fungal Infection",
    symptoms : ["itching","skin_rash","nodal_skin_eruptions","dischromic","patches"],
    precautions : ["bath twice",	"use detol or neem in bathing water",	"keep infected area dry",	"use clean cloths"]
  };


  const precautionsRender = disease.precautions.map((item) => <li>{item}</li>);
  return (
    <>
    {/* <div id="contact"> */}
      <div>
        <h1>{disease.name}</h1>
        <h2>Precautions: </h2>
        {precautionsRender}
      </div>
    {/* </div> */}
    </>
  );
}

