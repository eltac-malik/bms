import FirtsStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

export const findStep = (step,next) =>
{
    switch (step) {
        case 0:
              return  <FirtsStep next={next}/>
        case 1:
              return   <SecondStep next={next}/>
        case 2:
              return   <ThirdStep next={next}/>
        default:
            return     <FirtsStep next={next}/>
    }
}