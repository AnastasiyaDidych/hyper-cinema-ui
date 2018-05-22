import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coefficientFilter'
})
export class CoefficientFilterPipe implements PipeTransform {

  transform(coefficients, value){

    if(!value)return coefficients;

    return coefficients.filter(coefficient => {
        return coefficient.type.includes(value)
    })
  }
}
