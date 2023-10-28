var dataInformation = [];
var checkk = false;
function clearrr() {
    inputs = document.getElementsByTagName('input');
    for (index = 0; index < inputs.length; ++index) {
        inputs[index].value = ''
    }
    document.getElementsByTagName('textarea')[0].value = '';
}

function loadEntry() {
    if (!localStorage.getItem('data')) {
        dataInformation = [];
        document.getElementsByClassName('backtoform')[0].style.display = 'block';
        document.getElementById("con").style.display = 'none';
        return;
    }

    document.getElementById("con").style.display = 'none';
    document.getElementById('table').style.display = 'block';
    document.getElementsByClassName('backtoform')[0].style.display = 'block';
    if (localStorage.getItem('data') && !this.checkk) {
        console.log('HighClaculation');
        this.checkk = true;
        dataInformation = JSON.parse(localStorage.getItem('data'));
        var html = "<table border='1|1'>";
        html += "<thead>";
        html += "<tr class = 'row'>";
        html += "<th>" + 'Name' + "</th>";
        html += "<th>" + 'Email' + "</th>";
        html += "<th>" + 'Contact' + "</th>";
        html += "<th id = 'message'>" + 'Message' + "</th>";
        html += "</tr>";
        html += "</thead>";
        html += "<tbody>";
        for (var i = 0; i < dataInformation.length; i++) {
            html += "<tr class = 'row'>";
            html += "<td>" + dataInformation[i].name + "</td>";
            html += "<td>" + dataInformation[i].email + "</td>";
            html += "<td>" + dataInformation[i].phone + "</td>";
            html += "<td>" + dataInformation[i].message + "</td>";
            html += "</tr>";
        }
        html += "</tbody>";
        html += "</table>";
        document.getElementById("table").innerHTML = html;
        document.getElementById("message").style.width = '300px';
        const collection = document.getElementsByTagName("td");
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.padding = "10px";
        }
        const collection1 = document.getElementsByTagName("th");
        for (let i = 0; i < collection1.length; i++) {
            collection1[i].style.padding = "10px";
            collection1[i].style.textAlign = "center";
        }
    }
}

function backtoForm() {
    document.getElementById("con").style.display = 'block';
    document.getElementById('table').style.display = 'none';
    document.getElementsByClassName('backtoform')[0].style.display = 'none';
}

function submitt() {
    let namee = document.getElementsByTagName('input')[0].value;
    let emaill =  document.getElementsByTagName('input')[1].value;
    let contactt = document.getElementsByTagName('input')[2].value;
    let messagee = document.getElementsByTagName('textarea')[0].value;
    if(namee == '' || emaill == '' ||messagee == ''){
        alert('Please fill the complete details');
        return;
    }
    this.checkk = false;
    let information = {
        name: namee,
        email: emaill,
        phone: contactt,
        message: messagee
    }
    alert('Form is successfully submited')
    if (localStorage.getItem('data')) {
        dataInformation = JSON.parse(localStorage.getItem('data'));
    }
    dataInformation[dataInformation.length] = information;
    localStorage.setItem('data', JSON.stringify(dataInformation));
    console.log(dataInformation);
    this.clearrr();
}