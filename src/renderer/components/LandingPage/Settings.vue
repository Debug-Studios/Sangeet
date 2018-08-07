<template lang="pug">
  header
    meta(name='viewport' content='width=device-width, initial-scale=1')
    h1 Settings
    el-menu.newb(default-active ='1' background-color='#21272c' style='min-height:1vh;')
      router-link.plain(to='#myBtn')
        el-menu-item(index='1')
          span Music Folders
        #myModal.modal
        // Modal content
        .modal-content
          .modal-header
            // Header text leaving empty
          .row
            .modal-left
              // Leftnav text leaving empty
            .modal-body
            .modal-right
              // <span class="close">&times;</span>
              button.button.button2 Add
              button.button.button2 Remove
              button.button.button2.close Close
          .modal-footer
            // Footer text leaving empty
      router-link.plain(to='#')
        el-menu-item(index='2')
          span Rescan
      router-link.plain(to='#')
        el-menu-item(index='3')
          span Theme
      router-link.plain(to='#')
        el-menu-item(index='4')
          span Help
      router-link.plain(to='#')
        el-menu-item(index='5')
          span Feedback
    // Trigger/Open The Modal
    // button#myBtn Open Modal
    // The Modal

          
</template>

<style lang="scss" scoped>
.is-active {
  border-left: 10px solid;
}

.plain {
  text-decoration: none;
  color: #fff;
}

.newb {
  border-right: 0px;
}

// Modal values
/* The Modal (background) */

.modal {
  display: none;
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  padding-top: 100px;
  /* Location of the box */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
}

/* Modal Content */

.modal-content {
  position: relative;
  background-color: #21272c;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
}

/* Add Animation */
@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }

  to {
    top: 0;
    opacity: 1;
  }
}


@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }

  to {
    top: 0;
    opacity: 1;
  }
}


/* The Close Button */

.close {
  color: white;
  /* float: right;
  font-size: 28px;
  font-weight: bold; */
}

/*.close:hover,
.close:focus {
    color: #FC5F45;
    text-decoration: none;
    cursor: pointer;
} */

.modal-header {
  padding: 2px 16px;
  background-color: #21272c;
  color: white;
}

.modal-body {
  padding: 50px 16px;
  width: 60%;
  background-color: #1B1D1C;
  float: left;
}

.modal-right {
  float: right;
  width: 25%;
  background-color: #21272c;
  padding: 2px 16px;
}

.modal-left {
  float: left;
  width: 1%;
  background-color: #21272c;
  padding-top: 45px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.modal-footer {
  padding: 2px 16px;
  background-color: #21272c;
  color: white;
}

/* Button */

.button {
  background-color: #21272c;
  border: 1px solid #FC5F45;
  color: white;
  padding: 4px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  cursor: pointer;
}

.button2 {
  border-radius: 4px;
}

.button {
  &:hover, &:focus {
    background-color: #FC5F45;
    text-decoration: none;
  }
}

</style>

<script>
// Get the modal
// var modal = document.getElementById('myModal');

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
</script>

