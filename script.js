var Step1 = document.getElementById('Step1');
var Step2 = document.getElementById('Step2');
var Step3 = document.getElementById('Step3');
var Step4 = document.getElementById('Step4');
// var Step5 = document.getElementById('Step5');
// var Step6 = document.getElementById('Step6');

var box1 = document.getElementById('step1-box1');
var box2 = document.getElementById('step1-box2');
var box3 = document.getElementById('step1-box3');
var box4 = document.getElementById('step1-box4');
var box5 = document.getElementById('step1-box5');
var box6 = document.getElementById('step1-box6');
var box7 = document.getElementById('step1-box7');
var box8 = document.getElementById('step1-box8');

var box1criteria = false ;
var box2criteria = false ;
var box3criteria = false ;
var box4criteria = false ;
var box5criteria = false ;
var box6criteria = false ;
var box7criteria = false ;
var box8criteria = false ;

var allboxes = true
var button1 = document.getElementById('button1')

var selectBox1 = document.getElementById('step1-select-box-1');
var selectBox2 = document.getElementById('step1-select-box-2');
var selectBox3 = document.getElementById('step1-select-box-3');
var selectBox4 = document.getElementById('step1-select-box-4');
var selectBox5 = document.getElementById('step1-select-box-5');
var selectBox6 = document.getElementById('step1-select-box-6');
var selectBox7 = document.getElementById('step1-select-box-7');
var selectBox8 = document.getElementById('step1-select-box-8');

var goToStep2 = document.getElementById('go-to-Step2');

var error1 = document.getElementById('error1')


var row1 = document.getElementById('row-1');
// Assign the handleClick function to the onclick event of the button

box1.onclick = () => {
    if (!box1criteria){
        box1.classList.add('selected-box');
        box1.classList.remove('boxes');
        selectBox1.classList.add('boxes-after-hover');
        selectBox1.classList.remove('boxes-before-hover');
        error1.classList.add('d-none');
        error1.classList.remove('d-flex');
        button1.classList.add('button-after')
        button1.classList.remove('button-before')
        box1criteria = true;
    }else{
        box1.classList.remove('selected-box');
        box1.classList.add('boxes');
        selectBox1.classList.remove('boxes-after-hover');
        selectBox1.classList.add('boxes-before-hover');
        box1criteria = false;
    }

}
box2.onclick = ()  =>{
    if (!box2criteria){
        box2.classList.add('selected-box');
        box2.classList.remove('boxes');
        selectBox2.classList.add('boxes-after-hover');
        selectBox2.classList.remove('boxes-before-hover');
        error1.classList.add('d-none')
        error1.classList.remove('d-flex')
        button1.classList.add('button-after')
        button1.classList.remove('button-before')
        box2criteria = true;
    }else{
        box2.classList.add('boxes');
        box2.classList.remove('selected-box');
        selectBox2.classList.remove('boxes-after-hover');
        selectBox2.classList.add('boxes-before-hover');
        box2criteria = false;
    }

}
box3.onclick = ()  =>{
    if (!box3criteria){
        box3.classList.add('selected-box');
        box3.classList.remove('boxes');
        selectBox3.classList.add('boxes-after-hover');
        selectBox3.classList.remove('boxes-before-hover');
        error1.classList.add('d-none')
        error1.classList.remove('d-flex')
        button1.classList.add('button-after')
        button1.classList.remove('button-before')
        box3criteria = true;
    }else{
        box3.classList.add('boxes');
        box3.classList.remove('selected-box');
        selectBox3.classList.remove('boxes-after-hover');
        selectBox3.classList.add('boxes-before-hover');
        box3criteria = false;
    }
}
box4.onclick = ()  =>{
    if (!box4criteria){
        box4.classList.add('selected-box');
        box4.classList.remove('boxes');
        selectBox4.classList.add('boxes-after-hover');
        selectBox4.classList.remove('boxes-before-hover');
        error1.classList.add('d-none')
        error1.classList.remove('d-flex')
        button1.classList.add('button-after')
        button1.classList.remove('button-before')
        box4criteria = true;
    }else{
        box4.classList.add('boxes');
        box4.classList.remove('selected-box');
        box4.classList.remove('boxes-after-hover');
        selectBox4.classList.remove('boxes-after-hover');
        selectBox4.classList.add('boxes-before-hover');
        box4criteria = false;
    }

}
box5.onclick = ()  =>{
    if (!box5criteria){
        box5.classList.add('selected-box');
        box5.classList.remove('boxes');
        selectBox5.classList.add('boxes-after-hover');
        selectBox5.classList.remove('boxes-before-hover');
        error1.classList.add('d-none')
        error1.classList.remove('d-flex')
        button1.classList.add('button-after')
        button1.classList.remove('button-before')
        box5criteria = true;
    }else{
        box5.classList.add('boxes');
        box5.classList.remove('selected-box');
        selectBox5.classList.remove('boxes-after-hover');
        selectBox5.classList.add('boxes-before-hover');
        box5criteria = false;
    }5
}
box6.onclick = ()  =>{
    if (!box6criteria){
        box6.classList.add('selected-box');
        box6.classList.remove('boxes');
        selectBox6.classList.add('boxes-after-hover');
        selectBox6.classList.remove('boxes-before-hover');
        error1.classList.add('d-none')
        error1.classList.remove('d-flex')
        button1.classList.add('button-after')
        button1.classList.remove('button-before')
        box6criteria = true;
    }else{
        box6.classList.add('boxes');
        box6.classList.remove('selected-box');
        selectBox6.classList.remove('boxes-after-hover');
        selectBox6.classList.add('boxes-before-hover');
        box6criteria = false;
    }

}
box7.onclick = ()  =>{
    if (!box7criteria){
        box7.classList.add('selected-box');
        box7.classList.remove('boxes');
        selectBox7.classList.add('boxes-after-hover');
        selectBox7.classList.remove('boxes-before-hover');
        error1.classList.add('d-none')
        error1.classList.remove('d-flex')
        button1.classList.add('button-after')
        button1.classList.remove('button-before')
        box7criteria = true;
    }else{
        box7.classList.add('boxes');
        box7.classList.remove('selected-box');
        selectBox7.classList.remove('boxes-after-hover');
        selectBox7.classList.add('boxes-before-hover');
        box7criteria = false;
    }

}
box8.onclick = ()  =>{
    if (!box8criteria){
        box8.classList.remove('boxes');
        box8.classList.add('selected-box');
        selectBox8.classList.add('boxes-after-hover');
        selectBox8.classList.remove('boxes-before-hover');
        error1.classList.add('d-none')
        error1.classList.remove('d-flex')
        button1.classList.add('button-after')
        button1.classList.remove('button-before')
        box8criteria = true;
    }else{
        box8.classList.add('boxes');
        box8.classList.remove('selected-box');
        selectBox8.classList.remove('boxes-after-hover');
        selectBox8.classList.add('boxes-before-hover');
        box8criteria = false;
    }

}



// if (!box1criteria && !box2criteria && !box3criteria && !box4criteria && !box5criteria && !box6criteria && !box7criteria && !box8criteria) {
//     allboxes = false;
// }


goToStep2.onclick = () =>{
    if(!box1criteria && !box2criteria && !box3criteria && !box4criteria && !box5criteria && !box6criteria && !box7criteria && !box8criteria){
        error1.classList.remove('d-none')
        error1.classList.add('d-flex')
        button1.classList.remove('button-after')
        button1.classList.add('button-before')
    }
    else{
        button1.classList.add('button-after')
        button1.classList.remove('button-before')
        Step1.classList.remove('display')
        Step1.classList.add('d-none')
        Step2.classList.remove('d-none')
        Step2.classList.add('display')
    }

}








// step 2
var Step2box1 = document.getElementById('step2-box1');
var Step2box2 = document.getElementById('step2-box2');
var Step2box3 = document.getElementById('step2-box3');
var Step2box4 = document.getElementById('step2-box4');
var Step2box5 = document.getElementById('step2-box5');
var Step2box6 = document.getElementById('step2-box6');


var Step2box1criteria = false ;
var Step2box2criteria = false ;
var Step2box3criteria = false ;
var Step2box4criteria = false ;
var Step2box5criteria = false ;
var Step2box6criteria = false ;


var error2 = document.getElementById('error')


var button2 = document.getElementById('button2')



// Assign the handleClick function to the onclick event of the button

Step2box1.onclick = () => {
    if (!Step2box1criteria){

        Step2box1criteria = true;
        Step2.classList.remove('display')
        Step2.classList.add('d-none')
        Step3.classList.remove('d-none')
        Step3.classList.add('display')
    }
    
}
Step2box2.onclick = ()  =>{
    if (!Step2box2criteria){
        Step2box2criteria = true;
        Step2.classList.remove('display')
        Step2.classList.add('d-none')
        Step3.classList.remove('d-none')
        Step3.classList.add('display')

    }

}
Step2box3.onclick = ()  =>{
    if (!Step2box3criteria){

        Step2box3criteria = true;
        Step2.classList.remove('display')
        Step2.classList.add('d-none')
        Step3.classList.remove('d-none')
        Step3.classList.add('display')

    }
}
Step2box4.onclick = ()  =>{
    if (!Step2box4criteria){

        Step2box4criteria = true;
        Step2.classList.remove('display')
        Step2.classList.add('d-none')
        Step3.classList.remove('d-none')
        Step3.classList.add('display')

    }

}
Step2box5.onclick = ()  =>{
    if (!Step2box5criteria){

        Step2box5criteria = true;
        Step2.classList.remove('display')
        Step2.classList.add('d-none')
        Step3.classList.remove('d-none')
        Step3.classList.add('display')

    }
}







var backToStep1 = document.getElementById('back-to-page1')

backToStep1.onclick = () =>{
    error1.classList.add('d-none')
    error1.classList.remove('d-flex')
    Step1.classList.remove('d-none')
    Step1.classList.add('display')
    Step2.classList.remove('display')
    Step2.classList.add('d-none')

}

var step2row1 = document.getElementById('step2-row-1');


var goToStep3 = document.getElementById('go-to-Step3');

goToStep3.onclick = () =>{
    error2.classList.remove('d-none')
    error2.classList.add('d-flex')
    // step2row1.classList.remove('mt-5')
    // step2row1.classList.add('mt-2')
    button2.classList.remove('button-after')
    button2.classList.add('button-before')
}




// ///step3

// back to step2


var error3 = document.getElementById('error3')
var button3 = document.getElementById('button3')
var backToStep2 = document.getElementById('back-to-page2')

backToStep2.onclick = () =>{
    error2.classList.add('d-none')
    error2.classList.remove('d-flex')

    Step2.classList.remove('d-none')
    Step2.classList.add('display')
    Step3.classList.remove('display')
    Step3.classList.add('d-none')

    

    Step2box1criteria = false;


    Step2box2criteria = false;


    Step2box3criteria = false;


    Step2box4criteria = false;


    Step2box5criteria = false;
}




var Step3box1 = document.getElementById('step3-box1');
var Step3box2 = document.getElementById('step3-box2');
var Step3box3 = document.getElementById('step3-box3');
var Step3box4 = document.getElementById('step3-box4');
var Step3box5 = document.getElementById('step3-box5');


var Step3box1criteria = false ;
var Step3box2criteria = false ;
var Step3box3criteria = false ;
var Step3box4criteria = false ;
var Step3box5criteria = false ;






// Assign the handleClick function to the onclick event of the button

Step3box1.onclick = () => {
    if (!Step3box1criteria){

        Step3box1criteria = true;
        Step3.classList.remove('display')
        Step3.classList.add('d-none')
        Step4.classList.remove('d-none')
        Step4.classList.add('display')
    }
    
}
Step3box2.onclick = ()  =>{
    if (!Step3box2criteria){
        Step3box2criteria = true;
        Step3.classList.remove('display')
        Step3.classList.add('d-none')
        Step4.classList.remove('d-none')
        Step4.classList.add('display')

    }

}
Step3box3.onclick = ()  =>{
    if (!Step3box3criteria){

        Step3box3criteria = true;
        Step3.classList.remove('display')
        Step3.classList.add('d-none')
        Step4.classList.remove('d-none')
        Step4.classList.add('display')

    }
}

var goToStep4 = document.getElementById('go-to-Step4');

goToStep4.onclick = () =>{
    error3.classList.remove('d-none')
    error3.classList.add('d-flex')
    button3.classList.remove('button3-after')
    button3.classList.add('button3-before')
}


// step 4


var Step4box1 = document.getElementById('step4-box1');
var Step4box2 = document.getElementById('step4-box2');
var Step4box3 = document.getElementById('step4-box3');
var Step4box4 = document.getElementById('step4-box4');
var Step4box5 = document.getElementById('step4-box5');
var Step4box6 = document.getElementById('step4-box6');
var Step4box7 = document.getElementById('step4-box7');
var Step4box8 = document.getElementById('step4-box8');



var Step4box1criteria = false ;
var Step4box2criteria = false ;
var Step4box3criteria = false ;
var Step4box4criteria = false ;
var Step4box5criteria = false ;
var Step4box6criteria = false ;
var Step4box7criteria = false ;
var Step4box8criteria = false ;




// Assign the handleClick function to the onclick event of the button

Step4box1.onclick = () => {
    if (!Step4box1criteria){

        Step4box1criteria = true;
        Step4.classList.remove('display')
        Step4.classList.add('d-none')
        Step5.classList.remove('d-none')
        Step5.classList.add('display')
    }
    
}
Step4box2.onclick = ()  =>{
    if (!Step4box2criteria){
        Step4box2criteria = true;
        Step4.classList.remove('display')
        Step4.classList.add('d-none')
        Step5.classList.remove('d-none')
        Step5.classList.add('display')

    }

}
Step4box3.onclick = ()  =>{
    if (!Step4box3criteria){

        Step4box3criteria = true;
        Step4.classList.remove('display')
        Step4.classList.add('d-none')
        Step5.classList.remove('d-none')
        Step5.classList.add('display')

    }
}
Step4box4.onclick = ()  =>{
    if (!Step4box4criteria){

        Step4box5criteria = true;
        Step4.classList.remove('display')
        Step4.classList.add('d-none')
        Step5.classList.remove('d-none')
        Step5.classList.add('display')

    }
}
Step4box5.onclick = ()  =>{
    if (!Step4box5criteria){

        Step4box5criteria = true;
        Step4.classList.remove('display')
        Step4.classList.add('d-none')
        Step5.classList.remove('d-none')
        Step5.classList.add('display')

    }
}
Step4box6.onclick = ()  =>{
    if (!Step4box6criteria){

        Step4box6criteria = true;
        Step4.classList.remove('display')
        Step4.classList.add('d-none')
        Step5.classList.remove('d-none')
        Step5.classList.add('display')

    }
}
Step4box7.onclick = ()  =>{
    if (!Step4box7criteria){

        Step4box7criteria = true;
        Step4.classList.remove('display')
        Step4.classList.add('d-none')
        Step5.classList.remove('d-none')
        Step5.classList.add('display')

    }
}
Step4box8.onclick = ()  =>{
    if (!Step4box8criteria){

        Step4box8criteria = true;
        Step4.classList.remove('display')
        Step4.classList.add('d-none')
        Step5.classList.remove('d-none')
        Step5.classList.add('display')

    }
}


var error4 = document.getElementById('error4')
var button4 = document.getElementById('button4')
var goToStep5 = document.getElementById('go-to-Step5');

goToStep5.onclick = () =>{
    error4.classList.remove('d-none')
    error4.classList.add('d-flex')
    button4.classList.remove('button-after')
    button4.classList.add('button-before')
}

var backToStep3 = document.getElementById('back-to-page3')

backToStep3.onclick = () =>{


    Step3.classList.remove('d-none')
    Step3.classList.add('display')
    Step4.classList.remove('display')
    Step4.classList.add('d-none')
    error3.classList.add('d-none')
    error3.classList.remove('d-flex')

    

    Step3box1criteria = false;


    Step3box2criteria = false;


    Step3box3criteria = false;

}


// Step5

var houseNum = document.getElementById('house-number');
var CityName = document.getElementById('City');
var PostCode = document.getElementById('Postcode');
var error5 = document.getElementById('error5')
var button5 = document.getElementById('button5')
var goToStep6 = document.getElementById('go-to-Step6');
var Step5 = document.getElementById('Step5');
var Step6 = document.getElementById('Step6');

goToStep6.onclick = (event) => {
    // Prevent the default action
    event.preventDefault();

    var checkHouseNum = houseNum.value.trim() !== '';
    var checkCityName = CityName.value.trim() !== '';
    var checkPostCode = PostCode.value.trim() !== '';

    if (!checkCityName || !checkHouseNum || !checkPostCode) {
        error5.classList.remove('d-none');
        error5.classList.add('d-flex');
        button5.classList.remove('button5-after')
        button5.classList.add('button5-before')
        error6.classList.add('d-none')
        error6.classList.remove('d-flex')
    } else {
        Step5.classList.remove('display');
        Step5.classList.add('d-none');
        Step6.classList.remove('d-none');
        Step6.classList.add('display');
        button4.classList.add('button-after')
        button4.classList.remove('button-before')
    }
};

var backToStep4 = document.getElementById('back-to-page4')

backToStep4.onclick = () =>{

    Step5.classList.remove('display')
    Step5.classList.add('d-none')
    Step4.classList.remove('d-none')
    Step4.classList.add('display')
    error4.classList.add('d-none')
    error4.classList.remove('d-flex')

    

    Step4box1criteria = false;

    Step4box2criteria = false;

    Step4box3criteria = false;

    Step4box4criteria = false;

    Step4box5criteria = false;

    Step4box6criteria = false;

    Step4box7criteria = false;

    Step4box8criteria = false;
}


// Step6

var Step6box1 = document.getElementById('step6-box1');
var Step6box2 = document.getElementById('step6-box2');
var Step6box3 = document.getElementById('step6-box3');
var Step6box4 = document.getElementById('step6-box4');
var Step6box5 = document.getElementById('step6-box5');
var Step6box6 = document.getElementById('step6-box6');
var Step6box7 = document.getElementById('step6-box7');
var Step6box8 = document.getElementById('step6-box8');



var Step6box1criteria = false ;
var Step6box2criteria = false ;
var Step6box3criteria = false ;
var Step6box4criteria = false ;
var Step6box5criteria = false ;
var Step6box6criteria = false ;
var Step6box7criteria = false ;
var Step6box8criteria = false ;


var Step6selectBox1 = document.getElementById('step6-select-box-1');
var Step6selectBox2 = document.getElementById('step6-select-box-2');
var Step6selectBox3 = document.getElementById('step6-select-box-3');
var Step6selectBox4 = document.getElementById('step6-select-box-4');
var Step6selectBox5 = document.getElementById('step6-select-box-5');
var Step6selectBox6 = document.getElementById('step6-select-box-6');
var Step6selectBox7 = document.getElementById('step6-select-box-7');
var Step6selectBox8 = document.getElementById('step6-select-box-8');


// Assign the handleClick function to the onclick event of the button

Step6box1.onclick = () => {
    if (!Step6box1criteria){
        Step6box1.classList.add('selected-box');
        Step6box1.classList.remove('boxes');
        Step6selectBox1.classList.add('boxes-after-hover');
        Step6selectBox1.classList.remove('boxes-before-hover');
        Step6box1criteria = true;
    }else{
        Step6box1.classList.add('boxes');
        Step6box1.classList.remove('selected-box');
        Step6selectBox1.classList.remove('boxes-after-hover');
        Step6selectBox1.classList.add('boxes-before-hover');
        Step6box1criteria = false;
    }
}
Step6box2.onclick = ()  =>{
    if (!Step6box2criteria){
        Step6box2.classList.add('selected-box');
        Step6box2.classList.remove('boxes');
        Step6selectBox2.classList.add('boxes-after-hover');
        Step6selectBox2.classList.remove('boxes-before-hover');
        Step6box2criteria = true;
    }else{
        Step6box2.classList.add('boxes');
        Step6box2.classList.remove('selected-box');
        Step6selectBox2.classList.remove('boxes-after-hover');
        Step6selectBox2.classList.add('boxes-before-hover');
        Step6box2criteria = false;
    }

}
Step6box3.onclick = ()  =>{
    if (!Step6box3criteria){
        Step6box3.classList.add('selected-box');
        Step6box3.classList.remove('boxes');
        Step6selectBox3.classList.add('boxes-after-hover');
        Step6selectBox3.classList.remove('boxes-before-hover');
        Step6box3criteria = true;
    }else{
        Step6box3.classList.add('boxes');
        Step6box3.classList.remove('selected-box');
        Step6selectBox3.classList.remove('boxes-after-hover');
        Step6selectBox3.classList.add('boxes-before-hover');
        Step6box3criteria = false;
    }
}
Step6box4.onclick = ()  =>{
    if (!Step6box4criteria){
        Step6box4.classList.add('selected-box');
        Step6box4.classList.remove('boxes');
        Step6selectBox4.classList.add('boxes-after-hover');
        Step6selectBox4.classList.remove('boxes-before-hover');
        Step6box4criteria = true;
    }else{
        Step6box4.classList.add('boxes');
        Step6box4.classList.remove('selected-box');
        Step6selectBox4.classList.remove('boxes-after-hover');
        Step6selectBox4.classList.add('boxes-before-hover');
        Step6box4criteria = false;
    }
}
Step6box5.onclick = ()  =>{
    if (!Step6box5criteria){
        Step6box5.classList.add('selected-box');
        Step6box5.classList.remove('boxes');
        Step6selectBox5.classList.add('boxes-after-hover');
        Step6selectBox5.classList.remove('boxes-before-hover');
        Step6box5criteria = true;
    }else{
        Step6box5.classList.add('boxes');
        Step6box5.classList.remove('selected-box');
        Step6selectBox5.classList.remove('boxes-after-hover');
        Step6selectBox5.classList.add('boxes-before-hover');
        Step6box5criteria = false;
    }
}
Step6box6.onclick = ()  =>{
    if (!Step6box6criteria){
        Step6box6.classList.add('selected-box');
        Step6box6.classList.remove('boxes');
        Step6selectBox6.classList.add('boxes-after-hover');
        Step6selectBox6.classList.remove('boxes-before-hover');
        Step6box6criteria = true;
    }else{
        Step6box6.classList.add('boxes');
        Step6box6.classList.remove('selected-box');
        Step6selectBox6.classList.remove('boxes-after-hover');
        Step6selectBox6.classList.add('boxes-before-hover');
        Step6box6criteria = false;
    }
}
Step6box7.onclick = ()  =>{
    if (!Step6box7criteria){
        Step6box7.classList.add('selected-box');
        Step6box7.classList.remove('boxes');
        Step6selectBox7.classList.add('boxes-after-hover');
        Step6selectBox7.classList.remove('boxes-before-hover');
        Step6box7criteria = true;
    }else{
        Step6box7.classList.add('boxes');
        Step6box7.classList.remove('selected-box');
        Step6selectBox7.classList.remove('boxes-after-hover');
        Step6selectBox7.classList.add('boxes-before-hover');
        Step6box7criteria = false;
    }
}
Step6box8.onclick = ()  =>{
    if (!Step6box8criteria){
        Step6box8.classList.add('selected-box');
        Step6box8.classList.remove('boxes');
        Step6selectBox8.classList.add('boxes-after-hover');
        Step6selectBox8.classList.remove('boxes-before-hover');
        Step6box8criteria = true;
    }else{
        Step6box8.classList.add('boxes');
        Step6box8.classList.remove('selected-box');
        Step6selectBox8.classList.remove('boxes-after-hover');
        Step6selectBox8.classList.add('boxes-before-hover');
        Step6box8criteria = false;
    }
}

var finish = document.getElementById('finish')
var error6 = document.getElementById('error6')
var button6 = document.getElementById('button6')
var backToStep5 = document.getElementById('back-to-page5')

backToStep5.onclick = () =>{
    Step6.classList.remove('display')
    Step6.classList.add('d-none')
    Step5.classList.remove('d-none')
    Step5.classList.add('display')

}

finish.onclick = () =>{
    if (!Step6box8criteria &&  !Step6box7criteria &&  !Step6box6criteria &&  !Step6box5criteria &&  !Step6box4criteria &&  !Step6box3criteria &&  !Step6box2criteria &&  !Step6box1criteria){
        error6.classList.remove('d-none')
        error6.classList.add('d-flex')
        button6.classList.remove('button-after')
        button6.classList.add('button-before')
    }
    else{
        error6.classList.add('d-none')
        error6.classList.remove('d-flex')
        button6.classList.add('button-after')
        button6.classList.remove('button-before')
    }
}




// page-11
var dropdown1 = document.getElementById('dropdown1')
var dropdown2 = document.getElementById('dropdown2')
var dropdown3 = document.getElementById('dropdown3')
var beforeDropdown1 = document.getElementById('before-dropdown1')
var beforeDropdown2 = document.getElementById('before-dropdown2')
var beforeDropdown3 = document.getElementById('before-dropdown3')
var afterDropdown1 = document.getElementById('after-dropdown1')
var afterDropdown2 = document.getElementById('after-dropdown2')
var afterDropdown3 = document.getElementById('after-dropdown3')
var dropdownTextBefore1 = document.getElementById('page-11-dropdown-text-1')
var dropdownTextBefore2 = document.getElementById('page-11-dropdown-text-2')
var dropdownTextBefore3 = document.getElementById('page-11-dropdown-text-3')

checkDropdown1 = false
checkDropdown3 = false
checkDropdown2 = false

dropdown1.onclick = () =>{
    if (!checkDropdown1){
        beforeDropdown1.classList.add('d-none')
        beforeDropdown1.classList.remove('d-flex')
        afterDropdown1.classList.add('d-flex')
        afterDropdown1.classList.remove('d-none')
        dropdownTextBefore1.classList.remove('d-none')
        dropdownTextBefore1.classList.add('page-11-after-dropdown')
        checkDropdown1 = true
    }
    else{
        beforeDropdown1.classList.add('d-flex')
        beforeDropdown1.classList.remove('d-none')
        afterDropdown1.classList.add('d-none')
        afterDropdown1.classList.remove('d-flex')
        dropdownTextBefore1.classList.remove('page-11-after-dropdown')
        dropdownTextBefore1.classList.add('d-none')
        checkDropdown1 = false
    }
}

dropdown2.onclick = () =>{
    if (!checkDropdown2){
        beforeDropdown2.classList.add('d-none')
        beforeDropdown2.classList.remove('d-flex')
        afterDropdown2.classList.add('d-flex')
        afterDropdown2.classList.remove('d-none')
        dropdownTextBefore2.classList.remove('d-none')
        dropdownTextBefore2.classList.add('page-11-after-dropdown')
        checkDropdown2 = true
    }
    else{
        beforeDropdown2.classList.add('d-flex')
        beforeDropdown2.classList.remove('d-none')
        afterDropdown2.classList.add('d-none')
        afterDropdown2.classList.remove('d-flex')
        dropdownTextBefore2.classList.remove('page-11-after-dropdown')
        dropdownTextBefore2.classList.add('d-none')
        checkDropdown2 = false
    }
}

dropdown3.onclick = () =>{
    if (!checkDropdown3){
        beforeDropdown3.classList.add('d-none')
        beforeDropdown3.classList.remove('d-flex')
        afterDropdown3.classList.add('d-flex')
        afterDropdown3.classList.remove('d-none')
        dropdownTextBefore3.classList.remove('d-none')
        dropdownTextBefore3.classList.add('page-11-after-dropdown')
        checkDropdown3 = true
    }
    else{
        beforeDropdown3.classList.add('d-flex')
        beforeDropdown3.classList.remove('d-none')
        afterDropdown3.classList.add('d-none')
        afterDropdown3.classList.remove('d-flex')
        dropdownTextBefore3.classList.remove('page-11-after-dropdown')
        dropdownTextBefore3.classList.add('d-none')
        checkDropdown3 = false
    }
}