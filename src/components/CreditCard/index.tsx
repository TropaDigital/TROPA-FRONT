import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { useState } from 'react';
import { UserData } from './styles';
import { IconSimpleCheck } from '../Svg';

const CreditCard: NextPage = () => {
    const [values, setValues] = useState({
        name: '',
        number: '',
        expiration: '',
        cvc: '',
        focus: '',
    })
    
    const handleChange = (e:any) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleFocus = (e:any) => {
        setValues({
            ...values,
            focus: e.target.name
        })
    }
    const handleSubmit = (e:any) => {
        e.preventDefault()
        // setErrors(validateInfo(values))
    }
    return (
        <UserData>
            <div className="user-card">
                <form onSubmit={handleSubmit}>
                    
                    <div className="number">
                        <label>Número do cartão</label>
                        <input
                            type="number"
                            id="number"
                            name="number"
                            placeholder="Número do cartão"
                            value={values.number}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            // isValid={errors.cnumber}
                            
                        />
                    </div>

                    <div className="name">
                        <label>Nome do titular</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nome do titular"
                            value={values.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            // isValid={errors.cname}
                        />
                    </div>

                    <div className="expiration">
                        <label>Data de expiração</label>
                        <input
                            type="string"
                            id="expiration"
                            name="expiration"
                            placeholder="Data expiração"
                            value={values.expiration}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            // isValid={errors.cexp}
                        />
                    </div>
                    
                </form>

                <div>
                    <Cards
                        cvc={values.cvc}
                        expiry={values.expiration}
                        focused={values.focus}
                        name={values.name}
                        number={values.number}
                    />

                    <div className="date-code">
                        <span>Código de segurança</span>
                        <input
                            type="number"
                            id="cvc"
                            name="cvc"
                            placeholder="CVC/CVV"
                            value={values.cvc}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            // isValid={errors.ccvc}
                        />
                    </div>
                </div>
                
            </div>

            <button type="submit" className="pay-now">
                Pagar agora <IconSimpleCheck />
            </button>

        </UserData>
    )
}

export default CreditCard;