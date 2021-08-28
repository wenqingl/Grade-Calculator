totalActivity = 4;

function percentCalculator(index) {
    var activityNum = index.replace(/[^0-9]/ig, "");
    var grade = document.getElementById("gradeGot" + activityNum).value;
    var total = document.getElementById("gradeTotal" + activityNum).value;

    var percent = parseFloat(grade) / parseFloat(total);

    if (isNaN(percent)) {
        document.getElementById("percent" + activityNum).innerHTML = "Please enter the correct number";
    }
    else {
        document.getElementById("percent" + activityNum).innerHTML = (percent * 100).toFixed(2) + "%";
    }

}

function meanCalculator() {
    var temp = num = skip = 0;
    for (let i = 1; i <= totalActivity; i++) {

        var grade = document.getElementById("gradeGot" + i);
        var total = document.getElementById("gradeTotal" + i);

        if (grade.value == "" && total.value == "") {
            skip++;
            continue;
        }
        else {
            var percent = parseFloat(grade.value) / parseFloat(total.value);

            if (!isNaN(percent)) {
                temp += percent;
                num++;
            }
        }
    }
    var mean = temp / num;
    if (num+skip != totalActivity) {
        document.getElementById("showMean").innerHTML = "Please Check the numbers you entered are valid";
    } else if(num == 0){
        document.getElementById("showMean").innerHTML = "Please Enter the Grade";
    } 
    else {
        document.getElementById("showMean").innerHTML = "The Mean Grade: " + (mean * 100).toFixed(2) + "%";
    }

}

function weightedCalculator() {
    var weightTotal = weightNum = temp = 0;

    for (let i = 1; i <= totalActivity; i++) {
        var grade = document.getElementById("gradeGot" + i).value;
        var total = document.getElementById("gradeTotal" + i).value;
        var weight = document.getElementById("weight" + i).value;

        if (weight == "" && grade == "" && total == "") {
            continue;
        }
        else if (!isNaN(weight) && !isNaN(grade) && !isNaN(total)) {
            var percent = parseFloat(grade) / parseFloat(total);
            temp = temp + weight * percent;
            weightTotal += parseFloat(weight);
        }
        else {
            alert("Please Check the numbers you entered are valid");

        }
    }
    var weighted = temp / weightTotal;
    if (!isNaN(weighted)) {
        document.getElementById("showWeighted").innerHTML = "The Weighted Grade: " + (weighted * 100).toFixed(2) + "%";
    } else if (weightTotal == 0) {
        document.getElementById("showWeighted").innerHTML = "Please Enter the Grade";
    }
    else {
        document.getElementById("showWeighted").innerHTML = "Please Check the numbers you entered are valid";
    }
}

function addRow() {
    var table = document.getElementsByTagName("table")[0];
    var row = table.insertRow();

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    totalActivity++;
    cell1.innerHTML = "Activity " + totalActivity
    cell2.innerHTML = "A" + totalActivity
    cell3.innerHTML = '<td><input type="text" id= "weight"></td>'
    document.getElementById("weight").id = 'weight' + totalActivity;
    cell4.innerHTML = '<td><input type="text" id="gradeGot" oninput="percentCalculator(this.id)"> / <br> <input type="text" id="gradeTotal" oninput="percentCalculator(this.id)"></td>'
    document.getElementById("gradeGot").id = 'gradeGot' + totalActivity;
    document.getElementById("gradeTotal").id = 'gradeTotal' + totalActivity;
    cell5.innerHTML = '<td><p id="percent"></p></td>'
    document.getElementById("percent").id = 'percent' + totalActivity;

}

