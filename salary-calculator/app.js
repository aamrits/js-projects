const form = document.querySelector('form');
const refresh = document.querySelector('#refresh');
const getCTC = document.getElementById("ctc");
const getBasic = document.getElementById("basic");
const getBonus = document.getElementById("bonus");
const getGroupTerm = document.getElementById("groupTerm");
const getMedicalIns = document.getElementById("medicalIns");
const info = document.getElementById("info");

function enableButton() {
  if (getCTC.value && getBasic.value) {
    document.getElementById("submit").disabled = false; 
  } else {
    document.getElementById("submit").disabled = true;
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault(); 

  // constants as per govt norms
  const PF_EMPLOYER = Math.floor(getBasic.value * 0.12);
  const GRATUITY = Math.floor(getBasic.value * 0.0481);
  const BONUS = (getBonus.value) === '' ? 0 : Math.floor(getBonus.value);
  const PROFESSIONAL_TAX = 200 * 12;
  const GROUP_TERM_INSURANCE = (getGroupTerm.value) === '' ? 0 : Math.floor(getGroupTerm.value);
  const MEDICAL_INSURANCE = (getMedicalIns.value) === '' ? 0 : Math.floor(getMedicalIns.value);

  // calculate Actual Annual Salary
  const AAS = (getCTC.value) - ((2 * PF_EMPLOYER) + GRATUITY + BONUS + PROFESSIONAL_TAX + GROUP_TERM_INSURANCE + MEDICAL_INSURANCE);
  const AMS = AAS / 12;

  info.style.display = 'block';

  info.innerHTML = `
    <div class="info-box">
      <div class="info-box__salary">
        <p>Monthly Salary:</p>
        <div class="salary" id="salary">
          <span>&#8377;</span> <strong>${Math.round(AMS)}</strong>
        </div>
      </div>
      <div class="info-box__note">
        <p><strong>Note: </strong></p>
        <p>Calculation is done as per the current govt norms.</p>
        <p>PF Deduction of 12% (both employer and employee) of Basic Salary.</p>
        <p>Gratuity Deduction of 4.81% of Basic Salary.</p>
      </div>
    </div>`;
});

refresh.addEventListener('click', () => {
  document.getElementById("ctc").value = '';
  document.getElementById("basic").value = '';
  document.getElementById("bonus").value = '';
  document.getElementById("groupTerm").value = '';
  document.getElementById("medicalIns").value = '';
  info.style.display = 'none';
  enableButton();
});

enableButton();
