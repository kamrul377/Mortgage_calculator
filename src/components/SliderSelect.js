import React from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = ({ data, setData }) => {

  console.log(data)
  return (
    <div>

      <SliderComponent
        defaultValue={data.homeValue}
        min={1000}
        value={data.homeValue}
        max={10000} label="Home Value"
        step={100}
        amount={data.homeValue} unit="$"
        onChange={(e, value) => setData({
          ...data,
          homeValue: value,
          downPayment: value * 0.2,
          loanAmount: value * 0.8
        })}

      />



{/* down payment method  */}
      <SliderComponent
        defaultValue={data.downPayment}
        min={0}
        max={data.homeValue}
        value={data.downPayment}
        label="Down Payment"
        step={100}
        amount={data.downPayment}
        unit="$"
        onChange={(e, value) => setData({
          ...data,
          downPayment: value,
          loanAmount : data.homeValue - value
          
        })}

      />



      <SliderComponent
        defaultValue={data.loanAmount}
        min={0}
        max={data.homeValue}
        value={data.loanAmount}
        label="Loan amount"
        step={100}
        amount={data.loanAmount}
        unit="$"
        onChange={(e,value) => setData({
          ...data,
          loanAmount: value,
          downPayment: data.homeValue - value
        })}

      />

      <SliderComponent
        defaultValue={data.interestRate} min={2}
        max={18}
        label="Interest Rate"
        step={0.5}
        value={data.interestRate}
        amount={data.interestRate}
        unit="%"
        onChange={(e,value) => setData({
          ...data,
          interestRate: value
        })}

      />

    </div>
  )
}

export default SliderSelect