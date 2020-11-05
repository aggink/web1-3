 var Dororo = {
    name: "Хяккимару",
    nickname: "Братец, Демон",
    kind: "человек",
    gender: "мужской",
    age: "16 лет",
    height: "163 см",
    about: "Хяккимару – худой подросток среднего роста. Имеет длинные, теплого оттенка черные волосы, собранные в высокий конский хвост. У юноши достаточно бледная, с бескровным, неярким цветом, кожа. Глаза подростка, имеющие ясный, приближенный к яркому каштановому оттенку цвет, продолжительное время заменены глазными протезами с карей радужкой."
};

var BlackClover = {
    name: "Аста",
    nickname: "Демон",
    kind: "человек",
    gender: "мужской",
    age: "16 лет",
    height: "171 см",
    about: "Аста является мальчиком невысокого роста, но с хорошо развитой мускулатурой. У него зелёные глаза и светлые растрёпанные волосы пепельного оттенка, с вечно вздёрнутой вверх прядью по центру головы. Он носит чёрную головную повязку, с золотой эмблемой Чёрного Быка и рисунок в виде четырёхгранной звезды, с тремя швами на задней стороне."
};

var GoldenKamuy = {
    name: "Саити Сугимото",
    nickname: "Бессмертный Сугимото",
    kind: "человек",
    gender: "мужской",
    age: "неизвестно",
    height: "неизвестно",
    about: "Сугимото — хорошо сложенный японец с каштановыми волосами, торчащими ёжиком, карими глазами и с тремя шрамами на лице. Два из них перпендикулярны и проходят по всему лицу, в то время как третий отклоняется горизонтально, как ветвь дерева. Все его тело также покрыто глубокими шрамами из-за больших достижений в бою. Его лицо серьезное и зрелое."
};

var FireForce = {
    name: "Синра Кусакабэ",
    nickname: "Дьявол",
    kind: "человек",
    gender: "мужской",
    age: "17 лет",
    height: "173 см",
    about: " Синра Кусакабэ — молодой человек среднего телосложения, с короткими остроконечными волосами, малиновым оттенком радужки глаз и особым острым строением зубов."
}   

/*var info = {GoldenKamuy, Dororo, BlackClover, FireForce };*/
var Index = 1;
    showSlides(Index);
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("Slides");
        var buttons = document.getElementsByClassName("buttons");
        var person = document.getElementsByClassName("person");
        
        if (n > slides.length) {
            Index = 1
        }
        if (n < 1) {
            Index = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < buttons.length; i++) {
            buttons[i].className = buttons[i].className.replace(" active", "");
        }
        slides[Index - 1].style.display = "block";
        buttons[Index - 1].className += " active";
        
        switch(Index){
            case 1:
                for(i = 0; i < person.length; i++){
                    person[0].textContent = GoldenKamuy.name;
                    person[1].textContent = GoldenKamuy.nickname;
                    person[2].textContent = GoldenKamuy.kind;
                    person[3].textContent = GoldenKamuy.gender;
                    person[4].textContent = GoldenKamuy.age;
                    person[5].textContent = GoldenKamuy.height;
                    person[6].textContent = GoldenKamuy.about;
                }
                break;
            case 2:
                for(i = 0; i < person.length; i++){
                    person[0].textContent = Dororo.name;
                    person[1].textContent = Dororo.nickname;
                    person[2].textContent = Dororo.kind;
                    person[3].textContent = Dororo.gender;
                    person[4].textContent = Dororo.age;
                    person[5].textContent = Dororo.height;
                    person[6].textContent = Dororo.about;
                }
                break;
            case 3:
                for(i = 0; i < person.length; i++){
                    person[0].textContent = BlackClover.name;
                    person[1].textContent = BlackClover.nickname;
                    person[2].textContent = BlackClover.kind;
                    person[3].textContent = BlackClover.gender;
                    person[4].textContent = BlackClover.age;
                    person[5].textContent = BlackClover.height;
                    person[6].textContent = BlackClover.about;
                }
                break;
            case 4:
                for(i = 0; i < person.length; i++){
                    person[0].textContent = FireForce.name;
                    person[1].textContent = FireForce.nickname;
                    person[2].textContent = FireForce.kind;
                    person[3].textContent = FireForce.gender;
                    person[4].textContent = FireForce.age;
                    person[5].textContent = FireForce.height;
                    person[6].textContent = FireForce.about;
                }
                break;
        }
    }

    function go(n) {
        showSlides(Index += n);
    }

    function show(n) {
        showSlides(Index = n);
    }
var number = 0;
function copy(num){
    var result = document.getElementsByClassName("result");
    var otvet = document.getElementById('otvet');
    
    if(num == 0){
        result[0].style.display = "none";
    }
    
    if(num != 0){
        number = number + num;
        otvet.innerHTML = "На кнопку было нажато: " + number + " раз";
        result[0].style.display = "block";
    }
}

function sum(){
    var num = document.getElementsByClassName("number");
    var result = document.getElementsByClassName("result2");
    var otvet = document.getElementById('otvet2');
    var num1 = 0, num2 = 0;
    if(!isNaN(Number(num[0].value))){
        num1 = Number(num[0].value);
    }
    if(!isNaN(Number(num[1].value))){
        num2 = Number(num[1].value);
    }
    var summa = sum2(num1, num2);
    
    otvet.innerHTML = "Результат сложения: " + num1 + " + " + num2 + " = " + summa;
    result[0].style.display = "block";
}

function sum2(num1, num2){
    var summa = num1 + num2;
    return summa;
}

function sum_no(){
    var result = document.getElementsByClassName("result2");
    var otvet = document.getElementById('otvet2');
    
    otvet.innerHTML = "";
    result.style.display = "none";
}

function square(){
    var num = document.getElementsByClassName("massive");
    var result = document.getElementsByClassName("result3");
    var otvet = document.getElementById('otvet3');
    
    var massive = new Array(6);
    var text = "Результат возведения в квадрат: ";
    
    for(var i = 0; i < massive.length; i++){
        var value = Number(num[i].value);
        if(!isNaN(value)){
            massive[i] = Number(value);
            massive[i] = massive[i] * massive[i];
            text += massive[i] + " ";
        }
        else{
            massive[i] = 0;
            text += massive[i] + " ";
        }
    }
    
    otvet.innerHTML = text;
    result[0].style.display = "block";
}

function square_no(){
    var result = document.getElementsByClassName("result3");
    var otvet = document.getElementById('otvet3');
    
    otvet.innerHTML = "";
    result.style.display = "none";
}
