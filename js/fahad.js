let slideIndex = 1;
        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          let i;
          let slides = document.getElementsByClassName("mySlides");
          let dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}    
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
        }

const answers = [0, 0, 0, 0, 0, 0, 0, 0];

function checkAnswer1() {
    const answer = document.getElementById('answer1').value;
    if (answer.toLowerCase() === 'linus torvalds') {
      alert('Correct!');
      answers[0] = 1;
      document.getElementById('answ1').style.backgroundColor = "green";
      checkAllAnswers();
    } else {
      alert('Sorry, that is incorrect.');
    }
  }

  function checkAnswer2() {
    const answer = document.getElementById('answer2').value;
    if (answer.toLowerCase() === 'info.cern.ch') {
      alert('Correct!');
      answers[1] = 1;
      document.getElementById('answ2').style.backgroundColor = "green";
      checkAllAnswers();
    } else {
      alert('Sorry, that is incorrect.');
    }
  }

  function checkAnswer3() {
    const answer = document.getElementById('answer3').value;
    if (answer.toLowerCase() === 'alan turing') {
      alert('Correct!');
      answers[2] = 1;
      document.getElementById('answ3').style.backgroundColor = "green";
      checkAllAnswers();
    } else {
      alert('Sorry, that is incorrect.');
    }
  }

  function checkAnswer4() {
    const answer = document.getElementById('answer4').value;
    if (answer.toLowerCase() === 'sandeep wanjale') {
      alert('Correct!');
      answers[3] = 1;
      document.getElementById('answ4').style.backgroundColor = "green";
      checkAllAnswers();
    } else {
      alert('Sorry, that is incorrect.');
    }
  }

  function checkAnswer5() {
    const answer = document.getElementById('answer5').value;
    if (answer.toLowerCase() === 'steve sasson') {
      alert('Correct!');
      answers[4] = 1;
      document.getElementById('answ5').style.backgroundColor = "green";
      checkAllAnswers();
    } else {
      alert('Sorry, that is incorrect.');
    }
  }

  function checkAnswer6() {
    const answer = document.getElementById('answer6').value;
    if (answer.toLowerCase() === 'tim berners-lee' || answer.toLowerCase() === 'tim berners lee'  ) {
      alert('Correct!');
      answers[5] = 1;
      document.getElementById('answ6').style.backgroundColor = "green";
      checkAllAnswers();
    } else {
      alert('Sorry, that is incorrect.');
    }
  }

  function checkAnswer7() {
    const answer = document.getElementById('answer7').value;
    if (answer.toLowerCase() === 'atanasoff-berry computer' || answer.toLowerCase() === 'atanasoff berry computer') {
      alert('Correct!');
      answers[6] = 1;
      document.getElementById('answ7').style.backgroundColor = "green";
      checkAllAnswers();
    } else {
      alert('Sorry, that is incorrect.');
    }
  }

  function checkAnswer8() {
    const answer = document.getElementById('answer8').value;
    if (answer.toLowerCase() === 'grace hopper') {
      alert('Correct!');
      answers[7] = 1;
      document.getElementById('answ8').style.backgroundColor = "green";
      checkAllAnswers();
    } else {
      alert('Sorry, that is incorrect.');
    }
  }



function checkAllAnswers(){
    if(answers[0] == 1 && answers[1] == 1 && answers[2] == 1 && answers[3] == 1 && answers[4] == 1 && answers[5] == 1 && answers[6] == 1 && answers[7] == 1) {
        alert('Next room number is 420');
    }
}