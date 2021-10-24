let form = document.querySelector('form');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const getCTC = document.getElementById("ctc").value;
  const getBasic = document.getElementById("basic").value;
  const getBonus = document.getElementById("bonus").value;
  const getGroupTerm = document.getElementById("groupTerm").value;
  const getMedicalIns = document.getElementById("medicalIns").value;

  console.table('function called', getCTC, getBasic, getBonus, getGroupTerm, getMedicalIns);

  // constants as per govt norms
  // const PF_EMPLOYER = Math.floor(basic * 0.12);
  // const GRATUITY = Math.floor(basic * 0.0481);
  // const BONUS = bonus === 0 ? 0 : Math.floor(bonus);
  // const PROFESSIONAL_TAX = 200 * 12;
  // const GROUP_TERM_INSURANCE = groupTerm === 0 ? 0 : Math.floor(groupTerm);
  // const MEDICAL_INSURANCE = medicalIns === 0 ? 0 : Math.floor(medicalIns);

  // // calculate Actual Annual Salary
  // const AAS = ctc - ((2 * PF_EMPLOYER) + GRATUITY + BONUS + PROFESSIONAL_TAX + GROUP_TERM_INSURANCE + MEDICAL_INSURANCE);
  // const AMS = AAS / 12;
  // setResult(Math.round(AMS));
});
