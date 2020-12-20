import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AccountDetails from './AccountDetails';
import NewModal from './NewModal';
import TransectionList from './TransectionList';
import Button from 'react-bootstrap/Button'


class NewHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBalance: 12000,
            income: 0,
            spendedMoney: 0,
            expenditure: [],
            showPopup: false,
            incomeType: false,
            addedMoney: 0,
            description: "",
            loaded: false
           
        };
    }

    handleInput = (event) => {
        const target = event.target
        const name = target.name
        this.setState({
            [name]: event.target.value
        })
    }

    componentDidMount() {
        console.log(localStorage.getItem('spendedMoney'))
        const expende = JSON.parse(localStorage.getItem('expenditure'));
        if (localStorage.getItem('spendedMoney')) {
            this.setState({
                spendedMoney: localStorage.getItem('spendedMoney'),
                income: localStorage.getItem('income'),
                currentBalance: localStorage.getItem('currentBalance'),
                expenditure: expende
            })
        }
    }


    getDate = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        return today
    }

    updateSpendMoney = (money) => {
        var updateMoney = this.state.spendedMoney - money
        localStorage.setItem('spendedMoney', updateMoney);
        const spendMon = localStorage.getItem('spendedMoney')
        this.setState({
            spendedMoney: spendMon
        })
    }

    updateIncome = (money) => {
        var updateMoney = +this.state.income + +money
        console.log(money, "money")
        localStorage.setItem('income', updateMoney);
        const incMony = localStorage.getItem('income')
        this.setState({
            income: incMony
        })
    }

    calculateBalance = (money, spended) => {
        console.log(spended)
        const currentBal = spended ? this.spendedMoney(money) : this.incomeMoney(money)
        console.log(currentBal, "currentBal")
        // const currentBalance = localStorage.getItem('currentBalance');
        localStorage.setItem('currentBalance', currentBal);
        this.setState({
            currentBalance: localStorage.getItem('currentBalance')
        }, () => {
            localStorage.setItem('currentBalance', this.state.currentBalance);
        })
        spended ? this.updateSpendMoney(money) : this.updateIncome(money)

    }

    spendedMoney = (spendMoney) => {
        console.log(this.state.currentBalance - spendMoney, "<-=--=-=-=")
        return this.state.currentBalance - spendMoney;
    }

    incomeMoney = (addedMoney) => {
        console.log(+this.state.currentBalance + +addedMoney, addedMoney, "-=--=-")
        return (+this.state.currentBalance + +addedMoney);
    }

    handleSubmit = () => {
        var date = this.getDate()
        const moneyObj = {
            moneyValue: this.state.addedMoney,
            description: this.state.description,
            spended: this.state.incomeType,
            date: date
        }
        localStorage.setItem('expenditure', JSON.stringify(this.state.expenditure));
        this.setState({
            expenditure: this.state.expenditure.concat(moneyObj),
            showPopup: false,
            loaded: true
        }, () => {
            localStorage.setItem('expenditure', JSON.stringify(this.state.expenditure));
            this.calculateBalance(this.state.addedMoney, this.state.incomeType)

        })
    }

    showModal = () => {
        return (
            <NewModal showPopup={this.state.showPopup}
             handleFormSubmit={this.handleFormSubmit}
             incomeType={this.incomeType}
             handleInput = {this.handleInput}
             updatestate={this.updatestate}
             >
                             </NewModal>
        )
    }

    popShow = (type) => {
        this.setState({
            showPopup: true,
            incomeType: type === "Add" ? false : true
        })
    }
    updatestate = (showstate) => {
        this.setState({showPopup: showstate})
    }
    render() {

        const expenditure = localStorage.getItem('expenditure') === null ? this.state.expenditure : JSON.parse(localStorage.getItem('expenditure'))

        return (
            <Container >
                {this.showModal()}
                <AccountDetails {...this.state } ></AccountDetails>
                <TransectionList expenditure={expenditure}></TransectionList>  
                <Row style={{ 'marginTop': "20px" }}>
          <Col>
            <Button variant="success" onClick={() => this.popShow("Add")}>Add Money (+)</Button>
          </Col>
          <Col>
            <Button variant="danger" onClick={() => this.popShow()}>Spended Money (-)</Button>
          </Col>
        </Row>
          </Container>
        );
    }
}

export default NewHome;
