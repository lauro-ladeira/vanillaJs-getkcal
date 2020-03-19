/* Para os homens, podemos usar a fórmula: TMB = 66 + (13,8 x peso em kg.) + (5 x altura em cm) - (6,8 x idade em anos). 
Para as mulheres, usa-se a fórmula: TMB = 655 + (9,6 x peso em kg.) + (1,8 x altura em cm) - (4,7 x idade em anos).
manutencao = tmb * activitylevel 1,2 1,3 1,55 1,72 1,9
loseweight = manu +- 450 
*/

const form = document.querySelector("#form");
const gender = document.getElementById("gender");
const age = document.getElementById("age");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const activityLevel = document.getElementById("activity_level");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  let tmb;
  if (gender.value === "male") {
    tmb = Math.round(66 + 13.8 * weight.value + 5 * height.value - 6.8 * age.value);
  } else {
    tmb = Math.round(655 + 9.6 * weight.value + 1.8 * height.value - 4.7 * age.value);
  }

  const maintenance = Math.round(tmb * Number(activityLevel.value));
  const loseWeight = maintenance - 450;
  const gainWeight = maintenance + 450;

  showResults(tmb, maintenance, loseWeight, gainWeight);
}

function showResults(tmb, main, lose, gain) {
  document.querySelector(".result-container").innerHTML = `
      <h2>Aqui está o resultado:</h2>
        <div class="result-content">
          <ul>
            <li>
              Seu metabolismo basal é de <strong>${tmb} calorias</strong>.
            </li>
            <li>
              Para manter o seu peso você precisa consumir em média <strong>${main} calorias</strong>.
            </li>
            <li>
              Para perder peso você precisa consumir em média <strong>${lose} calorias</strong>.
            </li>
            <li>
              Para ganhar peso você precisa consumir em média <strong>${gain} calorias</strong>.
            </li>
          </ul>
        </div>
    `;
}
