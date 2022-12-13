function change() {
    let x = String(Math.floor((Math.random() * 1000000)));
    document.body.style.backgroundColor = "#" + x;
  }
  
  setTimeout(change, 5000);
  
  function foil() {
    document.body.style.fontWeight = "bold";
  
  }
  
  function koil() {
    document.body.style.fontStyle = "italic";
  
  }
  
  function noil() {
    document.body.style.textDecoration = "underline";
  }


  function validate() {
    var name = document.getElementById("nam").value;
    const age = document.getElementById("age").value;
    const movie = document.getElementById("mov").value;
    const address = document.getElementById("add").value;
    const subject = document.getElementById("sub").value;
    const singer = document.getElementById("sin").value;
    const password = document.getElementById("passwd").value;
    var form = document.getElementById("form");
    if (name == "" || password == "" || singer == "" || subject == "" || address == "" || movie == "" || age == "") {
      alert("THERE CAN'T BE EMPTY INPUTS !");
      // window.location.assign="index.html";
      form.action="again.html";
  
    } else {
        alert("SUCCESSFULLY SUBMITTED");
        form.action="submit.html";
  
    }
  }