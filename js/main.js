//required abilities of a calculator:
//accept user inputs of number, operator, and another number
//should accept decimal numbers
//store inputs
//recognize inputs and perform calculations
//return a result

//optional features:
//Should accept longer arithemitc operations
//display all input as it is being entered
//store previous total as start of next operation
//clear button should clear all entries 
//should prevent invalid inputs(operators next to each other, two decimal points)

const keys = document.querySelector('.calculator-buttons');
    keys.addEventListener('click', event => {
        const {target} = event;
        const {value} = target;
        if (!target.matches('button')){
            return;
        }else {
            calculator.parseInput(value)
            //console.log(value)
        }
    })

const calculator = {
    displayText: '0',
    prevTotal: null,

    parseInput(value) {
        if (this.displayText === '0'){
            this.displayText = ''
        }
        //have any of the special buttons been clicked
        switch (value) {
            case "=": 
                //calculate the answer
                break;
            case "AC" :
                //clear screen and stored values
                break;
            case '.' :
                if (this.displayText == 0) {
                    //pass '0' into add text method
                }else {
                    //add value to text string
                } 
                break;
            default:
                //add value to text string
                break;
        }

    },

        addText(value) {
            if(this.displayText === '0') {
                this.displayText = ''
            }else if(this.prevTotal !== null){
                this.displayText = this.prevTotal
                this.prevTotal = null
            }
            if(/*user has entered an invalid sequence dont proceed*/){

            }
            this.displayText += value
            //output display text to screen

        },
}

