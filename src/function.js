let result = "";
let max = 0;
export const receive = (data) => {
  const newmoney = Number(data.money);
  max = newmoney;
  interest();



};


export const interest = () => {
  if (max > 500000) {
    result = "จะได้รับดอกเบี้ย 10%";
  }
  else if (max >= 100000) {
    result = "จะได้รับดอกเบี้ย 7%";
  }
  else if (max >=10000){
    result = "จะได้รับดอกเบี้ย 3%";
  }
  else{
    result = "ไม่ได้รับดอกเบี้ย"
  }
};

export const sendbackres = () => {
  return result;
};
