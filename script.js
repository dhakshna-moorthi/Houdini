let grid = 6;

const numberWords = {
    1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 
    7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 
    13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 
    19: 'nineteen', 20: 'twenty', 21: 'twenty-one', 22: 'twenty-two', 23: 'twenty-three', 24: 'twenty-four', 
    25: 'twenty-five', 26: 'twenty-six', 27: 'twenty-seven', 28: 'twenty-eight', 29: 'twenty-nine', 30: 'thirty',
    31: 'thirty-one', 32: 'thirty-two', 33: 'thirty-three', 34: 'thirty-four', 35: 'thirty-five', 36: 'thirty-six'
};


let numbers = [];
for (let i = 1; i <= (grid**2)/2; i++) {
    numbers.push(i);
    numbers.push(i);
}

for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
}

for(let i=1; i<=grid*grid; i++) {
    let num = numberWords[i]
    let element = document.getElementById(num)
    num_value = numbers[i-1]
    element.value = num_value
    element.classList.add('hide-text');
}

count = 0;
score = 0;
attempts = 0;
prev_click_1 = ""
prev_click_2 = ""



document.addEventListener('DOMContentLoaded', () => {
  
    const buttons = document.querySelectorAll('#form input');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {

            count = count + 1

            if (count==3) {
                document.getElementById(prev_click_1).classList.add('hide-text');
                document.getElementById(prev_click_2).classList.add('hide-text');
                count = 1
            } 

            event.preventDefault();
            selected = event.target.id;
            document.getElementById(selected).classList.remove('hide-text');

            if (count==1) {
                prev_click_1 = selected
            } else if (count==2) {
                attempts = attempts+1;
                if (document.getElementById(prev_click_1).value == document.getElementById(selected).value && document.getElementById(prev_click_1) != document.getElementById(selected)){
                    document.getElementById(prev_click_1).style.backgroundColor = '#4CAF50'
                    document.getElementById(selected).style.backgroundColor = '#4CAF50'
                    prev_click_1 = ""
                    prev_click_2 = ""
                    count = 0
                    score = score + 1
                } else {
                    prev_click_2 = selected
                }
            } 

            if (score==grid*2) {
                document.getElementById('result').innerHTML = "Congrats, you've solved it!"
                document.getElementById('result').style.color = "#4CAF50"
                document.getElementById('attempts').innerHTML = "Number of attempts: "+attempts

                if (attempts<=grid*grid){
                    document.getElementById('attempts').style.color = "#4CAF50"
                } else if (attempts<=(grid*grid)+(grid*2)) {
                    document.getElementById('attempts').style.color = "#FFC107"
                } else {
                    document.getElementById('attempts').style.color = "#f44336"
                }
            }
        });
    });
});

