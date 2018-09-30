import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    requried: true
                },
                valid: false

            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    requried: true
                },
                valid: false
            },
            zipcode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip Code'
                },
                value: '',
                validation: {
                    requried: true,
                    minLength: 5,
                    maxLength: 5,
                },
                valid: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    requried: true
                },
                valid: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    requried: true
                },
                valid: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {
                            value: 'fastest',
                            displayValue: 'Fastest'
                        },
                        {
                            value: 'cheapest',
                            displayValue: 'Cheapest'
                        }
                    ]
                },
                value: '',
            }

        },
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {

            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value


        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData

        };
        axios.post('/orders.json', order)
            .then(respoonse => {
                this.setState({
                    loading: false,
                })
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({
                    loading: false,
                })
            })

    }


    checkValidity = (value, rules) => {

        let isValid = true;

        if (rules.requried) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        return isValid


    }


    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }

        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        }

        updatedFormElement.value = event.target.value
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedOrderForm[inputIdentifier] = updatedFormElement
        console.log(updatedFormElement)

        this.setState({
            orderForm: updatedOrderForm
        })
    }

    render() {
        const formELementsArray = [];
        for (let key in this.state.orderForm) {
            formELementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        let form = (

            <form onSubmit={this.orderHandler}>
                {formELementsArray.map((el, index) => {
                    return <Input invalid={!el.config.valid} shouldValidate={el.config.validation} key={el.id} elementType={el.config.elementType} elementConfig={el.config.elementConfig} value={el.config.value}
                        changed={(event) => this.inputChangedHandler(event, el.id)} />
                })}
                <Button btnType="Success">ORDER</Button>
            </form>

        );
        if (this.state.loading) {

            form = <Spinner />

        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}

            </div>
        )
    }
}

export default ContactData
