

function AddExpence(){
     
    var amount = document.getElementById('amount').value;
    var discription = document.getElementById('discribe').value;
    var categoty = document.getElementById('category').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
       
   
      var expenceObjects = [];

      let expenceObj = {
          Amount : amount,
          Discription : discription,
          Category : categoty,
          Date : date,
          Time : time,

      };

      expenceObjects.push(expenceObj);
      expenceObjects.push(JSON.parse(localStorage.getItem('expenceObjects')));
      localStorage.setItem("expenceObjects",JSON.stringify(expenceObjects));
      console.log(expenceObjects)


      //  Creating li element ul ***************

      var liElement = document.getElementById('items');

      var li = document.createElement('li');

      li.appendChild(document.createTextNode(amount));
      li.appendChild(document.createTextNode(" "));
      li.appendChild(document.createTextNode(discription));
      li.appendChild(document.createTextNode(" "));
      li.appendChild(document.createTextNode(categoty));
      li.appendChild(document.createTextNode(" "));
      li.appendChild(document.createTextNode(date));
      li.appendChild(document.createTextNode(" "));
      li.appendChild(document.createTextNode( time));
      li.appendChild(document.createTextNode(" "));
    
       // Creatig delete button ***************************

       var deletebtn = document.createElement('button');
       deletebtn.className = " btn btn-danger";
       deletebtn.appendChild(document.createTextNode("Delete"));
       li.appendChild(deletebtn);

       li.appendChild(document.createTextNode(" "));

       // creating edit button *********************

       var edit = document.createElement('button');
       edit.className= "btn btn-primary";
       edit.appendChild(document.createTextNode('Edit'));
       li.appendChild(edit);

       // appending li element to ul *********************

       liElement.appendChild(li);
     
        deletebtn.addEventListener('click', removeLi);

         function removeLi(){
           
             liElement.removeChild(li);
             localStorage.removeItem(expenceObj);


         }

         edit.addEventListener('click',editLi);
         function editLi(){
               
            document.getElementById('amount').value = expenceObj.Amount;
            document.getElementById('discribe').value = expenceObj.Discription;
            document.getElementById('category').value = expenceObj.Category;
            document.getElementById('date').value = expenceObj.Date;
            document.getElementById('time').value = expenceObj.Time;

               liElement.removeChild(li);
               localStorage.removeItem(expenceObj);
         }

     
}

