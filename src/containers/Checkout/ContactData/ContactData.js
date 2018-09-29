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
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            zipcode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip Code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: ''
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
                value: ''
            }

        },
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,

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


    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }

        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        }

        updatedFormElement.value = event.target.value
        updatedOrderForm[inputIdentifier] = updatedFormElement

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

            <form>
                {formELementsArray.map((el, index) => {
                    return <Input key={el.id} elementType={el.config.elementType} elementConfig={el.config.elementConfig} value={el.config.value}
                        changed={(event) => this.inputChangedHandler(event, el.id)} />
                })}
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
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
